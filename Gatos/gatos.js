class Gato{
    #reservado;
    constructor(nome,idadeEmMeses, sexo,  cor){
        this.nome = nome;
        this.idadeEmMeses = idadeEmMeses
        this.cor = cor;
        this.sexo = sexo
        this.#reservado = false;
        this.castrado = false;
        this.historicoMedico = [];
        this.gatosAdultos =[]
    }

    get reservado(){
        return this.#reservado
    }

    set reservado(atualizacaoReservado){
        return this.#reservado = atualizacaoReservado
    }

    verificarSeEhAdulto(gato){
        if((gato instanceof Gato) || gato.idade >12){
            this.gatosAdultos.push(gato.nome)
            return`O gato é adulto`
        }else{
           return `O $ gato não é adulto`
        }
    }
 
} 
const gato1 = new Gato("Tom", "09/01/2022", "macho", "siames")
const gato2 = new Gato("Joey", "19/09/2019","macho", "rajado")
console.log(gato1)
console.log(gato2)
module.exports = Gato
