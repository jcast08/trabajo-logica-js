
let divpersonales = document.querySelector("#grilla-personajes")
let url_pokeapi = 'https://pokeapi.co/api/v2/pokemon'
let dataAPI_pokeapi = fetch(url_pokeapi)
let botoSiguiente = document.querySelector("#Siguiente")
let botonAnterior = document.querySelector("#Anterior")
dataAPI_pokeapi.then(respuestaPromesa => respuestaPromesa.json())
    .then(infojson => {
        infojson.results.forEach(element => {
            let urlPokemon = element.url
            let consumoPokemon = fetch(urlPokemon)
            consumoPokemon.then(respuestaPromesa => respuestaPromesa.json())
                .then(infoPokemon => {
                    divpersonales.innerHTML += `
                        <div class="col">
                            <div class="card">
                                <img src="${infoPokemon.sprites.front_default}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${infoPokemon.name}</h5>
                                    </div>
                            </div>
                        </div>
                        `
                })
                infojson.next.forEach (element => {
                    let SiguientePag = element.next
                    let siguiente = fetch(SiguientePag)
                    siguiente.then(respuestaPromesa => respuestaPromesa.json())
                    then.(siguienteLink =>{
                        if (siguienteLink.next) {
                            botoSiguiente.disabled = false;
                          } else {
                            nextButton.disabled = true;
                          }
                    })
                })
        });
    }).catch(error => {
        console.log(error)
    })