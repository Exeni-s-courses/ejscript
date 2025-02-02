class Persona {

    static _conteo = 0;

    static get conteo() {
        return Persona._conteo + ' instancias.';
    }

    static mensaje() {
        // console.log(first)
        console.log('Hola a todos soy un metodo static')
    }

    nombre;
    codigo;
    frase;
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        
        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;

        Persona._conteo++;

    }

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        console.log(`Sou ${this.nombre} y mi identidad es ${this.codigo}`)
    }

    miFrase() {
        console.log(`${this.codigo} dice: ${this.frase}`)
    }

}


const spiderman = new Persona('Peter Parker', 'Spiderman', 'Tu amigo y vecino, el hombre araña');


spiderman.quienSoy();

spiderman.setComidaFavorita = 'El pastel de cereza de la tía May';
// spiderman.nemesis = 'Duende verde';
// spiderman.comida = 'Nueva comida';

// console.log(spiderman.getComidaFavorita);

// console.log(spiderman);
// Persona._conteo = 2;
console.log('Conteo estatico', Persona._conteo);
console.log('Conteo estatico', Persona.conteo);
Persona.mensaje();


Persona.propiedadExterna = 'Hola Mundo';
console.log(Persona.propiedadExterna);
console.log(Persona);