
const Gato = require('./.historicoMedico')
class HistoricoMedico extends Gato{
    constructor(nome, nomeDoVeterinario, data){
        super(nome)
        this.nomeDoVeterinario = nomeDoVeterinario
        this.dataDaConsulta =  data
    }
    
    consultaRotina(){
        

    }

    consultaEmergencia(){

    }

    vacina(nomeDaVacina){


    }

    castragem(){

    }
}
