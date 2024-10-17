// ! Mail
// * Chiedi all'utente la sua email,
// * controlla che sia nella lista di chi può accedere,
// * stampa un messaggio appropriato sull'esito del controllo.

// # Raccolta Dati
// creo una lista di mail registrate
const registeredMails = [
  "mail@mail.com",
  "info@mail.it",
  "ads@mail.com",
  "user@mail.it",
  "ciao@mail.it",
];

// chiedi una mail all'utente con un prompt e assegnale una variabile
const userMail = prompt("Inserisci la tua eMail");

// crea variabile per messaggio di output
let outputMessage;

// # Elaborazione
// verifica se la mail è inserita in formato valido

// SE la mail inserita è valida AND uguale ad una mail della lista di mail
//      messaggio di output esito positivo

// ALTRIMENTI
//      messaggio di output esito negativo

// # Output
// messaggio di output

// ! Gioco dei dadi
// * Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// * Stabilire il vincitore, in base a chi fa il punteggio più alto.
