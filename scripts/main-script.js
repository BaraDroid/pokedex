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
    document.getElementById(`imgOf${group.results[index].name}`).innerHTML = `<img src="${onePkmnInfo.sprites.front_default}" alt="picture of ${group.results[index].name}">`;
}

// function addOverlay(event) {
//     document.getElementById("backgrounOverlay").classList.remove("d_none");
//     event.stopPropagation();
// }