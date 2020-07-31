"use strict";

function init() {

    var toc = document.getElementById("toc");
    var headings = document.getElementsByTagName("h2");
    var arr = [];

    console.log(headings);

    for (let i = 0; i < headings.length; i++) {

        let text = headings[i].textContent;
        arr.push(text);
    }

    var ol = document.createElement("ol");
    toc.appendChild(ol);

    arr.forEach(function makeToc(element) {

        let li = document.createElement("li");
        let text = document.createTextNode(element);
        li.appendChild(text);
        ol.appendChild(li);
    });



}

window.onload = init;
