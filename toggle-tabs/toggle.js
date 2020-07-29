"use strict";

function init() {

    var links = document.getElementsByTagName("a");
    console.log(links);

    for (let i = 0; i < links.length; i++) {

        var target = link[i].href;
        link[i].addEventListener("click", function show() {
            display(target);
        });
    }
}

function display(target) {

    var anchor = target.subString(1);
    var section = document.getElementById(anchor);
    section.style = ".hidden";
}

window.onload = init;
