const HistoricoMedico = require("./historicoMedico")

test("Teste Para a Função Castragem", ()=>{
    let gato = new HistoricoMedico("Tom", 13, 'macho')
    expect(gato.consulta("08/12/2023", "rotina", "Luana", "coleta de sangue", 50, "sim"))
    .toEqual([{
        data:'08/12/2023',
        tipo: 'rotina',
        nomeDoVeterinario: 'Luana',
        procedimento: 'coleta de sangue', 
        valor: 50,
        pago: 'sim'
    }])
 })

test("Teste Reforço Vacina de Raiva", ()=>{
   let gato = new HistoricoMedico("Tom", 13, 'macho')
   expect(gato.reforcoVacina("raiva")).toBe('Este é o reforço da vacina de raiva do gatinho de nome Tom')
})


test("Teste para a função vacina", ()=>{
    let gato = new HistoricoMedico("Tom", 13, 'macho')
    expect(gato.vacina("V5", "08/12/2023")).toEqual([{vacina:'V5', data: "08/12/2023"}])
 })


test("Teste Reforço Vacina de V5", ()=>{
    let gato = new HistoricoMedico("Tom", 13, 'macho')
    expect(gato.reforcoVacina("V5")).toBe('Este é o reforço da vacina de V5 do gatinho de nome Tom')
 })

 test("Teste Reforço Vacina de Raiva de V4", ()=>{
    let gato = new HistoricoMedico("Tom", 13, 'macho')
    expect(gato.reforcoVacina("V4")).toBe('Este é o reforço da vacina de V4 do gatinho de nome Tom')
 })

 test("Teste Para a Função Castragem", ()=>{
    let gato = new HistoricoMedico("Tom", 13, 'macho')
    expect(gato.castragem()).toBe(true)
 })
 



 
