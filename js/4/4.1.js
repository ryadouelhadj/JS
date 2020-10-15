function calcSurface(largeur, longueur){
    return largeur*longueur;
}
const readlineSync = require("readline-sync");
let L = readlineSync.question('Quelle est la base du rectangle?');
let l = readlineSync.question('Quelle est la hauteur du rectangle?');
console.log("la surface est" + calcSurface(L,l));






//Créez une fonction nommée calcSurface qui prend la longueur et la largeur d'un rectangle et 
//renvoie sa surface. Créez ensuite un programme qui demande la longueur et la largeur 
//d'un rectangle à l'utilisateur puis affiche la surface de ce rectangle. 
//Ce programme doit utiliser la fonction que vous avez créée.

//Rédigez une documentation pour la calcSurface fonction