const Gato = require("./gatos")


test("Teste para reservar gato", ()=>{
   let gato = new Gato("Tom", "13", "macho", "siames")
   expect(gato.setReservado(true)).toBe(true)
})

test("Teste para consultar se o  gatinho está reservado", ()=>{
    let gato = new Gato("Tom", "13", "macho", "siames")
    expect(gato.getReservado()).toBe(false)
 })




