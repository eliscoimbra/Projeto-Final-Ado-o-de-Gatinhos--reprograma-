const Gato = require('./../Gatos/gatos')
class HistoricoMedico extends Gato{
    constructor(nome,idadeEmMeses, sexo){
        super(nome,idadeEmMeses, sexo)
        this.procedimentos =[]
        this.vacina =[]
        this.castrado = false;
    }
    consultaRotina(){
    
    }
    consultaEmergencia(gato, data, procedimento, valor, pagamento){
        if(gato instanceof Gato){
        this.procedimentos.push({gato:gato.name, data: data, procedimento:procedimento, valor: valor, pagamento:pagamento})
        return `O  foi a uma consulta de emergência com o ${this.nomeDoVeterinario} e possui o valor${pagamento}`
    }
    }

    vacina(nomeDaVacina, data){
        if(gato instanceof Gato){
            this.vacina.push(nomeDaVacina)
            return`O ${this.nome} recebeu a ${nomeDaVacina}`
        }else{
            return
        }
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

// const veterinario1 = new Veterinario("Matheus", "Miau")
// let gato1 = new Gato("Tom", "6", "macho", "siames")
// console.log(veterinario1.consultaEmergencia(gato1, '10/09/2022',"internação", 90, 'sim'))
// console.log(veterinario1.procedimentos)

module.exports = HistoricoMedico;