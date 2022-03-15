const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const util = require("util");
const question = util.promisify(readline.question).bind(readline);

// 1º paso : mostras la cuadricula vacia
// 2º paso : pedir al jugador 1, que nos ponga en que posicion quiere poner su ficha
// 3º paso : mostrar la cuadricula con la ficha donde nos ha dicho el jugador 1

function contarFichas(tablero){
  let cantidadDeFichas = 0
  for (let indice = 0; indice < tablero.length; indice++){
    let elementoExterior = tablero[indice]
    for(let indiceInt = 0; indiceInt < elementoExterior.length; indiceInt++){
      let elementoInterior = elementoExterior[indiceInt]
      if(elementoInterior === "X" || elementoInterior === "O"){
        cantidadDeFichas += 1

      }
    }
  }
  return cantidadDeFichas
  }
function contarPosiciones(tablero){
  let cuentaPosiciones = 0
  for (let indice = 0; indice < tablero.length; indice++){
    let arrayInterno = tablero[indice]
    cuentaPosiciones=cuentaPosiciones + arrayInterno.length
    
  }
  return cuentaPosiciones
} 
// todo conprobar que la posición no esta ocupada
async function turno(jugador, ficha, tablero) {
  let cuentaPosiciones = contarPosiciones(tablero)
  if (contarFichas(tablero) >= cuentaPosiciones) {
    
    console.log("No hay mas espacios");
    return
  }

  console.log(`Turno de ${jugador}`);
  console.log("¿Dónde quieres poner tu ficha?");
  filastr = await question(`Fila:`);
  columnastr = await question("Columna:");
  fila = +filastr;
  columna = +columnastr;
  console.log(`Has elegido la posicion: ${fila},${columna}`);

  // Repasar el OR (||)
  if(typeof fila !== 'number' || typeof columna !== 'number') {
    console.log("Error, tienes que meter un numero");
  }

  tablero[fila][columna] = ficha

  dibujarTablero(tablero)
  
  return tablero;
}
// como ejecutar un trozo de codigo por fila del tablero
function dibujarTablero (tablero){
  console.log(`|${tablero[0][0]}|${tablero[0][1]}|${tablero[0][2]}|`);
  console.log(`|${tablero[1][0]}|${tablero[1][1]}|${tablero[1][2]}|`);
  console.log(`|${tablero[2][0]}|${tablero[2][1]}|${tablero[2][2]}|`);
}

async function partida() {
  let tablero = [
    ["_", "_","_"],
    ["_", "_","_"],
    ["_", "_","_"],
  ]
  
  for(let indice = 0; indice < tablero.length; indice ++){
  console.log(tablero[indice])
  let elementoInterior = tablero[indice] 
  }
  for(let indiceTablero = 0; indiceTablero < tablero[indice]; indiceTablero ++ ){
    
  }
  dibujarTablero(tablero)
 

  let jugador1 = await question("Jugador 1:")
  let jugador2 = await question("Jugador 2:")

  tablero = await turno(jugador1, "X", tablero)
  tablero = await turno(jugador2, "O", tablero)
  tablero = await turno(jugador1, "X", tablero)
  tablero = await turno(jugador2, "O", tablero)
  tablero = await turno(jugador1, "X", tablero)
  tablero = await turno(jugador2, "O", tablero)
  tablero = await turno(jugador1, "X", tablero)
  tablero = await turno(jugador2, "O", tablero)
  tablero = await turno(jugador1, "X", tablero)

}

partida();
