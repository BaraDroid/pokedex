let limit = 10;
let offset = 0;

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
    console.log(offset);
    let newResponse = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    let nextResponse = await fetch(newResponse);
    let newlyLoadedPkmns = await nextResponse.json();
    for (let k = 0; k < newlyLoadedPkmns.results.length; k++) { 
        document.getElementById("mainContent").innerHTML += cardsClosedTemplate(newlyLoadedPkmns, k);
        await getPokemonId(newlyLoadedPkmns, k);  
        await getPokemonImg(newlyLoadedPkmns, k);   
    }  
}

async function getPokemonId(group, index) {
    let onePkmnInfoSrc = `${group.results[index].url}`;
    let response = await fetch(onePkmnInfoSrc);
    let onePkmnInfo = await response.json();
    console.log(onePkmnInfo.id);
    document.getElementById(`nrOf${group.results[index].name}`).innerHTML = `# ${onePkmnInfo.id}`;
    
}

async function getPokemonImg(group, index) {
    let onePkmnInfoSrc = `${group.results[index].url}`;
    let response = await fetch(onePkmnInfoSrc);
    let onePkmnInfo = await response.json();
    console.log(onePkmnInfo.sprites.front_default);
    document.getElementById(`imgOf${group.results[index].name}`).innerHTML = `<img class="pkmn_img" src="${onePkmnInfo.sprites.front_default}" alt="picture of ${group.results[index].name}">`;
}

async function getPokemonType(group, index) {
    let onePkmnInfoSrc = `${group.results[index].url}`;
    let response = await fetch(onePkmnInfoSrc);
    let onePkmnInfo = await response.json();
    console.log(onePkmnInfo.types);
    //erfahren, wie viele Typen er hat (if-else mit onePkmnInfo.types.length)
    //pak if grass - dej tam obrazek grass
    //if grass + water - dej dva obrazky
    if (onePkmnInfo.types.length === 1) {
        if (onePokemon.types[0].type.name == "normal") {
            document.getElementById(`imgOf${group.results[index].name}`).innerHTML = `<img class="pokemon_type" src="../assets/imgs/normal_type.png" alt="">`;
        }
        
            return onePkmnInfo.types[0].type.name == "normal" ? document.getElementById(`imgOf${group.results[index].name}`).innerHTML = `<img class="pokemon_type" src="../assets/imgs/normal_type.png" alt="">`:
            onePkmnInfo.types[0].type.name == "fighting" ? document.getElementById(`imgOf${group.results[index].name}`).innerHTML = `<img class="pokemon_type" src="../assets/imgs/fighting_type.png" alt="">`:
            onePkmnInfo.types[0].type.name == "flying" ? document.getElementById(`imgOf${group.results[index].name}`).innerHTML = `<img class="pokemon_type" src="../assets/imgs/flying_type.png" alt="">`:
    }
}


// function addOverlay(event) {
//     document.getElementById("backgrounOverlay").classList.remove("d_none");
//     event.stopPropagation();
// }