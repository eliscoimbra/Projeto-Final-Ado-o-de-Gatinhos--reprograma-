const HistoricoMedico = require("./historicoMedico")

test("Teste Reforço Vacina de Raiva", ()=>{
   let gato = new HistoricoMedico("Tom", "13", 'macho')
   expect(gato.reforcoVacina("raiva")).toBe('Este é o reforço da vacina de raiva do gatinho de nome Tom')
})

test("Teste Reforço Vacina de V5", ()=>{
    let gato = new HistoricoMedico("Tom", "13", 'macho')
    expect(gato.reforcoVacina("V5")).toBe('Este é o reforço da vacina de V5 do gatinho de nome Tom')
 })

 test("Teste Reforço Vacina de Raiva de V4", ()=>{
    let gato = new HistoricoMedico("Tom", "13", 'macho')
    expect(gato.reforcoVacina("V4")).toBe('Este é o reforço da vacina de V4 do gatinho de nome Tom')
 })

 test("Teste Para a Função Castragem", ()=>{
    let gato = new HistoricoMedico("Tom", "13", 'macho')
    expect(gato.castragem()).toBe(true)
 })
 



 
