
function cardsClosedTemplate(myPkmns, j) {

    console.log(`huuu huuuu ${myPkmns.results[j].name}`);

    return `<div class="card_closed">
            <div class="pkm_header"><span>#${j + 1}</span><span>${myPkmns.results[j].name}</span></div>
            <img src="" alt="pokemon image">
            <div class="pkm_types"></div>
        </div>`;
        
}