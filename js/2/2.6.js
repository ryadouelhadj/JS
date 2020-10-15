const readlineSync = require("readline-sync");
let fav = readlineSync.question('Donnez moi un chiffre de 1 à 7.')

if (fav==1){
    fav = readlineSync.question('Lundi');
}
if (fav==2){
    fav = readlineSync.question('Mardi');
}
if (fav==3){
    fav = readlineSync.question('Mercredi');
}
if (fav==4){
    fav = readlineSync.question('Jeudi');
}
if (fav==5){
    fav = readlineSync.question('Vendredi');
}
if (fav==6){
    fav = readlineSync.question('Samedi');
}
if (fav==7){
    fav = readlineSync.question('Dimanche');
}


//Créez un programme qui demande à l'utilisateur 
//de saisir un nombre entre 1 et 7. 
//En fonction du nombre, affichez le jour de la semaine 
//correspondant. (1 => lundi, 2 => mardi, etc ...)