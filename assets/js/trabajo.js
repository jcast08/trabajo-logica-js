let formulario = document.querySelector("#primerPunto")
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault()
    let numeroUsuario = evento.target.inputnumero.value
    let total = 0

    for (x = 1; x <= numeroUsuario; x++) {
        total = total + x
    }

    document.querySelector("#resultado").innerHTML = total

})


let formulario2 = document.querySelector("#segundoPunto")
formulario2.addEventListener('submit', function (evento) {
    evento.preventDefault()
    let numeroUsusario2 = evento.target.inputDos.value
    if (numeroUsusario2 % 2 == 0) {
        document.querySelector("#resultadoDos").innerHTML = "Es par"
    }
    else {
        document.querySelector("#resultadoDos").innerHTML = "Es impar"
    }

})


let formulario3 = document.querySelector("#tercerPunto")
formulario3.addEventListener('submit', function (evento) {
    evento.preventDefault()

    let numeroUsuario3 = evento.target.inputTres.value
    let generohm = evento.target.generos.value

    if (numeroUsuario3 <= 10) { document.querySelector("#premio").innerHTML = "reclame un jugo" }
    else if (numeroUsuario3 >= 18) { document.querySelector("#premio").innerHTML = "reclame una cerveza" }

    if(generohm == "mujer"){document.querySelector("#premio_2").innerHTML = "reclame pizza hawaiana"}

})