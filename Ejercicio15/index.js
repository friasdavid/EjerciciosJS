class factura {
    constructor (cliente, elementos) {
        this.cliente = cliente;
        this.elementos = elementos;
        this.informacion = {
            baseimponible: 0,
            iva: 21,
            total: 0,
            formapago: "efectivo"
        }

        this.calculototal = function () {
            for (var i=0; i<this.elementos.length; i++){
                this.informacion.baseimponible += this.elementos[i].cantidad * this.elementos[i].precio;
            }
    
            this.informacion.total = this.informacion.baseimponible * (1+(this.informacion.iva/100));
        }

        this.mostrartotal = function () {
            this.calculototal ();
            alert ("El total de los productos es " + this.informacion.total);
        }
    }
}

class cliente {
    constructor (nombre, direccion, telefono, nif) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nif = nif;
    }
}

class elemento {
    constructor (descripcion, cantidad, precio) {
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

const primercliente = new cliente ("Pepa", "Madrid", "654321123", "1234567D");
const arrayelementos =[new elemento ("Objeto 1", 1, 5), new elemento ("Objeto 2", 3, 4)];
const facturadeltotal = new factura (primercliente, arrayelementos);
facturadeltotal.mostrartotal();