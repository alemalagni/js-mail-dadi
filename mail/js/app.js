// Dichiarare le variabili
const lista = [
    "giovanni@fiscali.it",
    "paolo89@gnail.com",
    "annamaria@mail.it",
    "pippo@pippo.com",
    "optimusprime@outfork.com",
    "rickyone@gnail.com",
]

// Chiedere all'utente la mail
const mail = prompt("Inserire la propria mail:");
let controllo = false;

// Controllo mail
for( let i = 0; i < lista.length || controllo === true ; i++) {
    if ( lista[i] === mail ) {
        controllo = true;
    }
}

// Output
if ( controllo === true ) {
    console.log("La sua mail è presente tra gli invitati")
} else if ( controllo === false ) {
    console.log("Mi dispiace ma la sua mail non è presente tra gli invitati")
}
