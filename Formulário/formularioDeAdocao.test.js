const FormularioAdocao = require("./formularioDeAdocao")
test("Teste função Indoor", ()=>{
    let adotante = new FormularioAdocao("Projeto Lar Temporário", 'Elis', 'Rua 1', 99022)
    expect(adotante.criacaoInDoor(true)).toEqual("Você conhece e concorda com a criação InDoor")
})

test("Teste adotante não conhece criação In Door", ()=>{
    let adotante = new FormularioAdocao("Projeto Lar Temporário", 'Elis', 'Rua 1', 99022)
    expect(adotante.criacaoInDoor(false)).toEqual("É necessário conhecer a criação In Door para a adoção")
})

test("Verificação Apartamento Telado", ()=>{
    let adotante = new FormularioAdocao("Projeto Lar Temporário",'Elis', 'Rua 1', 99022)
    expect(adotante.verificacoesApartamento(true, 'apartamento')).toEqual('Elis você possui um dos requisitos básicos para a adoção')
})

test("Verificação Apartamento Não Telado", ()=>{
    let adotante = new FormularioAdocao("Projeto Lar Temporário", 'Elis', 'Rua 1', 99022)
    expect(adotante.verificacoesApartamento(false, 'apartamento')).toEqual('Elis este requisito é mínimo para adoção')
})

test("Verificação Casa Telada", ()=>{
    let adotante = new FormularioAdocao("Projeto Lar Temporário", 'Elis', 'Rua 1', 99022)
    expect(adotante.verificacoesCasa(true, 'casa')).toEqual('Elis você possui um dos requisitos básicos para a adoção')
})

test("Verificação Casa Não Telado", ()=>{
    let adotante = new FormularioAdocao("Projeto Lar Temporário",'Elis', 'Rua 1', 99022)
    expect(adotante.verificacoesCasa(false, 'casa')).toEqual('Elis este requisito é mínimo para adoção')
})
test("Teste função de adotante com  preferência ", ()=>{
    let adotante = new FormularioAdocao("Projeto Lar Temporário",'Elis', 'Rua 1', 99022)
    expect(adotante.preferenciasDeAdocao(true, "sim", "macho", "preto"))
    .toEqual([
        {adulto: "sim",
         sexo: "macho", 
         pelagem:"preto"
        }])
})

test("Teste função de adotante sem  preferência", ()=>{
    let adotante = new FormularioAdocao("Projeto Lar Temporário",'Elis', 'Rua 1', 99022)
    expect(adotante.preferenciasDeAdocao(false, "sim", "macho", "preto")).toBe('Você não possui preferência para a adoção')
   
})


