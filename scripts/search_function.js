function searchPkmnName() {
    let searchWord = document.getElementById('searchBar').value;
    document.getElementById("loadMoreBtn").classList.add("d_none");
    if (searchWord == "" ) {
        renderShownPokemons();
    }
    else if(searchWord.length < 3 && searchWord.length > 0) {
        document.getElementById("mainContent").innerHTML = "";
        document.getElementById("mainContent").innerHTML = getEmptySearchTemplates();
    }
    else if (searchWord.length >= 3) {
        filterAndShowPokemons(searchWord);
    }
}

async function renderShownPokemons() {    //render all loaded Pokemons from previous site
    document.getElementById("mainContent").innerHTML = "";
    for (let shownPokemonsIndex = 0; shownPokemonsIndex < shownPokemons.length; shownPokemonsIndex++) {
        document.getElementById("mainContent").innerHTML += cardsClosedTemplate(shownPokemons, shownPokemonsIndex);   
    }
    await getPokemonId(shownPokemons);
    await getPokemonImg(shownPokemons);
    await getPokemonType(shownPokemons);
}

function filterAndShowPokemons(searchItem) {
        let filteredPokemons = shownPokemons.filter(pokemon => 
            pokemon.name.toLowerCase().includes(searchItem.toLowerCase())
        );
        renderSearchedPokemons(filteredPokemons);
}

async function renderSearchedPokemons(passedPokemons) {
    document.getElementById("mainContent").innerHTML = "";
    searchOutcomePokemons = [];
    for (let passedPkmnIndex = 0; passedPkmnIndex < passedPokemons.length; passedPkmnIndex++) {
        searchOutcomePokemons.push(passedPokemons[passedPkmnIndex]);        
    }
    for (let searchOutcomePokemonsIndex = 0; searchOutcomePokemonsIndex < searchOutcomePokemons.length; searchOutcomePokemonsIndex++) {
        document.getElementById("mainContent").innerHTML += searchResultCardsClosedTemplate(searchOutcomePokemons, searchOutcomePokemonsIndex);     
    }
    await getPokemonId(searchOutcomePokemons);
    await getPokemonImg(searchOutcomePokemons);
    await getPokemonType(searchOutcomePokemons);
}

//ze musim prohledat vsechny z tech 1302
//ze se na ne da kliknout, kdyz budou vyhledany
//ze se vrati vse do puvodniho stavu, kdyz search vymazu - bude se moct kliknout na kartu a vrati se button
//bude se moct kliknout na kartu, kdyz kliknu na pokedex logo