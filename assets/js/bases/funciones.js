function saludar(nombre) {
  //   console.log(arguments);
  //   console.log("Hola", nombre);
  return 1;
}

// var saludar = 123;

const saludar2 = function (nombre) {
  console.log("Buenas tardes,", nombre);
};

// Lamda function

const saludarLambda = (nombre) => {
  console.log("Buenas noches,", nombre);
};

const retornoDeSaludar = saludar("Javier", 40, true, "Bolivia");
console.log({ retornoDeSaludar });
// saludar2("Javier");
// saludarLambda("Javier");

function sumar(a, b) {
  return a + b;
}

// const sumar2 = (a, b) => {
//   return a + b;
// };

const sumar2 = (a, b) => a + b;

function getAleatorio(){
    return Math.random();
}


const getAletaorio2 = () => Math.random() 

console.log(getAletaorio2());
