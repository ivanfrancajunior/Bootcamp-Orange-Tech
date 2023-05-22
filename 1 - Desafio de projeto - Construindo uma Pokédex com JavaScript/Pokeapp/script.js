const getPokemonUrl= id => `http://pokeapi.co/api/v2/pokemon/${id}`

const generatePokeminPromises = () => Array(150).fill().map((_,index)=> fetch(getPokemonUrl(index + 1)).then(response => response.json()))

const generateHTML = pokemons=> {
        
    return pokemons.reduce((accumulator,pokemon)=>{
        const types = pokemon.types.map(typeInfo => typeInfo.type.name)

        accumulator += `
        <li class='card ${types[0]}'>
        <img class='card-image  alt='${pokemon.name}' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png' 
           <h2 class='card-title'> ID:${pokemon.id} ${pokemon.name}<h2>
           <p class='card-subtitle ${types}'>${types.join(' | ')}</p>
        </li>`
        return accumulator
    }, '')
    
};

const insertPokemons = pokemons=>{
    const ul = document.querySelector('[data-js="pokedex"]')
    ul.innerHTML = pokemons
    
 }


const pokemonPromises = generatePokeminPromises()
    
Promise.all(pokemonPromises)
    .then(generateHTML)
    .then(insertPokemons)

