const readlineSync = require("readline-sync");

function rand10() {
    return parseInt(Math.random()*10)+1;
  }
let arr = [];
let howmany = parseInt(readlineSync.question('Combien de nombre aléatoire veux-tu?'));

function multiRand10(n){
    for (let x=0;x<=(n-1);x++){
        arr.push(rand10());
    }
    return arr;
}
console.log(`tu as ${howmany} nombre aléatoire dans l'array: ${multiRand10(howmany)}`);




//En réutilisant la fonction rand10() créée dans l'exercice 2, 
//écrivez une fonction nommée multiRand(n)qui renvoie un tableau de n nombres 
//entre 1 et 10. Vous ne devez rien modifier rand10()pour y parvenir.

//Rédigez une documentation pour la multiRand(n)fonction.

//Utilisez cette fonction pour créer un programme qui demandera le nombre de
//nombres aléatoires à générer puis affichera ce même nombre de nombres aléatoires.