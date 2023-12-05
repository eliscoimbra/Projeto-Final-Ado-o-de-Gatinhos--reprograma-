const ProjetoLarTemporario = require("./projetoLarTemporario")
const Gato = require("./../Gatos/gatos")


test("Teste função cadastrar onde objeto Gato e do tipo Gato", ()=>{
    let projetoLarTemp1 = new ProjetoLarTemporario("Lar Temporário São Carlos")
    let gato = new Gato("Tom", "13", "macho", "siames")
    expect(projetoLarTemp1.cadastrar(gato)).toBe("O gato foi cadastrado")
})

test("Teste função cadastrar onde objeto Gato não é do tipo Gato", ()=>{
    let projetoLarTemp1 = new ProjetoLarTemporario("Lar Temporário São Carlos")
    let gato = ("Tom", "13", "macho")
    expect(projetoLarTemp1.cadastrar(gato)).toBe("Não é possível cadastrar o gato")
})

test("Teste função deletar", ()=>{
    let projetoLarTemp1 = new ProjetoLarTemporario("Lar Temporário São Carlos")
    let gato1 = new Gato("Tom", "13", "macho", "siames")
    let gato2 = new Gato("Joey", "19/09/2019","macho", "rajado")
    projetoLarTemp1.cadastrar(gato1)
    projetoLarTemp1.cadastrar(gato2)
    expect(projetoLarTemp1.deletarGatos(gato2)).toEqual(["Tom"])

})