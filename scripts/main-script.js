function init() {
    getPkms();
}

async function getPkms() {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`);
    let currentPkmns = await response.json();
    //hier muss es in den Array currentPkms kommen
    for (let i = 0; i < currentPkmns.length; i++) {
        document.getElementById("mainContent").innerHTML += cardsClosedTemplate(currentPkmns, i);    
    }    
}

