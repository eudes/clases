

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const util = require('util');
const question = util.promisify(readline.question).bind(readline);

async function principal (){
   
    let name = await question('¿Como te llamas?\n')
    console.log(`Hola ${name}!`)
    //console.log("finalizado")
}
principal()

