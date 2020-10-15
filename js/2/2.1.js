const readlineSync = require("readline-sync");
let age = readlineSync.question('Quelle est votre age?');

if (age>=18) {
    console.log('Tu es un adulte');
}
else {
    console.log('Tu es un enfant batard');
}
//Demandez à l'utilisateur de saisir son âge. Si son âge est d'au moins 18 ans, affichez
//"Vous êtes un adulte". Si ce n'est pas
//le cas, présentez "Vous n'êtes pas encore adulte"