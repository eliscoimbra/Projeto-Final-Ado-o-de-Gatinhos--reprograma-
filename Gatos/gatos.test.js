const Gato = require("./gatos")

test("Teste função cadastrar", ()=>{
    let gato = new Gato("Tom", "13", "macho", "siames")
    expect(gato.verificarSeEhAdulto(gato)).toBe("O gato é adulto")
})


// test("Teste função é Adulto", ()=>{
//     let gato1 = new Gato("Tom", "09/01/2022", "macho", "siames")
//     let projetoLarTemp1 = new ProjetoLarTemporario()
//     expect(projetoLarTemp1.cadastrar(gato1)).toBe('O gato foi cadastrado')
// })

