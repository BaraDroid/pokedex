
// function cardsClosedTemplate(myPkmns, z) {
//     return `<div class="card_closed">
//             <div class="pkm_header"><span id="nrOf${myPkmns.results[z].name}"></span><span>${myPkmns.results[z].name}</span></div>
//             <div id="imgOf${myPkmns.results[z].name}" onclick="addOVerlay(${event})"></div>
//             <div id="typeOf${myPkmns.results[z].name}" class="pkm_types"></div>
//         </div>`;    
// }


//pokus vzit to primo z shownPokemons - FUNGUJE TO, ALE JSEM ZASE NA ZACATKU:-D
function cardsClosedTemplate(myPkmns, z) {
    return `<div class="card_closed">
            <div class="pkm_header"><span id="nrOf${myPkmns[z].name}"></span><span>${myPkmns[z].name}</span></div>
            <div id="imgOf${myPkmns[z].name}" onclick="addOVerlay(${event})"></div>
            <div id="typeOf${myPkmns[z].name}" class="pkm_types"></div>
        </div>`;    
}


function searchResultCardsClosedTemplate(pokemons, thisIndex) {
    return `<div class="card_closed">
            <div class="pkm_header"><span id="nrOf${pokemons[thisIndex].name}"></span><span>${pokemons[thisIndex].name}</span></div>
            <div id="imgOf${pokemons[thisIndex].name}" onclick="addOVerlay(${event})"></div>
            <div id="typeOf${pokemons[thisIndex].name}" class="pkm_types"></div>
        </div>`; 
}


// function getOpenedCardTemplate() {
//     return 
// }