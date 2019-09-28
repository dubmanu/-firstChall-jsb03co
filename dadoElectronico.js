'use strict';


// * * * * * * * * * * * * * * * * * * * * *
// *  3. D A D O   E L E C T R Ã“ N I C O   *
// * * * * * * * * * * * * * * * * * * * * *

// Simula el uso de un dado electrónico cuyos valores al azar irán
//  del 1 al 6. 
//     - Crea una variable "gameOver" que pondrá fin a la ejecución 
//     del programa. 
//     - En esta variable se irán sumando los distintos valores que
//      nos devuelva el dado, y una vez alcanzados los 50 puntos el 
//       programa se detendrá. 
//     - Debes mostrar por pantalla los distintos valores que nos
//      devuelva el dado (números del 1 al 6) asÃ­ como el valor de la
//       variable "gameOver" tras cada tirada. 
//     - Finalmente muestra un mensaje que indique el fin del juego.

let gameOver = 0;
let oneToSix = 0;
do {
  oneToSix = Math.ceil( Math.random() * 6);
  gameOver = gameOver + oneToSix;
  console.log(`Tirada: ${oneToSix} van ${gameOver}`);
  
} while (gameOver < 50);
console.log("The end");