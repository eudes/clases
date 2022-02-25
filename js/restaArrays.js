var lista = [100,200,300,400,500]
var resultados = lista[lista.length-1]
// let indice = 3
// resultados = resultados - lista[indice] 
// indice -= 1
// resultados = resultados - lista[indice]
// indice -= 1
// console.log(resultados)

for (let i = lista.length-2; i >= 0; i--){
    resultados = resultados - lista[i]
  
}
console.log(resultados)