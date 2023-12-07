const Gatos = require("./../Gatos/gatos")

class FormularioAdocao{
    constructor(nomeDoAdotante, endereco, numeroParaContato) {
        this.nomeDoAdotante = nomeDoAdotante;
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
                return `${this.nomeDoAdotante} você possui um dos requisitos básicos para a adoção`
            }else{
                return `${this.nomeDoAdotante} este requisito é mínimo para adoção`
            }
        }
    }

    verificacoesApartamento(apartamentoTelado, tipoDeMoradia){
        if(tipoDeMoradia =='apartamento'){
            if(apartamentoTelado == true){
                return `${this.nomeDoAdotante} você possui um dos requisitos básicos para a adoção`
            }else{
                return `${this.nomeDoAdotante} este requisito é mínimo para adoção`
            } 
        }
    }
    preferenciasDeAdocao(adulto, sexo){
        if(adulto = true){

        }
        
    }
}

module.exports = FormularioAdocao