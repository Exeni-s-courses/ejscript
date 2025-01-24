// function crearPersona(nombre, apellido) {
//   return {
//     nombre, apellido
//   };
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido })

const persona = crearPersona('Fernando', 'Herrera');
// console.log(persona)

function imprimeArgumentos() {
  // console.log(arguments)
  // console.log(Object.values(arguments))
}


const imprimeArgumentos2 = (...args) => (args)

// console.log(imprimeArgumentos(10, true, false, 'Javier', 'Hola'));
// console.log(imprimeArgumentos2(10, true, false, 'Javier', 'Hola'));
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Javier', 'Hola');
console.log({ casado, vivo, nombre, saludo })

const { apellido: nuevoApellido } = crearPersona('Fernando', 'Herrera');

console.log({ nuevoApellido });


const tony = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  trajes: ["Mark 1", "Mark 5", "Hulkbuster"],
};

const imprimePropiedades = ({nombre, codeNamem, vivo, edad, trajes}) => {
  console.log({nombre})
  console.log({codeNamem})
  console.log({vivo})
  console.log({edad})
  console.log({trajes})
}

imprimePropiedades(tony)