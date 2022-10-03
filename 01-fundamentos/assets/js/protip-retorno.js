// function crearPersona(nombre, apellido) {
//   return {
//     nombre,
//     apellido
//   }
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido })


const juan = crearPersona('Juan', 'Sapuyes');
console.log(juan); 