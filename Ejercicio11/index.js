
const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

const sieteletras = meses
.filter (mes => mes.length>7)
.map (mes => mes.toUpperCase());


console.log ("meses: " + meses);
console.log ("más de 7 letras: " + sieteletras);
console.log ("número: " + sieteletras.length);

