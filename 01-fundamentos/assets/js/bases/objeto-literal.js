let personaje = {
  nombre: 'Tony Stark',
  codeName: 'Iron Man',
  vivo: false,
  edad: 40,
  coords: {
    lat: 30.034,
    lng: -118.70
  },
  trajes: ['Mark 1', 'Mark V'],
  direccion: {
    zip: '10880, 90265',
    loc: 'California'
  },
  'ultima-pelicula': 'Endgame'
}

console.log('Nombre: ', personaje.nombre);
console.log(personaje);
console.log('Nombre: ', personaje['nombre']);
console.log('Trajes: ', personaje['trajes'].length)

const x = 'vivo';
console.log(x, personaje[x]);

console.log('Última película: ', personaje['ultima-pelicula']);

// Mas detalles

const entradasPares = Object.entries(personaje);
console.log(entradasPares);