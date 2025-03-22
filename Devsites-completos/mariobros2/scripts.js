

const form = document.querySelector(".formulario-orcamento")
const mascara = document.querySelector(".mascara-formulario")


function botaoClicado() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"

}

function botaoNaoClicado() {
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"

}