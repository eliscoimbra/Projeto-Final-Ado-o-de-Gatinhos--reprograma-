class Gato{
    #reservado;
    constructor(nome,idadeEmMeses, sexo,  cor){
        this.nome = nome;
        this.idadeEmMeses = idadeEmMeses
        this.cor = cor;
        this.sexo = sexo
        this.#reservado = false; 
    }
    getReservado(){
        return this.#reservado
    }
    setReservado(atualizacaoReservado){
        return this.#reservado = atualizacaoReservado
    }
} 
module.exports = Gato
// const gato1 = new Gato("Tom", "09/01/2022", "macho", "siames")
// const gato2 = new Gato("Joey", "19/09/2019","macho", "rajado")
// console.log(gato1)
// console.log(gato2)



