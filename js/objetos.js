let fruta = {
    color: "verde",
    textura: "suave",
    peso: 100,
    envenenada: false,
    soyComestible: function soyComestible(){
        if(this.envenenada === true){
            return true
        }
        else if (this.envenenada === false) {
            return false
        }
        else {
            return undefined
        }
       
    }
}
console.log(fruta.soyComestible())
console.log(fruta.color)
