
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

const util = require('util');
const question = util.promisify(readline.question).bind(readline);

// 1º paso : mostras la cuadricula vacia
// 2º paso : pedir al jugador 1, que nos ponga en que posicion quiere poner su ficha
// 3º paso : mostrar la cuadricula con la ficha donde nos ha dicho el jugador 1
async function turno (jugador, ficha){
   let cantidadFichas = 0
   if(cantidadFichas >= 4){
    console.log("No hay mas espacios")
    return 
  }
  console.log(`Turno de ${jugador}`)
  console.log("¿Dónde quieres poner tu ficha?")
  filastr = await question(`Fila:`)
  columnastr = await question("Columna:")
  fila = +filastr
  columna = +columnastr
  console.log(`Has elegido la posicion: ${fila},${columna}`)

  
  if (fila===0 && columna===0){
    console.log(`|${ficha}|_|`)
    console.log("|_|_|")
  }
  else if (fila===0 && columna===1){
    console.log(`|_|${ficha}|`)
    console.log("|_|_|")
  }
  else if (fila===1 && columna===0){
    console.log("|_|_|")
    console.log(`|${ficha}|_|`)
  }
  else if (fila===1 && columna===1){
    console.log("|_|_|")
    console.log(`|_|${ficha}|`)
  }
  else {
    console.log("Error, tienes que meter un numero")
  }
  cantidadFichas += 1
  // todo: comprobar si ha ganado
}


async function principal (){
    let jugador1 = await question("Jugador1:")
    let jugador2 = await question("Jugador2:")


    console.log("|_|_|")
    console.log("|_|_|")
    
await turno(jugador1, "X")
    

await turno(jugador2, "O")




}
principal()