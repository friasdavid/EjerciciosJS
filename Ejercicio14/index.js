class cuadrado {
    constructor(lado) {
        this.lado = lado;
        this.calculoarea = function () {
            this.area = this.lado * this.lado;
        }
        this.calculoperimetro = function () {
            this.perimetro = this.lado * 4;
        }
        this.mostrar = function () {
            this.calculoarea ();
            this.calculoperimetro ();
            console.log ("Lado: " + this.lado);
            console.log ("Area: " + this.area);
            console.log ("Perímetro: " + this.perimetro);
        }
    }
}

const cpequeno = new cuadrado (2);
cpequeno.mostrar ();

const cmediano = new cuadrado (5);
cmediano.mostrar ();

const cgrande = new cuadrado (10);
cgrande.mostrar ();

