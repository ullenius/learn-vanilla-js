"use strict";

function init() {

    const PATH = "http://localhost:3000/v2/quotes";
    var quote = document.getElementById("quote");
    var paragraph = document.createElement("p");
    quote.appendChild(paragraph);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", PATH, true);
    xhr.send();

    xhr.onload = function callback() {
        if (xhr.status === 200) {
            console.log("Everything went well!");
            var result = JSON.parse(xhr.responseText);
            paragraph.textContent = result[0];
        }
        else {
            console.log("Something went wrong :(");
            console.log("HTTP status: " + xhr.status);
        }
    };

}

window.onload = init;
