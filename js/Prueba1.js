let tablero = [
    ["_1", "_2", "_3"],
    ["_4", "_5", "_6"],
    ["_7", "_8", "_9"],
]

for (let indice = 0; indice < tablero.length; indice++) {
    console.log(tablero[indice])
    let lista = tablero[indice]
    for (let indiceTablero = 0; indiceTablero < lista.length; indiceTablero++) {
        console.log(lista[indiceTablero])
    }
}
