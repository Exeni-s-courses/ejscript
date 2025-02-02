class Persona {

    nombre;
    codigo;
    frase;

    constructor(nombre= 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase'){
        console.log('Hola!');

        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;

    }
    
}


const spiderman = new Persona('Peter Parker', 'Spider', 'Tu amigo y vecino, el hombre araña');

console.log(spiderman)