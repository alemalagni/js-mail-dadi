// Dichiarazione variabili
const numPlayer = parseInt( Math.random() * 6 + 1 );
const numComputer = parseInt( Math.random() * 6 + 1 );

// Stampare i due numeri
console.log("Giocatore:" + numPlayer);
console.log("Computer:" + numComputer);

// Confronto
if ( numPlayer > numComputer ) {
    console.log("Vince Giocatore")
} else if ( numPlayer > numComputer ) {
    console.log("Vince Computer")
} else {
    console.log("Parità")
}
