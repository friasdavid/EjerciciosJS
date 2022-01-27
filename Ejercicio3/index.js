const data = ["hola", 2, 5, "adios"];

/*
- Determina cuál de los dos números que hay en el array es mayor.
- Determina el resultado de las cinco operaciones numéricas realizadas con los dos elementos numéricos.
Recuerda que podemos acceder a los elemento de un array gracias a su posición: data[0].
*/

const comparar = data[1]>data[2];

console.log("¿es " + data[1] + " mayor que " + data[2] + "? " + comparar);

const suma = data[1] + data[2];
const resta = data[1] - data[2];
const producto = data[1] * data[2];
const cociente = data[1] / data[2];
const resto = data[1] % data[2];

console.log("suma= ", suma);
console.log("resta= ", resta);
console.log("producto= ", producto);
console.log("cociente= ", cociente);
console.log("resto= ", resto)



