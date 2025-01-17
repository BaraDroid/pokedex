let chosenPkmnIndex;    //ich brauche es global, dass ich davon 1 entnehmen oder zugeben kann, wenn ich nach rechts/links schiebe
const ctx = document.getElementById('myChart'); //wenn ich die Funktion schreibe, soll sie leer initialisiert werden und ich schreibe sie erst in meine Funktion über
//sich globales Array zB.pokemonStats erstellen, wo wir das erstmal reinpushen und dann rausnehmen
//also im Chart.dataser.data steht dann [pokemonStats[0], pokemonStats[1], pokemonStats[3]];
async function addOVerlay(loadedPokemonName) {
    document.getElementById("backgrounOverlay").classList.remove("d_none");
    document.getElementById("theBody").classList.add("no_scroll");
    document.getElementById("backgrounOverlay").innerHTML = getOpenedCardTemplate(loadedPokemonName);
    event.stopPropagation();
    await getPokemonOverlay(loadedPokemonName);
}

// async function getPokemonOverlay(chosenPkmnName) {
//     chosenPkmnIndex = shownPokemons.findIndex(pokemon => pokemon.name.includes(chosenPkmnName));
//     console.log(chosenPkmnIndex);
//     let chosenPkmn = shownPokemons[chosenPkmnIndex];
//     let chosenPkmnInfoSrc = `${chosenPkmn.url}`;
//     let response = await fetch(chosenPkmnInfoSrc);
//     let chosenPkmnInfo = await response.json();
//     document.getElementById("chosenPkmnId").innerHTML = `#${chosenPkmnInfo.id}`;
//     document.getElementById("chosenPkmnImg").src = `${chosenPkmnInfo.sprites.front_default}`;
//     document.getElementById("chosenPkmnHeight").innerHTML = `${chosenPkmnInfo.height}`;
//     document.getElementById("chosenPkmnWeight").innerHTML = `${chosenPkmnInfo.weight}`;
//     document.getElementById("chosenPkmnBaseExp").innerHTML = `${chosenPkmnInfo.base_experience}`;
//     getChosenPokemonAbilities(chosenPkmnInfo);
// }

async function getPokemonOverlay(chosenPkmnName) {
    chosenPkmnIndex = myPkmnDatabase.findIndex(pokemon => pokemon.name.includes(chosenPkmnName));
    console.log(chosenPkmnIndex);
    let chosenPkmn = myPkmnDatabase[chosenPkmnIndex];
    let chosenPkmnInfoSrc = `${chosenPkmn.url}`;
    let response = await fetch(chosenPkmnInfoSrc);
    let chosenPkmnInfo = await response.json();
    document.getElementById("chosenPkmnId").innerHTML = `#${chosenPkmnInfo.id}`;
    document.getElementById("chosenPkmnImg").src = `${chosenPkmnInfo.sprites.front_default}`;
    document.getElementById("chosenPkmnHeight").innerHTML = `${chosenPkmnInfo.height}`;
    document.getElementById("chosenPkmnWeight").innerHTML = `${chosenPkmnInfo.weight}`;
    document.getElementById("chosenPkmnBaseExp").innerHTML = `${chosenPkmnInfo.base_experience}`;
    getChosenPokemonAbilities(chosenPkmnInfo);
}

async function getChosenPokemonAbilities(thisPokemon) {
        if (thisPokemon.abilities.length == 0) {
            document.getElementById("chosenPkmnBaseAbilities").innerHTML = `no abilities`;
        }
        else if (thisPokemon.abilities.length == 1) {
            document.getElementById("chosenPkmnBaseAbilities").innerHTML = `${thisPokemon.abilities[0].ability.name}`;
        }
        else if (thisPokemon.abilities.length == 2) {
            document.getElementById("chosenPkmnBaseAbilities").innerHTML = `${thisPokemon.abilities[0].ability.name}, ${thisPokemon.abilities[1].ability.name}`;
        } 
        else if (thisPokemon.abilities.length == 3) {
            document.getElementById("chosenPkmnBaseAbilities").innerHTML = `${thisPokemon.abilities[0].ability.name}, ${thisPokemon.abilities[1].ability.name}, ${thisPokemon.abilities[2].ability.name}`;
        }
    
}

async function getNextPokemonRight() {      //click on the right arrow
    chosenPkmnIndex += 1;
    if (chosenPkmnIndex >= 0 && chosenPkmnIndex < shownPokemons.length) {
    let nextPkmnIndex = chosenPkmnIndex;
    let nextPkmn = shownPokemons[nextPkmnIndex];
    let nextPkmnInfoSrc = `${nextPkmn.url}`;
    let response = await fetch(nextPkmnInfoSrc);
    let nextPkmnInfo = await response.json();
    document.getElementById("pkmnNameOverlay").innerHTML = `#${nextPkmnInfo.name}`;
    document.getElementById("chosenPkmnId").innerHTML = `#${nextPkmnInfo.id}`;
    document.getElementById("chosenPkmnImg").src = `${nextPkmnInfo.sprites.front_default}`;
    document.getElementById("chosenPkmnHeight").innerHTML = `${nextPkmnInfo.height}`;
    document.getElementById("chosenPkmnWeight").innerHTML = `${nextPkmnInfo.weight}`;
    document.getElementById("chosenPkmnBaseExp").innerHTML = `${nextPkmnInfo.base_experience}`;
    getChosenPokemonAbilities(nextPkmnInfo);
    }
    else if (chosenPkmnIndex >= shownPokemons.length) {
        showFirstPokemon();
    }
}

async function getNextPokemonLeft() {       //click on the left arrow
    chosenPkmnIndex -= 1;
    if (chosenPkmnIndex < 0) {
        showLastPokemon();
    }
    else if (chosenPkmnIndex >= 0 && chosenPkmnIndex < shownPokemons.length) {
        let nextPkmnIndex = chosenPkmnIndex;
        let nextPkmn = shownPokemons[nextPkmnIndex];
        let nextPkmnInfoSrc = `${nextPkmn.url}`;
        let response = await fetch(nextPkmnInfoSrc);
        let nextPkmnInfo = await response.json();
        document.getElementById("pkmnNameOverlay").innerHTML = `#${nextPkmnInfo.name}`;
        document.getElementById("chosenPkmnId").innerHTML = `#${nextPkmnInfo.id}`;
        document.getElementById("chosenPkmnImg").src = `${nextPkmnInfo.sprites.front_default}`;
        document.getElementById("chosenPkmnHeight").innerHTML = `${nextPkmnInfo.height}`;
        document.getElementById("chosenPkmnWeight").innerHTML = `${nextPkmnInfo.weight}`;
        document.getElementById("chosenPkmnBaseExp").innerHTML = `${nextPkmnInfo.base_experience}`;
        getChosenPokemonAbilities(nextPkmnInfo);
    }
}

async function showLastPokemon() {
    let lastIndex = shownPokemons.length - 1;
    let lastName;
    lastName = shownPokemons[lastIndex].name;
    await addOVerlay(lastName);
}

async function showFirstPokemon() {
    let firstName;
    firstName = shownPokemons[0].name;
    await addOVerlay(firstName);
}

function showMainTab() {
    document.getElementById("mainTabOverlay").classList.remove("d_none");
    document.getElementById("statsTabOverlay").classList.add("d_none");
    document.getElementById("u1").classList.add("bg_red");
    document.getElementById("u2").classList.remove("bg_red");
}

function showStatsTab() {
    document.getElementById("mainTabOverlay").classList.add("d_none");
    document.getElementById("statsTabOverlay").classList.remove("d_none");
    document.getElementById("u2").classList.add("bg_red");
    document.getElementById("u1").classList.remove("bg_red");
}

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed'],
    datasets: [{
        label: "",
      data: [78, 84, 78, 109, 85, 100],
      borderWidth: 1
    }]
  },
  options: {
        indexAxis: 'y',
        scales: {
        y: {
        beginAtZero: true
      }
    }
  }
});

function closeOverlay() {
    document.getElementById("backgrounOverlay").classList.add("d_none");
    document.getElementById("theBody").classList.remove("no_scroll");
    event.stopPropagation();
}

function clickOnDialog() {
    event.stopPropagation();
}