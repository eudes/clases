const util = require('util');
const timeOut = util.promisify(setTimeout);

async function main (){
    console.log("futuro")
    await timeOut(3000)
    console.log("presente")
}
main()