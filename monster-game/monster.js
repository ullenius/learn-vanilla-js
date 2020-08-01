"use strict";

function init() {

	var monsters = [
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

    var board = document.getElementById("app");
    var table = document.createElement("table");
    board.appendChild(table);

    let row = table.insertRow();
    for (let i = 0; i < monsters.length; i++) {

        if (i % 4 === 0) {
            row = table.insertRow();
        }
        let cell = row.insertCell();
        let img = document.createElement("img");
        img.setAttribute("src", monsters[i]);
        cell.appendChild(img);
    }
}


window.onload = init;
