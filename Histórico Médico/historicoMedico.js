const Gato = require('./../Gatos/gatos')
class HistoricoMedico extends Gato{
    constructor(nome,idadeEmMeses, sexo){
        super(nome,idadeEmMeses, sexo)
        this.historicoDeConsultas= []
        this.vacinas =[]
        this.castrado = false;
    }
    consulta(dataDaConsulta, tipoDeConsulta, nomeDoVeterinario, procedimento, valor, pago){
        this.historicoDeConsultas.push({
            data:dataDaConsulta,
            tipo: tipoDeConsulta,
            nomeDoVeterinario: nomeDoVeterinario,
            procedimento: procedimento, 
            valor: valor,
            pago: pago
        }
        )
        return this.historicoDeConsultas
    
    }

    vacina(nomeDaVacina, data){
        this.vacinas.push({vacina: nomeDaVacina, data:data})
            return this.vacinas     
    }

    reforcoVacina(nomeDaVacina){
        switch(nomeDaVacina){
            case 'raiva':
                return `Este é o reforço da vacina de ${nomeDaVacina} do gatinho de nome ${this.nome}`
            case "V5":
                return `Este é o reforço da vacina de ${nomeDaVacina} do gatinho de nome ${this.nome}`
            case "V4":
                return `Este é o reforço da vacina de ${nomeDaVacina} do gatinho de nome ${this.nome}`
        }
    }

    castragem(){
        if(this.castrado == false){
            return this.castrado = true
    }}


}

// let gato = new HistoricoMedico("Tom", 13, 'macho')
// gato.vacina("V5", '10/12')
// console.log(gato.vacinas)
 module.exports = HistoricoMedico;