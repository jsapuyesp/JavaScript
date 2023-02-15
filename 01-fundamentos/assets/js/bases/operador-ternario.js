const dia = 1; // 0 es domingo
const horaActual = 10;

let horaApertura;
let mensaje; // Está abierto || Esta cerrado, abrimos a las xx

// if (dia === 0 || dia === 6) {
// if ([0, 6].includes(dia)) {
//   console.log('FIn de semana');
//   horaApertura = 9;
// } else {
//   console.log('Dia de semana');
//   horaApertura = 11;
// }

horaApertura = ([0, 6].includes(dia)) ? 9 : 11;

mensaje = (horaActual >= horaApertura) ? 'Abierto' : `Cerrado, abrimos a las ${horaApertura}`;

// if (horaActual >= horaApertura) {
//   mensaje = 'Está abierto';
// } else {
//   mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
// }

console.log({ horaApertura, mensaje });
