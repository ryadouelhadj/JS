const readlineSync = require("readline-sync");
let fav = readlineSync.question('Quelle est votre numéro favori?')

while (fav!=42){
    fav = readlineSync.question('Êtes-vous sur?');}
if   (fav==42){
    fav = readlineSync.question('Super!!');}
    
//Créez un programme qui demande le numéro favori de l'utilisateur. 
//Si ce nombre est autre que 42, affichez "Êtes-vous sûr?" et demandez à nouveau. 
//(Ce programme ne devrait jamais se terminer tant que l'utilisateur n'a pas choisi 42).