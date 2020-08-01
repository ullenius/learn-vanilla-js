"use strict";

const monsterArr = [
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

	var monsters = randomize(monsterArr);	
    var monstersRemaining = monsters.length - 1;
    var board = document.getElementById("app");
    var table = document.createElement("table");
	board.innerHTML = "";
    board.appendChild(table);

    var row = table.insertRow();
    for (let i = 0; i < monsters.length; i++) {

        if (i % 4 === 0) {
            row = table.insertRow();
        }
        let cell = row.insertCell();
     
		 let img = createDoor();
		 img.addEventListener("click", function reveal(event) {
			let monster = monsters[i];
			if (monster === "sock!") {
					gameOver();
			} else {
				event.target.src = monster;
				monstersRemaining--;
				if (monstersRemaining === 0) {
					won();
				}
            }
        });
		cell.appendChild(img);
    }
}

function createDoor() {
     const img = document.createElement("img");
     img.setAttribute("src", "door.svg"); 
     img.setAttribute("alt", "Door");
	return img;
}

function gameOver() {
    alert("Sock! Game over! :(");
}

function won() {
    alert("Congratulations! You found all the monsters");
    var replay = confirm("Do you want to play again?");
    if (replay === true) {
        let board = document.getElementById("app");
        board.innerHTML = "";
        init();
    }
}

// Fisher Yates algorithm
function randomize(array) {

	for (let i = array.length - 1; i > 0; i--) {
	  const j = Math.floor(Math.random() * i);
	  const temp = array[i];
	  array[i] = array[j];
	  array[j] = temp;
	}
	return array;
}

window.onload = init;
