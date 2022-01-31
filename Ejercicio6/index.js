const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2];

var sumafor = 0;
var sumaforof = 0;

for (let i=0; i<9; i++){
    sumafor = sumafor + notas[i];
}
alert ("la suma total del for es: " + sumafor);

for (const nota of notas){
    sumaforof = sumaforof + nota;
}
alert ("la suma total del for..of es: " + sumaforof);


