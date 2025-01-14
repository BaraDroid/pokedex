let limit = 10;
let offset = 0;

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
}

async function renderFirstTenPkmns() {
    offset = 0;
    let firstResponse = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    let response = await fetch(firstResponse);
    let currentPkmns = await response.json();
    document.getElementById("mainContent").innerHTML = "";
    for (let i = 0; i < currentPkmns.results.length; i++) { 
        document.getElementById("mainContent").innerHTML += cardsClosedTemplate(currentPkmns, i);  
        await getPokemonId(currentPkmns, i); 
        await getPokemonImg(currentPkmns, i);
        await getPokemonType(currentPkmns,i);
    }  
    
}

async function renderNextTenPkmns() {
    offset += 10;
    let newResponse = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    let nextResponse = await fetch(newResponse);
    let newlyLoadedPkmns = await nextResponse.json();
    for (let k = 0; k < newlyLoadedPkmns.results.length; k++) { 
        document.getElementById("mainContent").innerHTML += cardsClosedTemplate(newlyLoadedPkmns, k);
        await getPokemonId(newlyLoadedPkmns, k);  
        await getPokemonImg(newlyLoadedPkmns, k);
        await getPokemonType(newlyLoadedPkmns, k);   
    }  
}

async function getPokemonId(group, index) {
    let onePkmnInfoSrc = `${group.results[index].url}`;
    let response = await fetch(onePkmnInfoSrc);
    let onePkmnInfo = await response.json();
    document.getElementById(`nrOf${group.results[index].name}`).innerHTML = `# ${onePkmnInfo.id}`;
}

async function getPokemonImg(group, index) {
    let onePkmnInfoSrc = `${group.results[index].url}`;
    let response = await fetch(onePkmnInfoSrc);
    let onePkmnInfo = await response.json();
    document.getElementById(`imgOf${group.results[index].name}`).innerHTML = `<img class="pkmn_img" src="${onePkmnInfo.sprites.front_default}" alt="picture of ${group.results[index].name}">`;
}

async function getPokemonType(group, index) {
    let onePkmnInfoSrc = `${group.results[index].url}`;
    let response = await fetch(onePkmnInfoSrc);
    let onePkmnInfo = await response.json();
    let pkmnType = onePkmnInfo.types[0].type.name;
    let typeImg = `<img src="${pokemonTypes[pkmnType]}">`; 
    let changingId = group.results[index].name;
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

function addOVerlay(event) {
    document.getElementById("backgrounOverlay").classList.remove("d_none");
    event.stopPropagation();
}

function closeOverlay(event) {
    document.getElementById("backgrounOverlay").classList.add("d_none");
    event.stopPropagation();
}