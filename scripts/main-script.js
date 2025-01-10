let maxSum = 10;

function init() {
    getPkmns(maxSum);
}

async function getPkmns(limit) {
    let firstResponse = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`;
    let response = await fetch(firstResponse);
    let currentPkmns = await response.json();
    //hier muss es in den Array currentPkms kommen?
    console.log(currentPkmns);
    console.log(currentPkmns.results.length);
    
    for (let i = 0; i < currentPkmns.results.length; i++) {
        console.log(currentPkmns);
        
        //let onePkmnInfo = currentPkmns.results[i].url
        document.getElementById("mainContent").innerHTML += cardsClosedTemplate(currentPkmns, i);    
    }    
}

async function loadMorePkmns(limit) {
    maxSum += 10;
    getPkmns(limit);
}

//wie komme ich zu img
//let onePkmnInfo = currentPkmns.results[i].url
//onePkmnInfo.sprites.other.official-artwork.front_default