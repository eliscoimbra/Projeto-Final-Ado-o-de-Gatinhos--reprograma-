const Gato = require("./gatos")

test("Teste função verificar se é adulto", ()=>{
    let gato = new Gato("Tom", "13", "macho", "siames")
    expect(gato.verificarSeEhAdulto()).toEqual("O gato é adulto")
})

test("Teste para verificar que o gato não é adulto", ()=>{

Gato("Tom", "6", "macho", "siames")
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




