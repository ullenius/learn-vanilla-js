"use strict";

const monsters = [
    'sock!',
    'monster1.svg',
    'monster2.svg',
    'monster3.svg',
    'monster4.svg',
    'monster5.svg',
    'monster6.svg',
    'monster7.svg',
    'monster8.svg',
    'monster9.svg',
    'monster10.svg',
    'monster11.svg'
];

function init() {

    var board = document.getElementById("app");
    var table = document.createElement("table");
    board.appendChild(table);

    var row = table.insertRow();
    for (let i = 0; i < monsters.length; i++) {

        if (i % 4 === 0) {
            row = table.insertRow();
        }
        let cell = row.insertCell();
     
     let img = document.createElement("img");
        img.setAttribute("src", "door.svg"); 
        img.setAttribute("alt", "Door");
        img.addEventListener("click", function reveal(event) {
            let monster = monsters[i];
            if (monster === "sock!") {
                gameOver();
            }
            else {
                event.target.src = monster;
            }
        });
        cell.appendChild(img);
    }
}

function gameOver() {
    alert("Sock! Game over! :(");
}

window.onload = init;
