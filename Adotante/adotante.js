const Gatos = require("./.gatos.js")

class Adotante{
    constructor(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.casaTelada = false;
    
    }
    formularioAdocao(casaTelada){
        if(casaTelada = true){
            return `${this.name} você possui um dos requisitos básicos para a adoção`
        }else{
            return `${this.name} este requisito é mínimo para adoção `
        }
    }
    preferenciasDeAdocao(adulto){

    }

    


}