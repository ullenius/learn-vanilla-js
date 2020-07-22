"use strict";
function init() {
    
    var select = createList();

    var add = document.getElementById("addButton");
    add.onclick = function addOption(animal) {

        console.log("click!");
    };
}

function createList() {

    var app = document.getElementById("app");
    var select = document.createElement("select");
    
    var animals = ["dog", "rabbit", "bat", "lion", "sloth", "cat", "panther" ];

    animals.forEach(function createOption(animal) {
        var opt = document.createElement("option");
        var content = document.createTextNode(animal);
        opt.appendChild(content);
        select.appendChild(opt);
        console.log(opt);
    });
    app.appendChild(select);
    return select;
}

window.onload = init;
