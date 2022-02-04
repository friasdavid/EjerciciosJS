//A partir del siguiente código y utilizando las funciones DOM muestra por pantalla la siguiente información:
//- Número de enlaces de la página.
//- Dirección a la que enlanza el penúltimo enlace.
 //- Número de enlaces del tercer párrafo.
//Además, pinta los resultados al final de la página utilizando innerHTML y creando un nodo.


const parrafo = document.createElement ("h2");
parrafo.innerHTML = "Nuevo contenido";
document.body.appendChild (parrafo);

// Numero de enlaces de la pagina
var enlaces = document.getElementsByTagName("a");
const penlaces = document.createElement ("p");
penlaces.innerHTML = "Numero de enlaces = "+ enlaces.length;
document.body.appendChild (penlaces);

// Direccion del penultimo enlace
const direnlace = document.createElement ("p");
direnlace.innerHTML = "El penultimo enlace apunta a: " + enlaces[enlaces.length-2].href;
document.body.appendChild (direnlace);


  
// Numero de enlaces del tercer párrafo
var parrafos = document.getElementsByTagName("p");
enlaces = parrafos[2].getElementsByTagName("a");
const numenlaces = document.createElement ("p");
numenlaces.innerHTML = "Numero de enlaces del tercer párrafo = "+ enlaces.length;
document.body.appendChild (numenlaces);


