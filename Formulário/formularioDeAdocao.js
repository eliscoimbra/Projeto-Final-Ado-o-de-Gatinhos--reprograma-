const Gatos = require("./.gatos.js")

class FormularioAdocao{
    constructor(nomeDoAdotante, endereco, numeroParaContato) {
        this.nomeDoAdotante = nomeDoAdotante;
        this.endereco = endereco;
        this.numeroParaContato = numeroParaContato
    }
    criacaoInDoor(opcao){
        if(opcao= true){
            return "Você conhece e concorda com o termo criação InDoor"
        }else{
            return "Para a adoção ser realizada é necessário conhecer o termo e concordar com tal comportamento"
        }
    }

    verificacoesCasa(casaTelada,tipoDeMoradia){
        if(tipoDeMoradia = casa){   
            if(casaTelada = true){
                return `${this.name} você possui um dos requisitos básicos para a adoção`
            }else{
                return `${this.name} este requisito é mínimo para adoção `
        }
    }}
    verificacoesApartamento(apartamentoTelado, tipoDeMoradia){
        if(tipoDeMoradia= apartamento){
            if(apartamentoTelado = true){
                return `${this.name} você possui um dos requisitos básicos para a adoção`
            }else{
                return `${this.name} este requisito é mínimo para adoção `
        } 
        }
    }
    preferenciasDeAdocao(adulto, sexo){
        if(adulto = true){

        }
        
    }
}
