var lista = [100,200,300]
//var indice = lista.length

//while (indice > 0){
//   console.log(lista[indice])
 //   indice -= 1
//}
// cojer elemento de una lista
// lista[3]
//obtener el indice del ultimo elemento de una lista
// lista.length - 1
//si nuentra lista tiene 3 elementos el ultimo indice es 2
// lista[2] así cojeriamos el ultimo elemento
let r = lista[lista.length - 1]
for (let i = lista.length ; i > 1; i--){
    r -= (lista[i-2])
   console.log(r)
}
console.log(r)
// 300
 // -200
// -100