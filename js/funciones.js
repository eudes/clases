let opciones = ["+",20,15]
let resultado 
function imprimirOperacion(resultado,simbolo,operando1,operando2) {
    console.log(`Ha elegido usted una ${simbolo}`)
    console.log(`${operando1}${simbolo}${operando2}=${resultado}`)
}
if (opciones[0] == "+"){
    resultado = opciones[1] + opciones[2]
    
    imprimirOperacion(resultado,opciones[0],opciones[1],opciones[2])
}

else if (opciones[0] == "-"){
    resultado = opciones[1] - opciones[2]
   
    imprimirOperacion(resultado,opciones[0],opciones[1],opciones[2])
}

else if (opciones[0] == "*"){
    resultado = opciones[1] * opciones[2]
  
    imprimirOperacion(resultado,opciones[0],opciones[1],opciones[2])
}

else if (opciones[0] == "/"){
    resultado = opciones[1] / opciones[2]
 
    imprimirOperacion(resultado,opciones[0],opciones[1],opciones[2])
}

else {
    resultado = "NO hay"
}

console.log(resultado)

