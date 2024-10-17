// ! Gioco dei dadi
// * Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// * Stabilire il vincitore, in base a chi fa il punteggio più alto.

// # Raccolta Dati
// genera un numero random per il giocatore e assegnalo a una variabile
const userNumber = Math.ceil(Math.random() * 6);

// genera un numero random per il computer e assegnalo a una variabile
const computerNumber = Math.ceil(Math.random() * 6);

// crea variabile per risultato e messaggio di output
let result;
let outputMessage;

// # Elaborazione
// SE i numeri sono uguali
if (userNumber === computerNumber) {
  // messaggio di output pareggio
  result = "E' un Pareggio";
}

// SE il numero del giocatore è maggiore del numero del computer
if (userNumber > computerNumber) {
  // messaggio di output giocatore vincente
  result = "Hai Vinto!";
}

// ALTRIMENTI
if (userNumber < computerNumber) {
  // messaggio di output computer vincente
  result = "Hai Perso :(";
}

// # Output
// messaggio di output
outputMessage = `
    - Numero estratto: ${userNumber} 
    - Numero del computer: ${computerNumber}
    
    ${result}
`;

// alert
alert(outputMessage);

// debug console log
console.log(`
    userNumber: ${userNumber}
    computerNumber: ${computerNumber}
    result: ${result}
    outputMessage: ${outputMessage}
`);
