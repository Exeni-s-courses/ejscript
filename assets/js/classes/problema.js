const fer = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre}`)
    }
}

// fer.imprimir();

function Persona(nombre, edad) {

    console.log('se ejecuto esta linea')

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function () {
        console.log(`Nombre: ${this.nombre}`)
    }
}

const maria = new Persona('Maria', 18);
const melisa = new Persona('Melisa', 35);
maria.imprimir()
melisa.imprimir()
