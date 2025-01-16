

async function getAll1302Pokemons() {   //this would be executed in init function
    let mySource = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302`;
    let databaseResponse = await fetch(mySource);
    let oneSearchedPokemon = await databaseResponse.json();
    for (let oneSearchedPokemonIndex = 0; oneSearchedPokemonIndex < oneSearchedPokemon.results.length; oneSearchedPokemonIndex++) {
        let element = oneSearchedPokemon.results[oneSearchedPokemonIndex];
        myPkmnDatabase.push(element);
    }
}

function enterSearchTerm() {     //executed onkeyup in the search field
    let searchWord = document.getElementById('searchBar').value;
    document.getElementById("loadMoreBtn").classList.add("d_none");
    if (searchWord == "" ) {
        document.getElementById("mainContent").innerHTML = "";
        renderShownPokemons();          //render all loaded Pokemons from previous site, if you delete your search item
        document.getElementById("loadMoreBtn").classList.remove("d_none");
    }
    else if(searchWord.length < 3 && searchWord.length > 0) {
        document.getElementById("mainContent").innerHTML = "";
        document.getElementById("mainContent").innerHTML = getEmptySearchTemplates();
    }
    else if (searchWord.length >= 3) {
        filterAndShowPokemons(searchWord);
    }
}

function filterAndShowPokemons(searchItem) {    //function for real search
    let filteredPokemons = myPkmnDatabase.filter(pokemon => 
        pokemon.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    renderFoundedPokemons(filteredPokemons);
}

async function renderFoundedPokemons(passedPokemons) {     //render pokemons, which could be found based on your search item
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


//ze se na ne da kliknout, kdyz budou vyhledany
//ze se vrati vse do puvodniho stavu, kdyz search vymazu - bude se moct kliknout na kartu a vrati se button
//bude se moct kliknout na kartu, kdyz kliknu na pokedex logo