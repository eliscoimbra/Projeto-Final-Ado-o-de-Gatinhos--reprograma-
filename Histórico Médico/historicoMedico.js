const Gato = require('./../Gatos/gatos')
class Veterinario{
    constructor(nomeDoVeterinario, nomeDaClinica){
        this.nomeDoVeterinario = nomeDoVeterinario
        this.nomeDaClinica = nomeDaClinica
        this.procedimentos =[]
    }

    consultaRotina(){
    
    }
    consultaEmergencia(gato, data, procedimento, valor, pagamento){
        if(gato instanceof Gato){
        this.procedimentos.push({gato:gato.name, data: data, procedimento:procedimento, valor: valor, pagamento:pagamento})
        return `O  foi a uma consulta de emergência com o ${this.nomeDoVeterinario} e possui o valor${pagamento}`
    }
    }

    vacina(nomeDaVacina, data, valor){


    }

    reforcoVacina(){

    }

    castragem(nomeDoGato, sexo, valor){

    }
}

// const veterinario1 = new Veterinario("Matheus", "Miau")
// let gato1 = new Gato("Tom", "6", "macho", "siames")
// console.log(veterinario1.consultaEmergencia(gato1, '10/09/2022',"internação", 90, 'sim'))
// console.log(veterinario1.procedimentos)

module.exports = Veterinario;