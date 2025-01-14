
function cardsClosedTemplate(myPkmns, z) {
    return `<div class="card_closed">
            <div class="pkm_header"><span id="nrOf${myPkmns.results[z].name}"></span><span>${myPkmns.results[z].name}</span></div>
            <div id="imgOf${myPkmns.results[z].name}" onclick="addOVerlay(${event})"></div>
            <div id="typeOf${myPkmns.results[z].name}" class="pkm_types"></div>
        </div>`;    
}

// function getOpenedCardTemplate() {
//     return 
// }