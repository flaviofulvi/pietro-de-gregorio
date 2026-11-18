/* =====================================================================
   DATI DEL SITO
   ---------------------------------------------------------------------
   Questo è l'UNICO file da modificare per cambiare testi, prezzi,
   contatti e domande frequenti. Non serve toccare l'HTML.

   Regole di scrittura dentro i testi:
   - *parola*            diventa evidenziata (verde, corsivo), come
                         nelle copertine di Pietro su Instagram.
   - [DA COMPLETARE: x]  viene mostrato come segnaposto ben visibile.
                         Cerca "DA COMPLETARE" per trovarli tutti.

   Perché un file .js e non .json? Aprendo index.html con un doppio
   clic il browser blocca la lettura di file .json locali, mentre un
   file .js si carica sempre.
   ===================================================================== */

const DATI = {

  /* ---------- Impostazioni generali ---------- */
  impostazioni: {
    // true = i prezzi si vedono sul sito; false = al posto del prezzo
    // compare "testoSenzaPrezzo". Da decidere con Pietro.
    prezziVisibili: true,
    testoSenzaPrezzo: "Prezzo su richiesta"
  },

  /* ---------- Chi è ---------- */
  trainer: {
    nome: "Pietro De Gregorio",
    citta: "L'Aquila",
    instagram: "pietrodegregorio",
    youtube: "https://www.youtube.com/@pietrodegregoriocoach"
  },

  /* ---------- Contatti ---------- */
  contatti: {
    // Numero in formato internazionale, senza + e senza spazi.
    // ATTENZIONE: ora è il numero di test dello sviluppatore.
    whatsapp: "393891848317",
    whatsappLeggibile: "+39 389 184 8317",
    // Messaggio già scritto quando si apre WhatsApp. Usa la parola
    // RESET, la stessa che Pietro chiede di scrivere in DM su Instagram.
    messaggioWhatsapp: "Ciao Pietro! RESET. Vorrei prenotare una consulenza.",
    email: "[DA COMPLETARE: email]",
    dove: "[DA COMPLETARE: nome della palestra e indirizzo], L'Aquila",
    // Testo cercato su Google Maps quando si clicca "Apri in Maps".
    ricercaMaps: "L'Aquila",
    orari: "[DA COMPLETARE: giorni e orari]"
  },

  /* ---------- Hero (prima schermata) ---------- */
  hero: {
    etichetta: "Personal trainer | L'Aquila e online",
    // Il titolo riprende una delle sue copertine più forti.
    titolo: "Sei magro ma con la pancia?",
    titoloAccento: "Parti dal Metodo RESET",
    nota: "Per skinny fat",
    sottotitolo: "Ti aiuto a definire il fisico anche con poco tempo. In palestra a L'Aquila oppure online, ovunque tu sia.",
    pulsante: "Prenota una consulenza",
    pulsanteSecondario: "Come funziona"
  },

  /* ---------- Numeri sotto la hero ---------- */
  numeri: [
    { valore: "+300", testo: "trasformazioni" },
    { valore: "79K", testo: "persone mi seguono su Instagram" },
    { valore: "2", testo: "modi: in presenza o online" }
  ],

  /* ---------- "Ti riconosci?" ---------- */
  problemi: {
    titolo: "Ti *riconosci?*",
    elenco: [
      "Sei magro, ma la pancia non va via.",
      "Ti alleni, ma allo specchio non vedi definizione.",
      "Hai poco tempo e non sai da dove partire.",
      "Hai provato schede e diete trovate online, senza risultati che restano."
    ],
    chiusura: "Ha un nome: *skinny fat*. Ed è proprio la situazione su cui sono specializzato."
  },

  /* ---------- Metodo RESET ---------- */
  metodo: {
    titolo: "Come funziona il *Metodo RESET*",
    nota: "[DA COMPLETARE: confermare le fasi reali del metodo]",
    fasi: [
      { titolo: "Punto di partenza", testo: "Obiettivi, abitudini e tempo che hai davvero a disposizione. Si parte da qui, non da una scheda standard." },
      { titolo: "Allenamento su misura", testo: "Un programma costruito su di te, che lavora sui punti che di solito vengono trascurati." },
      { titolo: "Alimentazione semplice", testo: "Pasti facili da preparare e da mantenere, senza rinunciare a tutto." },
      { titolo: "Controlli e aggiustamenti", testo: "Si verifica come stai andando e si corregge il percorso strada facendo." }
    ]
  },

  /* ---------- Percorsi (servizi e prezzi) ---------- */
  percorsi: {
    titolo: "Scegli il tuo *percorso*",
    elenco: [
      {
        nome: "Coaching online RESET",
        perChi: "Per chi vuole allenarsi dove preferisce, seguito a distanza.",
        include: [
          "Programma di allenamento personalizzato",
          "Indicazioni sull'alimentazione",
          "Controlli periodici [DA COMPLETARE: ogni quanto]",
          "[DA COMPLETARE: supporto in chat? app usata?]"
        ],
        prezzo: "[DA COMPLETARE: prezzo]",
        unita: "al mese",
        messaggio: "Ciao Pietro! RESET. Vorrei informazioni sul coaching online."
      },
      {
        nome: "Personal training a L'Aquila",
        perChi: "Per chi vuole allenarsi in palestra con me, uno a uno.",
        include: [
          "Allenamenti seguiti di persona",
          "Correzione della tecnica esercizio per esercizio",
          "[DA COMPLETARE: pacchetti disponibili, es. 10 lezioni]",
          "[DA COMPLETARE: palestra in cui si allena]"
        ],
        prezzo: "[DA COMPLETARE: prezzo]",
        unita: "a lezione",
        messaggio: "Ciao Pietro! RESET. Vorrei informazioni sul personal training a L'Aquila."
      }
    ]
  },

  /* ---------- Trasformazioni e recensioni ----------
     SOLO materiale reale e con il consenso scritto dei clienti.
     Nella demo sono esempi dichiarati. */
  risultati: {
    titolo: "Trasformazioni",
    nota: "Esempi segnaposto. Qui andranno le trasformazioni e le recensioni reali, pubblicate con il consenso scritto dei clienti.",
    trasformazioni: [
      { nome: "Trasformazione di esempio", durata: "[DA COMPLETARE: durata, es. 26 settimane]" },
      { nome: "Trasformazione di esempio", durata: "[DA COMPLETARE: durata]" }
    ],
    recensioni: [
      { testo: "Recensione di esempio. Verrà sostituita dalle parole di un cliente reale, con il suo consenso.", autore: "Nome cliente", percorso: "Coaching online" },
      { testo: "Recensione di esempio. Verrà sostituita dalle parole di un cliente reale, con il suo consenso.", autore: "Nome cliente", percorso: "Personal training" }
    ]
  },

  /* ---------- Chi sono ---------- */
  chiSono: {
    titolo: "Chi *sono*",
    paragrafi: [
      "Sono Pietro, personal trainer a L'Aquila. Lavoro con un tipo di persona preciso: chi è magro ma ha la pancetta e poco tono.",
      "Per loro ho creato il Metodo RESET, pensato per definire il fisico anche quando il tempo è poco. Seguo i clienti in palestra e online, e ogni settimana condivido consigli pratici su Instagram e YouTube."
    ],
    dettagli: [
      { etichetta: "Certificazioni", valore: "[DA COMPLETARE: certificazioni e titoli]" },
      { etichetta: "Esperienza", valore: "[DA COMPLETARE: anni di esperienza]" },
      { etichetta: "Dove", valore: "L'Aquila e online" }
    ]
  },

  /* ---------- Domande frequenti ----------
     Servono a ridurre i messaggi ripetitivi in DM. */
  faq: {
    titolo: "Le domande che arrivano *in DM*",
    elenco: [
      { domanda: "Quanto costa?", risposta: "Dipende dal percorso. Trovi i dettagli nella sezione Percorsi; se non sai quale scegliere, prenota una consulenza e lo capiamo insieme." },
      { domanda: "Funziona anche se ho poco tempo?", risposta: "Il programma si costruisce sul tempo che hai davvero, non su quello ideale. [DA COMPLETARE: allenamenti minimi a settimana]" },
      { domanda: "Come funziona il coaching online?", risposta: "[DA COMPLETARE: come si svolgono i controlli, app usata, ogni quanto ci si sente]" },
      { domanda: "Mi serve una palestra?", risposta: "[DA COMPLETARE: si può fare anche a casa?]" },
      { domanda: "Com'è la consulenza iniziale?", risposta: "[DA COMPLETARE: gratuita o a pagamento, durata, online o di persona]" }
    ]
  },

  /* ---------- Chiusura ---------- */
  chiusura: {
    titolo: "Scrivi *RESET*",
    testo: "Raccontami da dove parti. Vediamo insieme qual è il percorso giusto per te.",
    pulsante: "Scrivi su WhatsApp"
  },

  /* ---------- Piè di pagina ---------- */
  footer: {
    partitaIva: "[DA COMPLETARE: P.IVA]",
    creditiSito: "Flavio Fulvi"
  }
};
