"use strict";

function init() {

    const HIDE = "Hide";
    const SHOW = "Show";
    var button = document.getElementById("knapp");
    var section = document.getElementById("pirate-speak");

    button.addEventListener("click", function toggle(event) {

        let caption = event.target.textContent;

        if (caption === HIDE) {
            section.className = "hidden";
            event.target.textContent = SHOW;
        } else {
            section.className = "";
            event.target.textContent = HIDE;
        }
    });

}

window.onload = init;
