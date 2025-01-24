/*
Dias de semana abrimos a las 11,
pero los fines de semana abrimos a las 9
*/

// Entra a un sitio web, para consultar si está abierto hoy...

const dia = 1;
const horaActual = 10;

let horaApertura;
let mensaje;

// if ([0, 6].includes(dia)) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// }

horaApertura = ([0, 6].includes(dia)) ? 9 : 11;

mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Está cerrado, hoy abrimos a las  ${horaApertura}`;

console.log({ horaApertura, mensaje })