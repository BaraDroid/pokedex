
function cardsClosedTemplate(myPkmns, z) {
    return `<div class="card_closed">
            <div class="pkm_header"><span id="nrOf${myPkmns[z].name}"></span><span>${myPkmns[z].name}</span></div>
            <div id="imgOf${myPkmns[z].name}" onclick="addOVerlay('${myPkmns[z].name}')"></div>
            <div id="typeOf${myPkmns[z].name}" class="pkm_types"></div>
        </div>`;    
}

function getEmptySearchTemplates() {
    return `<div class="empty_search">Please enter at least three letters.</div>`;
}

function getOpenedCardTemplate(chosenPokemon) {
    return `<form action="" class="overlay_content" method="dialog">
            <div class="overlay_main_info">
                <div class="content_left">
                    <img  class="overlay_logo" src="./assets/logo/pokeball.png">
                    <div class="overlay_pkm_types">
                        <img src="./assets/imgs/fire_type.png">
                        <img src="./assets/imgs/flying_type.png">
                    </div>    
                </div>  
                <div class="content_right">
                    <div class="overlay_header">
                        <span class="pkmn_name" id="pkmnNameOverlay">${chosenPokemon}</span>
                        <span class="pkmn_id" id="chosenPkmnId">#6</span>
                    </div>
                    <img class="overlay_main_image" src="./assets/charizard_probe/charizard_probe.png">
                </div>                 
            </div>         
            <div class="overlay_menu">
                <div class="menu_tab main_tab_menu"  onclick="showMainTab()">
                    <h4>main</h4>
                    <div class="underline" id="u1"></div>
                    
                </div>
                <div class="menu_tab stats_tab_menu" onclick="showStatsTab()">
                    <h4>stats</h4>
                    <div class="underline" id="u2"></div>
                </div>
            </div>
            <div class="main_tab" id="mainTabOverlay">
                <table>
                    <tr><td>height:</td><td>2m</td></tr>
                    <tr><td>weight:</td><td>100kg</td></tr>
                    <tr><td>base exp:</td><td>263</td></tr>
                    <tr><td>abilities:</td><td>overgrow, chlorofyl</td></tr>
                </table>
                <div class="arrows">
                    <img src="./assets/vectors/arrow_left.png" alt="arrow vector">
                    <img src="./assets/vectors/arrow_right.png" alt="arrow vector">
                </div>
            </div>
            <div class="stats_tab d_none" id="statsTabOverlay">
                <canvas id="myChart"></canvas>
                <div class="arrows">
                    <img src="./assets/vectors/arrow_left.png" alt="arrow vector">
                    <img src="./assets/vectors/arrow_right.png" alt="arrow vector">
                </div>
            </div>
        </form>`
}