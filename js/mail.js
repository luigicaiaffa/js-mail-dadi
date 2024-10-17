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
const isUserMailValid = userMail.includes("@") && userMail.includes(".");

// SE la mail inserita è valida
if (isUserMailValid) {
  //   SE la mail inserita è uguale ad una mail della lista di mail
  if (registeredMails.includes(`${userMail}`)) {
    // messaggio di output esito positivo
    outputMessage = `Accesso consentito - Bentornato ${userMail}`;
  }

  // ALTRIMENTI
  else {
    // messaggio di output esito negativo
    outputMessage = `Accesso negato - eMail non registrata`;
  }
}

// ALTRIMENTI
else {
  // messaggio di output eMail inserita in formato non valido
  outputMessage = `eMail inserita in formato non valido`;
}

// # Output
// messaggio di output
alert(outputMessage);

// debug console log
console.log(`
    registeredMails: ${registeredMails}
    userMail: ${userMail}
    isUserMailValid: ${isUserMailValid} 
    outputMessage: ${outputMessage} 
`);
