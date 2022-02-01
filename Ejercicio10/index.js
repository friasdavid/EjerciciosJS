
const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];

/*
var pares = [];
var impares = [];

for (let i=0; i<number.length; i++){
    if (number[i]%2 == 0){
        pares.push(number[i]);
    } else {
        impares.push(number[i]);
    }
}
*/

var pares = number.filter ((numero)  => numero % 2 == 0);
var impares = number.filter ((numero)  => numero % 2 == 1);


console.log ("array: " + number);
console.log ("pares: " + pares);
console.log ("impares: " + impares);
