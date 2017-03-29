alert("miau")
function Pokemon(nombre,color,puntosAtaque){
  this.nombre = nombre;
  this.color = color;
  this.nivelDeAmistad = 0;
  this.vida = 100;
  this.puntosAtaque = puntosAtaque;


  this.pelear = function(pokemonObjeto){
    pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque
  }
}


var pikachu = new Pokemon("Pikachu","amarillo",80);
var charmander  = new Pokemon("Charmander","rojo",30);

var pokemons = []

function crearPokemon(){
  var nombrePokemon = document.getElementById("nombrePokemon")
  var colorPokemon = document.getElementById("colorPokemon")
  var puntosPokemon = document.getElementById("puntosAtaque")

  var pokemon =new Pokemon(nombrePokemon.value,
                           colorPokemon.value,
                          parseInt(puntosPokemon.value))
  pokemons.push(pokemon)
  mostrarPokemons()
}

function mostrarPokemons(){
  var listaPokemons = document.getElementById("listaPokemons")
  var lista = document.createElement ("ul")
  listaPokemons.removeChild(listaPokemons.firstChild);
  pokemons.forEach(function(pokemon){
    var elemento = document.createElement("li")

    elemento.innerText = pokemon.nombre + pokemon.color + pokemon.puntosAtaque
    lista.appendChild(elemento)
  })
  listaPokemons.appendChild(lista)
}
function crearPokemonPelea(){
  var listaPokemons = document.getElementById("pokemon1")
  var lista = document.createElement ("select")
  listaPokemons.removeChild(listaPokemons.firstChild);
  pokemons.forEach(function(pokemon){
    var elemento = document.createElement("option")

    elemento.innerText = pokemon.nombre + pokemon.color + pokemon.puntosAtaque
    lista.appendChild(elemento)
  })
  listaPokemons.appendChild(lista)
}

function crearPokemonPelea2(){
  var listaPokemons = document.getElementById("pokemon2")
  var lista = document.createElement ("select")
  listaPokemons.removeChild(listaPokemons.firstChild);
  pokemons.forEach(function(pokemon){
    var elemento = document.createElement("option")

    elemento.innerText = pokemon.nombre + pokemon.color + pokemon.puntosAtaque
    lista.appendChild(elemento)
  })
  listaPokemons.appendChild(lista)
}
