let opciones = ["+",20,15]
let resultado 
function imprimirOperacion(opciones,resultado) {
    console.log(`Ha elegido usted una ${opciones[0]}`)
    console.log(`${opciones[1]}${opciones[0]}${opciones[2]}=${resultado}`)
}
if (opciones[0] == "+"){
    resultado = opciones[1] + opciones[2]
    
    imprimirOperacion(opciones,resultado)
}

else if (opciones[0] == "-"){
    resultado = opciones[1] - opciones[2]
   
    imprimirOperacion(opciones,resultado)
}

else if (opciones[0] == "*"){
    resultado = opciones[1] * opciones[2]
  
    imprimirOperacion(opciones,resultado)
}

else if (opciones[0] == "/"){
    resultado = opciones[1] / opciones[2]
 
    imprimirOperacion(opciones,resultado)
}

else {
    resultado = "NO hay"
}

console.log(resultado)

