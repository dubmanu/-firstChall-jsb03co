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
    super(nombre, edad, genero);
    this.subject = subject;
    this.studentsList = studentsList;
  }

  static createTeacher(nom, eda, gen, sub){
    return nom.map((name, index) => {
      return new Teacher(name, eda[index], gen[index], sub[index]);
    });
  }
  static asignar(teacherId, studenId){
    

  }
}


//   - Crea la clase "Student". Esta clase debe heredar de "Person",
//    y debe incluÃ­r, a mayores, las propiedades: "course" 
//    y "group", y un método que permita registrar un nuevo estudiante.
class Student extends Person {
  constructor(nombre, edad, genero, course, group){
    super(nombre, edad, genero);
    this.course = course;
    this.group = group;
  }
  static registrar(nom, eda, gen, cou, gro){
    return nom.map((name, index) => {
      return new Student(name, eda[index], gen[index], cou[index], gro[index]);
    });
  }


}



//   - El objetivo final es mostrar por pantalla la lista de profesores
//    junto a todas sus propiedades, entre ellas, los alumnos que tiene
//    asignados.
//   - Deben figurar un mí­nimo de tres profesores. Cada profesor debe
//    tener asignado un mí­nimo de dos alumnos.
const stuNames = ["Alba", "Berto", "Carmen", "Damian", "Diana", "Fernando"];
const stuAge = [32, 17, 19, 45, 18, 22];
const stuGen = ["f", "m", "f", "m", "f", "f", "m"];
const stuCourse = ["js", "Cob", "C", "Lin", "Win", "Dos"];
const stuGroup = ["01", "02", "03", "01", "02", "03"];
const profNames = ["Juana", "Manuel", "Rosa"];
const profAge = [32, 37, 19];
const profGen = ["f", "m", "f"];
const profSubject = ["Pas", "Del", "Uni"];

const allProf = Teacher.createTeacher(profNames, profAge, profGen, profSubject);
const allStud = Student.registrar(stuNames,stuAge,stuGen,stuCourse,stuCourse);
console.log(allProf);
console.log(allStud);
