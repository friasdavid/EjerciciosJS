var DNI = prompt("Introduce DNI sin letra");
var listaletra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

if (DNI < 0 || DNI > 99999999) {
    alert ("El número proporcionado no es válido");
}
else {
    var posicion = DNI%23;
    alert ("la letra para el DNI " + DNI + " es: " + listaletra[posicion]);
}



