'use strict';

// * * * * * * * * * * * * * * * * * * 
// *  4. Ã R B O L   B I N A R I O   *
// * * * * * * * * * * * * * * * * * *

// Toma un array de nÃºmeros enteros que represente un Ã¡rbol binario. Este array tambiÃ©n podrÃ¡ contener nodos NULL, representados
// por el sÃ­mbolo "#". 

//     - El objetivo es devolver el preorden transversal del array introducido.

// Ejemplo: si el array inicial es ["5", "2", "6", "1", "9", "#", "8", "#", "#", "#", "#", "4", "#"]


//                                                         5

//                                             2                       6

//                                       1          9            #           8

//                                    #     #    #     #      #     #     4     #


// El array que debe devolver el programa debe ser: "5 2 1 9 6 8 4".

// COMENTARIO he modificado el array inicial para que sea como el arbol, añadí #

const arrayIni = ["5", "2", "6", "1", "9", "#", "8", "#", "#", "#", "#", "#", "#", "4", "#"];
let arrayEnd = [];
const longArra = arrayIni.length;
let i = 1;
let arrayBi =[];
let arrayTem = [];
arrayBi = arrayIni[0][0];
let num2 = 2;
while (i < longArra) {
  for (let j = 0; j < num2; j++) {
    if (num2/2 === j){
      arrayTem.push("#");
    }
    arrayTem.push(arrayIni[i]);
    i = i + 1;
  }
  arrayBi = [...arrayBi, arrayTem];
  arrayTem = [];
  num2 = num2 * 2;
}
for (let j = 0; j < arrayBi[arrayBi.length-1].length-1; j++) {
  for (let k = 0; k < arrayBi.length; k++) {
    let aa = arrayBi[k][j];
    if (aa === "1" ||aa === "2" ||aa === "3" ||aa === "4" ||aa === "5" ||aa === "6" ||aa === "7" ||aa === "8" ||aa === "9") {
      arrayEnd.push(+arrayBi[k][j]);
    }   
  }
}
console.log(arrayEnd);