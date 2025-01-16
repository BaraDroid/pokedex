let limit = 10;
let offset = 0;

let myPkmnDatabase = [];    //all 1302 Pokemon´s names and urls loaded, for search purpose only

let shownPokemons = []; //all loaded Pokemons on the main site

let searchOutcomePokemons = []; //Pokemons which meet search requirements

let pokemonTypes = {
    "normal" : "../assets/imgs/normal_type.png",
    "fighting" : "../assets/imgs/fighting_type.png",
    "flying" : "../assets/imgs/flying_type.png",
    "poison" : "../assets/imgs/poison_type.png",
    "ground" : "../assets/imgs/ground_type.png",
    "rock" : "../assets/imgs/rock_type.png",
    "bug" : "../assets/imgs/bug_type.png",
    "ghost" : "../assets/imgs/ghost_type.png",
    "steel" : "../assets/imgs/steel_type.png",
    "fire" : "../assets/imgs/fire_type.png",
    "water" : "../assets/imgs/water_type.png",
    "grass" : "../assets/imgs/grass_type.png",
    "electric" : "../assets/imgs/electric_type.png",
    "psychic" : "../assets/imgs/psychic_type.png",
    "ice" : "../assets/imgs/ice_type.png",
    "dragon" : "../assets/imgs/dragon_type.png",
    "dark" : "../assets/imgs/dark_type.png",
    "fairy" : "../assets/imgs/fairy_type.png"
}

function init() {
    renderFirstTenPkmns();
    getAll1302Pokemons();
}

async function renderShownPokemons() {    
    document.getElementById('searchBar').value = "";
    document.getElementById("mainContent").innerHTML = "";
    document.getElementById("loadMoreBtn").classList.remove("d_none");
    for (let shownPokemonsIndex = 0; shownPokemonsIndex < shownPokemons.length; shownPokemonsIndex++) {
        document.getElementById("mainContent").innerHTML += cardsClosedTemplate(shownPokemons, shownPokemonsIndex);   
    }
    await getPokemonId(shownPokemons);
    await getPokemonImg(shownPokemons);
    await getPokemonType(shownPokemons);
}

async function renderFirstTenPkmns() {
    offset = 0;
    let firstResponse = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    let response = await fetch(firstResponse);
    let currentPkmns = await response.json();
    document.getElementById("mainContent").innerHTML = "";
    for (let i = 0; i < currentPkmns.results.length; i++) { 
        shownPokemons.push(currentPkmns.results[i]);
    }
    renderShownPokemons();
}

async function renderNextTenPkmns() {
    offset += 10;
    let newResponse = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    let nextResponse = await fetch(newResponse);
    let newlyLoadedPkmns = await nextResponse.json();
    for (let k = 0; k < newlyLoadedPkmns.results.length; k++) { 
        shownPokemons.push(newlyLoadedPkmns.results[k]);
        document.getElementById("mainContent").innerHTML += cardsClosedTemplate(shownPokemons, (k+offset));  
    }  
    await getPokemonId(shownPokemons);
    await getPokemonImg(shownPokemons);
    await getPokemonType(shownPokemons);
}

async function getPokemonId(pkmnGroup) {
    for (let index = 0; index < pkmnGroup.length; index++) {
        let onePkmnInfoSrc = `${pkmnGroup[index].url}`;
        let response = await fetch(onePkmnInfoSrc);
        let onePkmnInfo = await response.json();
        document.getElementById(`nrOf${pkmnGroup[index].name}`).innerHTML = `# ${onePkmnInfo.id}`;   
    }
}

async function getPokemonImg(pkmnGroup) {
    for (let index = 0; index < pkmnGroup.length; index++) {
        let onePkmnInfoSrc = `${pkmnGroup[index].url}`;
        let response = await fetch(onePkmnInfoSrc);
        let onePkmnInfo = await response.json();
        document.getElementById(`imgOf${pkmnGroup[index].name}`).innerHTML = `<img class="pkmn_img" src="${onePkmnInfo.sprites.front_default}" alt="picture of ${pkmnGroup[index].name}">`;
}
}

async function getPokemonType(pkmnGroup) {
    for (let index = 0; index < pkmnGroup.length; index++) {
        let onePkmnInfoSrc = `${pkmnGroup[index].url}`;
        let response = await fetch(onePkmnInfoSrc);
        let onePkmnInfo = await response.json();
    let pkmnType = onePkmnInfo.types[0].type.name;
    let typeImg = `<img src="${pokemonTypes[pkmnType]}">`; 
    let changingId = pkmnGroup[index].name;
    if (onePkmnInfo.types.length === 1) {
        document.getElementById(`typeOf${changingId}`).innerHTML = typeImg;
        document.getElementById(`imgOf${changingId}`).classList.add(`bg_${pkmnType}`);
    }
    else if (onePkmnInfo.types.length === 2) {
        let pkmnType2 = onePkmnInfo.types[1].type.name;
        let doubleImg = `<img src="${pokemonTypes[pkmnType]}"><img src="${pokemonTypes[pkmnType2]}">`;
        document.getElementById(`typeOf${changingId}`).innerHTML = doubleImg;
        document.getElementById(`imgOf${changingId}`).classList.add(`bg_${pkmnType}`);
    }
    else if (onePkmnInfo.types.length === 3) {
        let pkmnType2 = onePkmnInfo.types[1].type.name;
        let pkmnType3 = onePkmnInfo.types[2].type.name;
        let tripleImg = `<img src="${pokemonTypes[pkmnType]}"><img src="${pokemonTypes[pkmnType2]}"><img src="${pokemonTypes[pkmnType3]}">`;
        document.getElementById(`typeOf${changingId}`).innerHTML = tripleImg;
        document.getElementById(`imgOf${changingId}`).classList.add(`bg_${pkmnType}`);
    }
}
}
