'use strict';
// * * * * * * * * * * * * * * * *
// *  1. C A L C U L A D O R A   *
// * * * * * * * * * * * * * * * *

// Crea un programa que permita realizar sumas, restas, multiplicaciones
//  y divisiones. 

// - El programa debe recibir dos nÃºmeros (n1, n2).

// - Debe existir una variable que permita seleccionar el tipo de
//  operaciÃ³n (suma, resta, multiplicaciÃ³n o divisiÃ³n).

//  - Opcional: agrega una cuarta opciÃ³n que permita elevar n1
// a la potencia n2.


// ---------------------------------------------------------
// ---------------------------------------------------------


let n1 = +prompt("Introduzca número 1 ");
let n2 = +prompt("Introduzca número 2 ");
let typeOp = prompt("Tipo Operación: 1.Suma 2.Resta 3.Multiplica 4.Divide");
let typeOpText ="";


//function calculator (n1,n2,typeOp) {

  let result = 0;
  switch (typeOp) {
    case "1":
      result = n1 + n2;
      typeOpText = "sumar";
      break;
    case "2":
      result = n1 - n2;
      typeOpText = "restar";
      break;
    case "3":
      result = n1 * n2;
      typeOpText = "multiplicar";
      break;
    case "4":
      result = n1 / n2;
      typeOpText = "dividir";
      break;
    default:
      typeOpText = "Numero operación incorrecto";
      break;
  }
//  return result, typeOpText;

//}

let textResult = `Resultado de ${typeOpText} ${n1} y ${n2} = ${result} "Desea realizar la potencia s/n"`;

let askSN = prompt(textResult);
if (askSN === "s") {
  let poten=n1;
  for (let i=1; i < n2; i++){
    poten = poten * n1;
  }
  textResult = prompt(`Potencia de ${n1} elevado ${n2} = ${poten}`);
}