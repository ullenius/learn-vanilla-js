"use strict";

function init() {

    var links = document.getElementsByTagName("a");
    console.log(links);
    var arr = [];

    function hideAll() { 
            arr.forEach(function hide(element) {
                display(element, true);
        });
    }

    for (let i = 0; i < links.length; i++) {

        let target = links[i].href;
        arr.push(links[i].href);

        links[i].addEventListener("click", function show() {
            hideAll(); // closure
            display(target, false);
        });
    }
    hideAll();
}

function display(target, hidden) {

    const style = (hidden === true) ? "hidden" : "";

    var index = target.indexOf("#") + 1;
    var anchor = target.substring(index);
    console.log(anchor);
    var section = document.getElementById(anchor);
    section.className = style;
    console.log(section);
}

window.onload = init;
