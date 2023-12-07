const Gato = require("./../Gatos/gatos")
const Veterinario = require("./historicoMedico")



 test("Testando função consulta de emergência", ()=>{
    const veterinario1 = new Veterinario("Matheus", "Miau")
    let gato1 = new Gato("Tom", "6", "macho", "siames")
    
    expect(consultaEmergencia(gato1, '10/09/2022',"internação", 90, 'sim')).toBe(
        {
            gato: undefined,
            data: '10/09/2022',
            procedimento: 'internação',
            valor: 90,
            pagamento: 'sim'
          }
    )
 })