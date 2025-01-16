
const ctx = document.getElementById('myChart'); //wenn ich die Funktion schreibe, soll sie leer initialisiert werden und ich schreibe sie erst in meine Funktion über
//sich globales Array zB.pokemonStats erstellen, wo wir das erstmal reinpushen und dann rausnehmen
//also im Chart.dataser.data steht dann [pokemonStats[0], pokemonStats[1], pokemonStats[3]];
async function addOVerlay(loadedPokemonName) {
    document.getElementById("backgrounOverlay").classList.remove("d_none");
    document.getElementById("theBody").classList.add("no_scroll");
    document.getElementById("backgrounOverlay").innerHTML = getOpenedCardTemplate(loadedPokemonName);
    event.stopPropagation();
    getPokemonIdOverlay(loadedPokemonName);
    getPokemonIdOverlay(chosenPkmnName);
}

async function getPokemonOverlay(chosenPkmnName) {
    let chosenPkmnIndex;
    chosenPkmnIndex = shownPokemons.findIndex(pokemon => pokemon.name.includes(chosenPkmnName));
    console.log(chosenPkmnIndex);
    let chosenPkmn = shownPokemons[chosenPkmnIndex];
    let chosenPkmnInfoSrc = `${chosenPkmn.url}`;
    let response = await fetch(chosenPkmnInfoSrc);
    let chosenPkmnInfo = await response.json();
    document.getElementById("chosenPkmnId").innerHTML = `#${chosenPkmnInfo.id}`;
}

function closeOverlay() {
    document.getElementById("backgrounOverlay").classList.add("d_none");
    document.getElementById("theBody").classList.remove("no_scroll");
    event.stopPropagation();
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