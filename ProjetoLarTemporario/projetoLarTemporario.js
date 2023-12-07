const Gato = require("./../Gatos/gatos")

class ProjetoLarTemporario{
    constructor(nomeDoProjeto){
        this.nomeDoProjeto = nomeDoProjeto
        this.listaGatos = []
        this.numeroDeGatos = 0
        this.saldo = 0 
    }
    cadastrar(gato){
        if(gato instanceof Gato){
            this.listaGatos.push(gato.nome)
            this.numeroDeGatos +=1
            return "O gato foi cadastrado"
        }else{
            return "Não é possível cadastrar o gato"
        }
     }

    deletarGatos(gato){
         if((!gato instanceof Gato)){
             return ("Gato não cadastrado")
         }
         else{
            this.numeroDeGatos -=1
             this.listaGatos = this.listaGatos.filter(itemAtual => itemAtual != gato.nome)
             return this.listaGatos
     }}

     receberDoacao(valor){
        this.saldo = this.saldo + valor
        return "Muito Obrigada pela doação"
     }
}

// const gato1 = new Gato("Tom", "09/01/2022", "macho", "siames")
// const gato2 = new Gato("Joey", "19/09/2019","macho", "rajado")
// const gato3 = new Gato("Tangerina", "09/01/203", "femea", "amarela")
// const projetoLarTemp1 = new ProjetoLarTemporario()
// projetoLarTemp1.cadastrar(gato1)
// projetoLarTemp1.cadastrar(gato2)
// projetoLarTemp1.cadastrar(gato3)
// console.log(projetoLarTemp1.listaGatos)
// projetoLarTemp1.deletarGatos(gato3)
// console.log(projetoLarTemp1.listaGatos)
// console.log(gato1.verificarSeEhAdulto(gato1))

module.exports = ProjetoLarTemporario;