
function cardsClosedTemplate(currentPkmns, i) {
    return `<div class="card_closed">
            <div class="pkm_header"><span>#${i + 1}</span><span>${currentPkmns.results[i].name}</span></div>
            <img src="" alt="pokemon image">
            <div class="pkm_types"></div>
        </div>`
}