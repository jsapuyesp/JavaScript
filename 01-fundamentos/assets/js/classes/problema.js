// Forma antigua de crear e implementar clases


function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;

  this.imprimir = function () {
    console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`)
  }
}

const juan = new Persona('Juan', 18);
juan.imprimir();

