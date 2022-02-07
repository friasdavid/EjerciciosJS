/*
A partir del siguiente código vamos a definir varios eventos para tener una página interactiva. Concretamente:
- Cuando hagamos click sobre el botón de guardar aparecerá un alert.
- Cuando hagamos foco sobre el input del nombre el fondo será de un color y cuando se lo quitemos, de otro.
- Dependiendo de si escribimos una vocal o una consonante en el segundo input su contenido se mostrará de un color distinto.
En la figura 49 puedes ver el código HTML, añade las clases o selectores que necesites.
*/

var button = document.getElementsByTagName ("button");
button[0].addEventListener ("click", displayalert);

function displayalert () {
    alert ("Alerta!!!!");
}

document.getElementById ("texto1").onfocus = function () {onfocusfunc ()};
document.getElementById ("texto1").onblur = function () {onblurfunc ()};

function onfocusfunc() {
    document.getElementById ("texto1").style.background = "yellow";
  }

function onblurfunc() {
    document.getElementById ("texto1").style.background = "";
}


document.getElementById("texto2").oninput = function() {oninputfunc()};

function oninputfunc () {
    var dato = document.getElementById ("texto2").value;
    var arrayvocal = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
 
    var vocal = arrayvocal.indexOf (dato);

    if (vocal !== -1) {
       document.getElementById ("texto2").style.color = "red";
    } else {
       document.getElementById ("texto2").style.color = "blue";
    }
}
