class Singleton {
    static #instance;
    name = '';

    constructor(name = ''){
        if( !!Singleton.#instance ){
            return Singleton.#instance;
        }
        Singleton.#instance = this;
        this.name = name;
    }

}


const instance1 = new Singleton('Ironman');
const instance2 = new Singleton('Spiderman');
const instance3 = new Singleton('BlackPanther');
console.log(`Nombre en la instancia 1: ${ instance1.name}`);
console.log(`Nombre en la instancia 2: ${ instance2.name}`);
console.log(`Nombre en la instancia 3: ${ instance3.name}`);