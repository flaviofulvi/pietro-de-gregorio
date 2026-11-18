/* =====================================================================
   MAIN.JS
   Prende i contenuti da dati.js e li inserisce nella pagina.
   Di norma non serve modificarlo: per cambiare un testo usa dati.js.
   ===================================================================== */

(function () {
  "use strict";

  /* ---------- Funzioni di supporto ---------- */

  // Legge un valore annidato da DATI a partire da un percorso tipo "hero.titolo"
  function prendi(percorso) {
    return percorso.split(".").reduce(function (oggetto, chiave) {
      return oggetto ? oggetto[chiave] : undefined;
    }, DATI);
  }

  // Rende sicuro un testo prima di inserirlo come HTML
  function proteggi(testo) {
    return String(testo)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Applica le due regole di scrittura di dati.js:
  // *parola* -> evidenziata;  [DA COMPLETARE: ...] -> segnaposto visibile
  function formatta(testo) {
    if (testo === undefined || testo === null) return "";
    return proteggi(testo)
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/\[DA COMPLETARE[^\]]*\]/g, function (segnaposto) {
        return '<span class="segnaposto">' + segnaposto + "</span>";
      });
  }

  // Costruisce il link WhatsApp con il messaggio già scritto
  function linkWhatsapp(messaggio) {
    var testo = messaggio || DATI.contatti.messaggioWhatsapp;
    return "https://wa.me/" + DATI.contatti.whatsapp + "?text=" + encodeURIComponent(testo);
  }

  // Inserisce l'HTML generato dentro un contenitore [data-lista="..."]
  function riempiLista(nome, html) {
    document.querySelectorAll('[data-lista="' + nome + '"]').forEach(function (el) {
      el.innerHTML = html;
    });
  }

  function haSegnaposto(testo) {
    return /\[DA COMPLETARE/.test(testo);
  }

  /* ---------- 1. Testi singoli: [data-campo="percorso"] ---------- */
  document.querySelectorAll("[data-campo]").forEach(function (el) {
    el.innerHTML = formatta(prendi(el.dataset.campo));
  });

  /* ---------- 2. Link: WhatsApp e Instagram ---------- */
  document.querySelectorAll('[data-link="whatsapp"]').forEach(function (el) {
    el.href = linkWhatsapp();
    el.target = "_blank";
    el.rel = "noopener";
  });
  document.querySelectorAll('[data-link="instagram"]').forEach(function (el) {
    el.href = "https://www.instagram.com/" + DATI.trainer.instagram + "/";
    el.target = "_blank";
    el.rel = "noopener";
  });

  /* ---------- 3. Numeri ---------- */
  riempiLista("numeri", DATI.numeri.map(function (n) {
    return '<li><strong>' + formatta(n.valore) + "</strong><span>" + formatta(n.testo) + "</span></li>";
  }).join(""));

  /* ---------- 4. Ti riconosci? ---------- */
  riempiLista("problemi", DATI.problemi.elenco.map(function (p) {
    return "<li>" + formatta(p) + "</li>";
  }).join(""));

  /* ---------- 5. Fasi del metodo ---------- */
  riempiLista("fasi", DATI.metodo.fasi.map(function (f, i) {
    var numero = String(i + 1).padStart(2, "0");
    return '<li class="fase">' +
      '<span class="fase__numero" aria-hidden="true">' + numero + "</span>" +
      "<h3>" + formatta(f.titolo) + "</h3>" +
      "<p>" + formatta(f.testo) + "</p>" +
      "</li>";
  }).join(""));

  /* ---------- 6. Percorsi e prezzi ---------- */
  riempiLista("percorsi", DATI.percorsi.elenco.map(function (p) {
    // Se i prezzi sono nascosti mostro il testo alternativo
    var prezzo = DATI.impostazioni.prezziVisibili
      ? '<p class="percorso__prezzo">' + formatta(p.prezzo) + ' <small>' + formatta(p.unita) + "</small></p>"
      : '<p class="percorso__prezzo percorso__prezzo--richiesta">' + formatta(DATI.impostazioni.testoSenzaPrezzo) + "</p>";

    return '<article class="percorso">' +
      "<h3>" + formatta(p.nome) + "</h3>" +
      '<p class="percorso__chi">' + formatta(p.perChi) + "</p>" +
      "<ul>" + p.include.map(function (voce) { return "<li>" + formatta(voce) + "</li>"; }).join("") + "</ul>" +
      prezzo +
      '<a class="pulsante pulsante--vuoto" target="_blank" rel="noopener" href="' + proteggi(linkWhatsapp(p.messaggio)) + '">Chiedi info su WhatsApp</a>' +
      "</article>";
  }).join(""));

  /* ---------- 7. Trasformazioni e recensioni (segnaposto) ---------- */
  riempiLista("trasformazioni", DATI.risultati.trasformazioni.map(function (t) {
    return '<figure class="trasformazione">' +
      '<div class="trasformazione__foto"><span>Prima</span><span>Dopo</span></div>' +
      "<figcaption><strong>" + formatta(t.nome) + "</strong> " + formatta(t.durata) + "</figcaption>" +
      "</figure>";
  }).join(""));

  riempiLista("recensioni", DATI.risultati.recensioni.map(function (r) {
    return '<blockquote class="recensione">' +
      "<p>" + formatta(r.testo) + "</p>" +
      "<footer>" + formatta(r.autore) + " | " + formatta(r.percorso) + "</footer>" +
      "</blockquote>";
  }).join(""));

  /* ---------- 8. Chi sono ---------- */
  riempiLista("chiSono", DATI.chiSono.paragrafi.map(function (p) {
    return "<p>" + formatta(p) + "</p>";
  }).join(""));

  riempiLista("dettagli", DATI.chiSono.dettagli.map(function (d) {
    return "<div><dt>" + formatta(d.etichetta) + "</dt><dd>" + formatta(d.valore) + "</dd></div>";
  }).join(""));

  /* ---------- 9. Domande frequenti ----------
     <details> apre e chiude la risposta senza JavaScript
     ed è già utilizzabile da tastiera. */
  riempiLista("faq", DATI.faq.elenco.map(function (f) {
    return '<details class="domanda">' +
      "<summary>" + formatta(f.domanda) + "</summary>" +
      "<p>" + formatta(f.risposta) + "</p>" +
      "</details>";
  }).join(""));

  /* ---------- 10. Contatti ---------- */
  var c = DATI.contatti;
  var voci = [
    { etichetta: "WhatsApp", valore: c.whatsappLeggibile, href: linkWhatsapp() },
    { etichetta: "Instagram", valore: "@" + DATI.trainer.instagram, href: "https://www.instagram.com/" + DATI.trainer.instagram + "/" },
    // Finché manca il link, al posto di "Canale YouTube" si vede il segnaposto
    { etichetta: "YouTube", valore: haSegnaposto(DATI.trainer.youtube) ? DATI.trainer.youtube : "Canale YouTube", href: DATI.trainer.youtube },
    { etichetta: "Email", valore: c.email, href: "mailto:" + c.email },
    { etichetta: "Dove", valore: c.dove, href: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(c.ricercaMaps) },
    { etichetta: "Orari", valore: c.orari }
  ];
  riempiLista("contatti", voci.map(function (v) {
    // Se il link o il testo non sono ancora completi, mostro solo il testo
    // (un link con dentro un segnaposto porterebbe nel posto sbagliato).
    var linkValido = v.href && !haSegnaposto(v.href) && !haSegnaposto(v.valore);
    var contenuto = linkValido
      ? '<a href="' + proteggi(v.href) + '" target="_blank" rel="noopener">' + formatta(v.valore) + "</a>"
      : formatta(v.valore);
    return '<li><span class="contatti__etichetta">' + formatta(v.etichetta) + "</span>" +
      '<span class="contatti__valore">' + contenuto + "</span></li>";
  }).join(""));

  /* ---------- 11. Anno nel piè di pagina ---------- */
  document.getElementById("anno").textContent = new Date().getFullYear();

  /* ---------- 12. Barra fissa (telefono) e intestazione (desktop) ----------
     Quando i pulsanti della hero escono dallo schermo:
     - sul telefono compare la barra fissa in basso;
     - su desktop l'intestazione diventa piena, con il pulsante di contatto.
     La barra sparisce di nuovo quando si arriva ai contatti o al piè di
     pagina, che hanno già il loro pulsante. Quale dei due si vede lo
     decide il CSS (la barra è nascosta da 1000px in su). */
  var barra = document.getElementById("barra-fissa");
  var testata = document.querySelector(".testata");
  var azioniHero = document.getElementById("azioni-hero");
  var contatti = document.getElementById("contatti");
  var piede = document.querySelector(".piede");

  if ("IntersectionObserver" in window && barra && testata && azioniHero && contatti && piede) {
    var heroVisibile = true;
    var finaleVisibile = { contatti: false, piede: false };

    var aggiorna = function () {
      var mostra = !heroVisibile && !finaleVisibile.contatti && !finaleVisibile.piede;
      barra.classList.toggle("barra-fissa--visibile", mostra);
      barra.setAttribute("aria-hidden", String(!mostra));
      barra.querySelector("a").tabIndex = mostra ? 0 : -1;
      testata.classList.toggle("testata--piena", !heroVisibile);
    };

    new IntersectionObserver(function (voci) {
      heroVisibile = voci[0].isIntersecting;
      aggiorna();
    }).observe(azioniHero);

    // Un solo osservatore per contatti e piè di pagina
    var osservaFinale = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) {
        finaleVisibile[v.target === piede ? "piede" : "contatti"] = v.isIntersecting;
      });
      aggiorna();
    }, { threshold: 0.15 });
    osservaFinale.observe(contatti);
    osservaFinale.observe(piede);
  }
})();
