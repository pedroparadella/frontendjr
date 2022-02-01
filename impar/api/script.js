// Ligação API
let getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`



// Filtrar os 150 Pokemons
let generatePokemonPromises = () => Array(150).fill().map((_, index) =>
    fetch(getPokemonUrl(index + 1)).then(response => response.json()))

// Reduce dos 150 Pokemons buscando pelo nome, id e tipo
let generateHTML = pokemons => pokemons.reduce((accumulator, {
    name,
    id,
    types
}) => {
    const elemenTypes = types.map(typeInfo => typeInfo.type.name)

// Criando o CARD de exibição com as informações a serem exibidas.
    accumulator += `
    <li class ="card ${elemenTypes[0]}">

    <img class="card-image" alt="${name}" 
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"

    <h2 class= "card-title">${id}. ${name}</h2>
    
    <p class="card-subtitle">${elemenTypes.join(' | ')}</p>
    
    <button class="btn-excluir" id="btn-excluir" onclick="btn()">
    Excluir
    </button>
    
    <button class="btn-editar" id="btn-editar" onclick="btn()">
    Editar
    </button>
    
    </li>    
    `

    return accumulator
}, '')

// Criar e exibir a Li gerada para cada pokemon na Ul na página api.html.
let insertPokemonIntoPages = pokemons => {
    let ul = document.querySelector('[data-js="pokedex"]')
    ul.innerHTML = pokemons
}

let pokemonPromises = generatePokemonPromises()
Promise.all(pokemonPromises)
    .then(generateHTML)
    .then(insertPokemonIntoPages)

// Aviso btn

function btn() {
    window.alert("Desativado.");
}