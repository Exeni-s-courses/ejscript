let juegos = ["Zelda", "Mario", "Metroid", "Metal Slug"];

// console.log("Largo:", juegos.length);

// let primero = juegos[0];
// let ultimo = juegos[juegos.length - 1];
// console.log({ primero, ultimo });

// juegos.forEach((element, index, arr) => {
//   console.log({ element, index, arr });
// });

let nuevaLongitud = juegos.push("F-Zero");
// console.log({ nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift("Fire Emblem");
// console.log({ nuevaLongitud, juegos });

let juegoEliminado = juegos.pop();
// console.log({ juegoEliminado, juegos });

let pos = 1;
let borrados = juegos.splice(pos, 2);
// console.log({ borrados, juegos });

let metroidIndex = juegos.indexOf("Metroid"); // CaseSensitive
console.log(juegos);
console.log(metroidIndex)
