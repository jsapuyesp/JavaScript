

class Persona {

  static porObjeto({ nombre, apellido, pais }) {
    return new Persona(nombre, apellido, pais)
  }

  constructor(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  getInfo() {
    console.log(`Nombre: ${this.nombre}, apellido: ${this.apellido}, pais: ${this.pais}`);
  }

}

const nombre1 = 'Marco'
const apellido1 = 'Alonso'
const pais1 = 'España'

persona1 = new Persona(nombre1, apellido1, pais1);

persona1.getInfo();

const objeto = {
  nombre: 'Fulano',
  apellido: 'De tal',
  pais: 'Colombia'
}

persona2 = Persona.porObjeto(objeto);

persona2.getInfo();