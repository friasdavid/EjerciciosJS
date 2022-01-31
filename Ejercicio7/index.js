var numero = prompt("Introduce un número: ");

var resultado = parimpar(numero);
alert("El número "+numero+" es "+resultado);

function parimpar(numero) {
  if(numero % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
}


