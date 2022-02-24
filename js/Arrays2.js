var lista = [100,200,300,400,500 ]
var resultados = 0
var indice = 0 

//resultados += lista[0] 
//resultados += lista[1]
//resultados += lista[2]
//resultados += lista[3]
//resultados += lista[4]
//console.log(resultados)
 
while(indice < lista.length){        
    resultados += lista[indice]
    console.log("vuelta")
    indice += 1
}
console.log(resultados)