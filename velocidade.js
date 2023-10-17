const form = document.querySelector("form")
const resp = document.querySelector("h3")

//ouvinte

form = addEventListener("submit", (e) =>{
    e.preventDefault()

    const permitida = Number(form.inPermitida.value)
    const condutor = Number(form.inCondutor.value)
    let leve = permitida + (permitida * 0.2)

    if(condutor <= permitida){
        resp.innerText = `Situação: Sem multa`

    } else if(condutor <= leve){
        resp.innerText = `Situação: Multa leve`

    } else {
        resp.innerText = `Situação: Multa grave`
    }
})