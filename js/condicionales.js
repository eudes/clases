// process.argv[2] coge la segunda palabra que se le pasa a node por consola
// ej: node condicionales.js pepito -> process.argv[2] = 'pepito'
const bebidaFavorita = process.argv[2]
console.log(bebidaFavorita)

// podemos servir 'gintonic', 'ron-cola', o 'vodka seco'
if (bebidaFavorita == 'ginebra') {
    console.log('gintonic')
}
else if (bebidaFavorita == 'ron') {
    console.log('roncola')
}
else if (bebidaFavorita == 'vodka') {
    console.log('vodka-seco')
}
else {
    console.log('no tenemos de eso')
}