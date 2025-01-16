const ctx = document.getElementById('myChart'); //wenn ich die Funktion schreibe, soll sie leer initialisiert werden und ich schreibe sie erst in meine Funktion über
//sich globales Array zB.pokemonStats erstellen, wo wir das erstmal reinpushen und dann rausnehmen
//also im Chart.dataser.data steht dann [pokemonStats[0], pokemonStats[1], pokemonStats[3]];
function addOVerlay() {
    document.getElementById("backgrounOverlay").classList.remove("d_none");
    document.getElementById("theBody").classList.add("no_scroll");
    document.getElementById("backgrounOverlay").innerHTML = getOpenedCardTemplate();
    event.stopPropagation();
}

function closeOverlay() {
    document.getElementById("backgrounOverlay").classList.add("d_none");
    document.getElementById("theBody").classList.remove("no_scroll");
    event.stopPropagation();
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