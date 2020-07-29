"use strict";

function init() {

    var links = document.getElementsByTagName("a");
    console.log(links);

    for (let i = 0; i < links.length; i++) {

        let target = links[i].href;
        links[i].addEventListener("click", function show() {
            display(target);
        });
    }
}

function display(target) {

    var index = target.indexOf("#");

    var anchor = target.substring(index+1);
    console.log(anchor);
    var section = document.getElementById(anchor);
    section.className = "hidden";
    console.log(section);
}

window.onload = init;
