"use strict";

function init() {

    var headings = document.getElementsByTagName("h2");
    var arr = [];

    for (let i = 0; i < headings; i++) {

        let text = headings[i].textContent;
        arr.push(text);
    }

    console.log(arr);

}

window.onload = init;
