

class Persona {

  static _conteo = 0;

  static get conteo() {
    return Persona._conteo + ' Instancias'
  }

  static mensaje() {
    console.log('Hola metodo estático');
    return 'Hola'
  }

  #nombre;
  #codigo;
  #frase;
  #comida;

  constructor(nombre, codigo, frase) {
    this.#nombre = nombre;
    this.#codigo = codigo;
    this.#frase = frase;

    Persona._conteo++;
  }

  set setComidaFavorita(comida) {
    this.#comida = comida.toUpperCase();
  }

  quienSoy() {
    console.log(`soy ${this.#nombre}`);
  }

  miFrase() {
    console.log(`mi frase ${this.#frase}`);
  }

}

const spiderman = new Persona('Peter', 'Spiderman', 'Hola!');
spiderman.setComidaFavorita = 'Pastas'

console.log(Persona.mensaje());