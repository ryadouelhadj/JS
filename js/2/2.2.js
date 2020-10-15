const readlineSync = require("readline-sync");
let min = new Number(readlineSync.question('Entre un chiffre minimum'));
let moy = new Number(readlineSync.question('Entre un chiffre moyen'));
let max = new Number(readlineSync.question('Entre un chiffre maximum'));

if ((min<moy) && (moy<max)){
     console.log('GG mon negro');
 }
else if (min>max){
     console.log('Oups tes nul');
 }
else {
    console.log('Oups tes nul');
}



//Demandez à l'utilisateur d'entrer trois chiffres: min, max et current.
//Afficher si current est compris entre min et max.

//Bonus: si min est supérieur à max, affiche un message d'erreur pour expliquer à l'utilisateur
//qu'il ne comprend rien puis quitte le programme. (Il ne doit poser aucune autre question.)