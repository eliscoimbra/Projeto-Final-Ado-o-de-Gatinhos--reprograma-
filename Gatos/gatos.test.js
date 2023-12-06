const Gato = require("./gatos")

test("Teste função verificar se é adulto", ()=>{
    let gato = new Gato("Tom", "13", "macho", "siames")
    expect(gato.verificarSeEhAdulto()).toEqual("O gato é adulto")
})

test("Teste para verificar que o gato não é adulto", ()=>{
    let gato1 = new Gato("Tom", "6", "macho", "siames")
    expect(gato1.verificarSeEhAdulto(gato1)).toBe("O gato não é adulto")
})

test("Teste para reservar gato", ()=>{
   let gato = new Gato("Tom", "13", "macho", "siames")
   expect(gato.setReservado(true)).toBe(true)
})

test("Teste para consultar se o  gatinho está reservado", ()=>{
    let gato = new Gato("Tom", "13", "macho", "siames")
    expect(gato.getReservado()).toBe(false)
 })



// test("Teste função é Adulto", ()=>{
//     let gato1 = new Gato("Tom", "09/01/2022", "macho", "siames")
//     let projetoLarTemp1 = new ProjetoLarTemporario()
//     expect(projetoLarTemp1.cadastrar(gato1)).toBe('O gato foi cadastrado')
// })

