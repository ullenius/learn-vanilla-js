"use strict";

function init() {

    var toc = document.getElementById("toc");
    var headings = document.getElementsByTagName("h2");
    var arr = [];

    for (let i = 0; i < headings.length; i++) {
        let text = headings[i].textContent;
        let obj = {
            header : text,
            href : i.toString()
        };
        headings[i].id = obj.href;
        arr.push(obj);
    }
    console.log(arr);

    var ol = document.createElement("ol");
    toc.appendChild(ol);

    arr.forEach(function makeToc(element) {

        let li = document.createElement("li");
        let link = document.createElement("a");
        link.href = "#" + element.href;
        let text = document.createTextNode(element.header);
        link.appendChild(text);
        li.appendChild(link);
        ol.appendChild(li);
    });

}

window.onload = init;
