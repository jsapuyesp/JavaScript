
class Singleton {
  static instancia;
  nombre = ''

  constructor(nombre = '') {

    // Con esta condición en el constructor nos ocupamos de que la instancia sólo sea creada una vez.
    if (!!Singleton.instancia) {
      return Singleton.instancia
    }

    Singleton.instancia = this;
    this.nombre = nombre;

    return this;
  }
}

const instancia1 = new Singleton('iron');

console.log(`Nombre en la instancia: ${instancia1.nombre}`);