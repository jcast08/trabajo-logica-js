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

    if (numeroUsuario3 <= 10) {
        document.querySelector("#premio").innerHTML = "reclame un jugo"
    }
    else if (numeroUsuario3 >= 18) {
        document.querySelector("#premio").innerHTML = "reclame una cerveza"
    } else {
        document.querySelector("#premio").innerHTML = "Lo sentimos desafortunadamente, no recibe ningún premio."

    }

    if (generohm == "mujer") {
        document.querySelector("#premio_2").innerHTML = "reclame pizza hawaiana"
    } else if (generohm == "hombre") {
        document.querySelector("#premio_2").innerHTML = "reclame pizza 3 carnes"
    } else {
        document.querySelector("#premio").innerHTML = "Lo sentimos desafortunadamente, no recibe ningún premio."
    }
})

let formulario4 = document.querySelector("#CuartoPunto")
formulario4.addEventListener('submit', function (evento) {
    evento.preventDefault()

    let Multiplicando1 = evento.target.MultiplicandoIn.value
    let Multiplicador2 = evento.target.MultiplicadorIn.value

    for (x = 1; x <= Multiplicador2; x++) {

        resulpado4 = Multiplicando1 * x

        document.querySelector("#resultadoCua").innerHTML += `${Multiplicando1} x ${Multiplicador2} = ${resulpado4} <br>`
    }

})



//Punto numero 5

let formulario5 = document.querySelector("#QuintoPunto")
formulario5.addEventListener('submit', function (evento) {
    evento.preventDefault()

})

let Carta = [{
    id: 1,
    nombre: "Hamburguesa",
    precio: 15000,
    cantidad: 1
},
{
    id: 2,
    nombre: "Perro Caliente",
    precio: 13000,
    cantidad: 1
},
{
    id: 3,
    nombre: "Empanada",
    precio: 3000,
    cantidad: 1
},
{
    id: 4,
    nombre: "Papa Rellena",
    precio: 150000,
    imagen: "https://via.placeholder.com/100x100",
    cantidad: 1
},

{
    id: 4,
    nombre: "Arepa de Queso",
    precio: 2000,
    cantidad: 1
},

{
    id: 5,
    nombre: "Colombiana",
    precio: 3000,
    cantidad: 1
},
{
    id: 6,
    nombre: "Uva",
    precio: 3000,
    cantidad: 1
},
{
    id: 6,
    nombre: "Cocacola",
    precio: 3500,
    cantidad: 1
},
{
    id: 8,
    nombre: "Limonada",
    precio: 4000,
    imagen: "https://via.placeholder.com/100x100",
    cantidad: 1
},

{
    id: 9,
    nombre: "Agua",
    precio: 2000,
    cantidad: 1
}]

let menuProd = document.querySelector("#MenuCompleto")
listarProductos()

function listarProductos() {
    menuProd.innerHTML = ""
    Carta.forEach(mostrarmenu => {
        menuProd.innerHTML += `
        <div class="d-flex justify-content-center align-items-start flex-column ms-4">
            <h5>${mostrarmenu.nombre}</h5>
            <h6 id="precioTotalProducto${mostrarmenu.id}">$ ${mostrarmenu.precio}</h6>
        </div>
        `

    })

}