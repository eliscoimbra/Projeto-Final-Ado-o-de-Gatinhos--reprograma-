class Gato{
    #reservado;
    constructor(nome,dataDeNascimento, sexo,  cor){
        this.nome = nome;
        this.dataDeNascimento = dataDeNascimento;
        this.sexo =  sexo;
        this.cor = cor;
        this.#reservado = false;
        this.castrado = false;
       this.historicoMedico = [];
    }

    get reservado(){
        return this.#reservado
    }

    set reservado(atualizacaoReservado){
        return this.#reservado = atualizacaoReservado
    }
 
} 

class ProjetoLarTemporario extends Gato{
    constructor(nome){
        super(nome)
        this.listaGatos = []
        this.numeroDeGatos = 0
        
    }
    cadastrar(gato){
        if(gato instanceof Gato){
            this.listaGatos.push(gato.nome)
            this.numeroDeGatos +=1
        }else{
            console.log("Não é possível cadastrar o gato")
        }
     }

    deletarGatos(gato){
         if((!gato instanceof Gato)){
             return ("Gato não cadastrado")
         }
         else{
            this.numeroDeGatos -=1
             this.listaGatos = this.listaGatos.filter(itemAtual => itemAtual != gato.nome)
     }}
}
const gato1 = new Gato("Tom", "09/01/2022", "macho", "siames")
const gato2 = new Gato("Joey", "19/09/2019","macho", "rajado")
const gato3 = new Gato("Tangerina", "09/01/203", "femea", "amarela")
const projetoLarTemp1 = new ProjetoLarTemporario()
projetoLarTemp1.cadastrar(gato1)
projetoLarTemp1.cadastrar(gato2)
projetoLarTemp1.cadastrar(gato3)
console.log(projetoLarTemp1.listaGatos)
projetoLarTemp1.deletarGatos(gato3)
console.log(projetoLarTemp1.listaGatos)

