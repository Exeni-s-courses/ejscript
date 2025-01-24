const personaje = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["Mark 1", "Mark 5", "Hulkbuster"],
  direccion: {
    zip: "10880, 90265",
    ubicacion: "Malibu, California",
  },
  "ultima pelicula": "Inifinty War",
};

// console.log({ personaje });
// console.log("Nomhbre:", personaje.nombre);
// console.log("Nomhbre:", personaje["nombre"]);
// console.log("Edad:", personaje.edad);
// console.log("Lat:", personaje.coords.lat);
// console.log("Nro Trajes:", personaje.trajes.length);
// console.log("último Trajes:", personaje.trajes[personaje.trajes.length - 1]);

// const x = "vivo";
// console.log("Vivo:", personaje[x]);
// console.log("Última pelicula:", personaje["ultima pelicula"]);

// Más detalles

delete personaje.edad;
// console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
// console.log(entriesPares);

Object.freeze(personaje);

// Directos - Inmutables
personaje.dinero = 10000000000000;
personaje.casado = false;

// No Directos - Mutables
personaje.direccion.ubicacion = 'Costa Rica';
console.log(personaje)


const keys = Object.getOwnPropertyNames(personaje);
const values = Object.values(personaje);
console.log({keys, values})
