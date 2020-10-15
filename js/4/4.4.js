const readlineSync = require("readline-sync");


    function rand10() {
        return parseInt(Math.random()*10)+1;
      }
    let arr = [];
    let howmany = parseInt(readlineSync.question('Combien de nombre aléatoire veux-tu?'));
    let c =0,i;
    function multiRand10(n){
        for (let x=0;x<=(n-1);x++){
            arr.push(rand10());
        }
        return arr;
}

function average(arr){
    for (i = 0;i<arr.length; i++){
        c +=Number(arr[i]);
    }
    return c/arr.length;
}

function min(arr){
    return Math.min(...arr);
}
function max(arr){
    return Math.max(...arr);
}

console.log(`tu as ${howmany} nombre aléatoire dans l'array: ${multiRand10(howmany)}.La moyennes de cette array es
 ${average(arr)}, le nombre minimum es ${min(arr)}, le nombre maximum es ${max(arr)}`);

//Créez une fonction nommée average(arr) qui prend un tableau de nombres comme argument 
//et renvoie la moyenne.

//Créez une fonction nommée min(arr) qui prend un tableau de nombres comme argument 
//et renvoie l'élément minimum.

//Créez une fonction nommée max(arr) qui prend un tableau de nombres comme argument 
//et renvoie l'élément maximum.

//Créez un programme qui demande un nombre à l'utilisateur, puis générez la même 
//quantité de nombres aléatoires mais affiche également leur moyenne, min et max. 
//Pour ce faire, utilisez les trois fonctions que vous venez de créer ainsi que la 
//multiRand(n)fonction créée dans l'exercice 3.

//Rédigez une documentation pour toutes les fonctions que vous avez créées.