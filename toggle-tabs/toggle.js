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
    links[0].click(); // make tab active by default
}

function display(target, hidden) {

    const style = (hidden === true) ? "hidden" : "";

    var index = target.indexOf("#") + 1;
    var anchor = target.substring(index);
    var section = document.getElementById(anchor);
    section.className = style;
}

window.onload = init;
