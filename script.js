let punkte = 0;

let button = document.getElementById("button");

let text = document.getElementById("text");

button.onclick = function () {

    punkte = punkte + 1;

    text.innerHTML = "Punkte: " + punkte;
};
