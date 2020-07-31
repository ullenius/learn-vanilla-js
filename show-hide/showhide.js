"use strict";

function init() {

    var button = document.getElementById("knapp");
    var section = document.getElementById("pirate-speak");

    button.addEventListener("click", function toggle(event) {

        let caption = event.target.textContent;

        if (caption === "Hide") {
            section.className = "hidden";
            event.target.textContent = "Show";
        } else {
            section.className = "";
            event.target.textContent = "Hide";
        }
    });

}

window.onload = init;
