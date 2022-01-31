var frase = prompt("Introduce una frase: ");

var resultado = mayuscminusc(frase);

alert ("La frase \""+ frase + '\" ' + resultado);

function mayuscminusc(frase) {
 
  if (frase == frase.toUpperCase()) {
    resultado = " está formada sólo por mayúsculas";
  }
  else if(frase == frase.toLowerCase()) {
    resultado = " está formada sólo por minúsculas";
  }
  else {
    resultado = " está formada por mayúsculas y minúsculas";
  }

  return resultado;
}