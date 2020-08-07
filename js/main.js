window.addEventListener("load", function () {
    document.getElementById("play1").addEventListener("click", sonar);
});

function sonar() {
    var sonido = document.createElement("audio");
    sonido.setAttribute("src", "sonidos/extintor.mp3");
    document.body.appendChild(sonido);
    document.getElementById("play1").removeEventListener("click", sonar);
}

