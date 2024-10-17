// ! Gioco dei dadi
// * Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// * Stabilire il vincitore, in base a chi fa il punteggio più alto.

// # Raccolta Dati
// genera un numero random per il giocatore e assegnalo a una variabile
const userNumber = Math.ceil(Math.random() * 6);

// genera un numero random per il computer e assegnalo a una variabile
const computerNumber = Math.ceil(Math.random() * 6);

// crea variabile messaggio di output
let outputMessage;

// # Elaborazione
// SE i numeri sono uguali
// messaggio di output pareggio

// SE il numero del giocatore è maggiore del numero del computer
// messaggio di output giocatore vincente

// ALTRIMENTI
// messaggio di output computer vincente

// # Output
// messaggio di output

// debug console log
console.log(`
    userNumber: ${userNumber}
    computerNumber: ${computerNumber}
    outputMessage: ${outputMessage}
`);
