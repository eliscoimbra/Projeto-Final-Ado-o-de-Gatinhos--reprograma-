funcIdadeAproximada(dataDeNascimento){
    let dataDeHoje =  new Date();
    let anoAtual= dataDeHoje.getFullYear();
    const idade = dataDeHoje - dataDeNascimento
    return `O ${this.nome} tem aproximadamente ${idade}`
}

// function idade (timestamp){ 
//     const hoje = new Date() //estou pegando a data do dia 
//     const diaDoNiver = new Date(timestamp) // aqui se refere ao dia do aniversário

//     // a linha abaixo nos dá um retorno de idade, baseando-se apenas no ano, //subitraindo do ano atual o ano de nascimento ex: 2021-1990 = 31.  
//     let idade = today.getFullYear() - diaDoNiver.getFullYear() //é necessário usar //o let pq vai ser alterado
//     // na linha abaixo vamos verificar está no mês do aniversário
//     const mes = today.getMonth() - diaDoNiver.getMonth ()
    
//     //a linha abaixo valida o mês e a data exata do aniversário
    
//     if (mes < 0 || mes == 0 && hoje.getDate() < diaDoNiver.getDate()){
//         idade = idade -1 /// se não for o mês e a data exata diminue 1
//     }
//     return idade
// }

}
