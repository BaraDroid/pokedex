
function cardsClosedTemplate(myPkmns, z) {
    console.log("hello" + myPkmns.results[z].name);
    return `<div class="card_closed" onclick="addOVerlay(event)">
            <div class="pkm_header"><span id="nrOf${myPkmns.results[z].name}"></span><span>${myPkmns.results[z].name}</span></div>
            <div id="imgOf${myPkmns.results[z].name}"></div>
            <div class="pkm_types"></div>
        </div>`;    
}