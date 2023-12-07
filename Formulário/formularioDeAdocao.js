const Gato = require("./../Gatos/gatos");
const ProjetoLarTemporario = require("./../ProjetoLarTemporario/projetoLarTemporario")


class FormularioAdocao extends ProjetoLarTemporario{
    constructor(nomeDoProjeto, adotanteNome, endereco, numeroParaContato) {
        super(nomeDoProjeto)
        this.adotanteNome = adotanteNome;
        this.endereco = endereco;
        this.numeroParaContato = numeroParaContato
    }

    criacaoInDoor(opcao){
        if(opcao == true){
            return "Você conhece e concorda com a criação InDoor"
        }else{
            return "É necessário conhecer a criação In Door para a adoção"
        }
     
    }
        

    verificacoesCasa(casaTelada,tipoDeMoradia){
        if(tipoDeMoradia == 'casa'){   
            if(casaTelada == true){
                return `${this.adotanteNome} você possui um dos requisitos básicos para a adoção`
            }else{
                return `${this.adotanteNome} este requisito é mínimo para adoção`
            }
        }
    }

    verificacoesApartamento(apartamentoTelado, tipoDeMoradia){
        if(tipoDeMoradia =='apartamento'){
            if(apartamentoTelado == true){
                return `${this.adotanteNome} você possui um dos requisitos básicos para a adoção`
            }else{
                return `${this.adotanteNome} este requisito é mínimo para adoção`
            } 
        }
    }
    preferenciasDeAdocao(adulto){
        if(adulto == true){
            return` Os gatos adultos disponíveis são: ${this.gatosAdultos}`

        }
        
    }
}
// let adotante = new FormularioAdocao("Projeto Lar Temporário", 'Elis', 'Rua 1', 99022)
// let gato = new Gato("Tom", 13, "macho", "siames")
//  gato.verificarSeEhAdulto(gato)
// console.log(adotante.preferenciasDeAdocao(true))



module.exports = FormularioAdocao