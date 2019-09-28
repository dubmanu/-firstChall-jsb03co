'use strict';


// * * * * * * * * * * * * * * * * * * * * * * *
// *  2. R E G I S T R O   A C A D Ã‰ M I C O   *
// * * * * * * * * * * * * * * * * * * * * * * *

//   - Crea la clase "Person" que incluya las propiedades:
//    nombre, edad y género, y un método que muestre por pantalla
//    las propiedades de una persona.
class Person {
  constructor(nombre, edad, genero){
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
  static screenShow(persons){
    for (let person of persons){
      console.log(person.name, person.edad, person.genero);
    }
  }
}

//   - Crea la clase "Teacher". Esta clase debe heredar de "Person",
//    y debe inclui­r, a mayores, las propiedades: "subject"*
//    y "studentsList", y un método que permita asignar alumnos
//    al profesor. Esta asignación se almacenará en el array 
//    "studentList" mencionado anteriormente.
class Teacher extends Person{
  constructor(nombre, edad, genero, subject, studentsList){
    super(nombre);
    super(edad);
    super(genero);
    this.subject = subject;
    this.studentsList = studentsList;
  }
  static asignar(teacherId, studenId){

  }
}


//   - Crea la clase "Student". Esta clase debe heredar de "Person",
//    y debe incluÃ­r, a mayores, las propiedades: "course" 
//    y "group", y un método que permita registrar un nuevo estudiante.
class Student extends Person {
  constructor(nombre, edad, genero, course, group){
    super(nombre);
    super(edad);
    super(genero);
    this.course = course;
    this.group = group;
  }
static registrar(studentId){

}
}


//   - El objetivo final es mostrar por pantalla la lista de profesores
//    junto a todas sus propiedades, entre ellas, los alumnos que tiene
//    asignados.
//   - Deben figurar un mí­nimo de tres profesores. Cada profesor debe
//    tener asignado un mí­nimo de dos alumnos.
