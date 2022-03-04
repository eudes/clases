
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

const util = require('util');
const question = util.promisify(readline.question).bind(readline);

// 1º paso : mostras la cuadricula vacia
// 2º paso : pedir al jugador 1, que nos ponga en que posicion quiere poner su ficha
// 3º paso : mostrar la cuadricula con la ficha donde nos ha dicho el jugador 1


async function principal (){
    let jugador = await question("Jugador:")
    console.log(`Jugador:${jugador}`)

    console.log("|_|_|_|")
    console.log("|_|_|_|")
    console.log("|_|_|_|")

    console.log("¿Dónde quieres poner tu ficha?")
    let fila = await question(`Fila:`)
    let columna = await question("Columna:")
    console.log(`Has elegido la posicion: ${fila},${columna}`)

}
principal()