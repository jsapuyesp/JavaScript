
let juegos = ['zelda', 'mario', 'need'];

console.log(`largo: ${juegos.length}`);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log(`primero: ${primero}, ultimo: ${ultimo}`);

juegos.forEach((elemento, indice, arr) => {
  console.log({ elemento, indice, arr });
});