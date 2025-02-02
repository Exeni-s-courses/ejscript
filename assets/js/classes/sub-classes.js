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

class Heroe extends Persona {
    clan = 'sin clan';

    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase);
        this.clan = 'Los vengadores';
    }

    quienSoy() {
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}


// const spiderman = new Persona('Peter Parker', 'Spiderman', 'Tu amigo y vecino, el hombre araña');
const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Tu amigo y vecino, el hombre araña');
console.log(spiderman)
spiderman.quienSoy();