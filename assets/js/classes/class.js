class Persona {

    nombre;
    codigo;
    frase;

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        console.log('Hola!');

        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;

    }

    quienSoy() {
        console.log(`Sou ${this.nombre} y mi identidad es ${this.codigo}`)
    }

    miFrase() {
        console.log(`${this.codigo} dice: ${this.frase}`)
    }

}


const spiderman = new Persona('Peter Parker', 'Spiderman', 'Tu amigo y vecino, el hombre araña');

console.log(spiderman);

spiderman.quienSoy();
spiderman.miFrase();