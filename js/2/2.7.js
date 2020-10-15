const readlineSync = require("readline-sync");
let n = readlineSync.question('Donner moi le nombre que vous voulez')

let i=0;
let numb=0;
let som=0;

while (i<n){
    numb = (readlineSync.question('Entrer un autre numero'));
    som=som+parseInt(numb);
    i++;
}
console.log("la som est"+""+som);










//Créez un programme qui demande à l'utilisateur d'entrer un numéro nommé n. 
//Ensuite, demandez-lui le n temps d'entrer un nouveau numéro. 
//À la fin, affichez la somme de tous les nombres ainsi collectés.

//Exemple: Si l'utilisateur entre 3 pour n alors 1, 2 et 3, le programme doit s'afficher 6.