/*
A partir del siguiente código vamos a definir varios eventos para tener una página interactiva. Concretamente:
- Cuando hagamos click sobre el botón de guardar aparecerá un alert.
- Cuando hagamos foco sobre el input del nombre el fondo será de un color y cuando se lo quitemos, de otro.
- Dependiendo de si escribimos una vocal o una consonante en el segundo input su contenido se mostrará de un color distinto.
En la figura 49 puedes ver el código HTML, añade las clases o selectores que necesites.
*/
function displayalert () {
    alert ("Alerta!!!!");
}


function onfocusfunc(x) {
    x.style.background = "yellow";
  }

function onblurfunc (x) {
    x.style.background = "";
}


function oninputfunc (event) {
    var dato = event.value;
    
    var arrayvocal = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
 
    var vocal = arrayvocal.indexOf (dato);
    
    if (vocal !== -1) {
        event.style.color = "red";
    } else {
        event.style.color = "blue";
    }
}