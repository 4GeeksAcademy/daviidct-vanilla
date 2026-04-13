function generarNuevaCarta() {
    let palos = ["♦", "♥", "♠", "♣"];
    let valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    let indicePalo = Math.floor(Math.random() * palos.length);
    let paloElegido = palos[indicePalo];

    let indiceValor = Math.floor(Math.random() * valores.length);
    let valorElegido = valores[indiceValor];

    let divCarta = document.getElementById("carta");
    let divArriba = document.getElementById("simboloArriba");
    let divAbajo = document.getElementById("simboloAbajo");
    let divNumero = document.getElementById("numeroCentro");
    divArriba.innerHTML = paloElegido;
    divAbajo.innerHTML = paloElegido;
    divNumero.innerHTML = valorElegido;

    if (paloElegido === "♦" || paloElegido === "♥") {
        divCarta.className = "card rojo";
    } else {
        divCarta.className = "card negro";
    }
}
window.onload = generarNuevaCarta;