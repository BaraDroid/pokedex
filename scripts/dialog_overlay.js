
function addOVerlay() {
    document.getElementById("backgrounOverlay").classList.remove("d_none");
    document.getElementById("theBody").classList.add("no_scroll");
    //document.getElementById("backgrounOverlay").innerHTML = getOpenedCardTemplate();
    event.stopPropagation();
}

function closeOverlay() {
    document.getElementById("backgrounOverlay").classList.add("d_none");
    document.getElementById("theBody").classList.remove("no_scroll");
    event.stopPropagation();
}

