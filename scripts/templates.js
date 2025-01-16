
function cardsClosedTemplate(myPkmns, z) {
    return `<div class="card_closed">
            <div class="pkm_header"><span id="nrOf${myPkmns[z].name}"></span><span>${myPkmns[z].name}</span></div>
            <div id="imgOf${myPkmns[z].name}" onclick="addOVerlay()"></div>
            <div id="typeOf${myPkmns[z].name}" class="pkm_types"></div>
        </div>`;    
}

function getEmptySearchTemplates() {
    return `<div class="empty_search">Please enter at least three letters.</div>`;
}

// function getOpenedCardTemplate() {
//     return 
// }