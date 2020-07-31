"use strict";

function init() {

    var figures = document.getElementsByTagName("figure");
    console.log(figures);

    for (let i = 0; i < figures.length; i++) {

        let caption = "";
        if (figures[i].attributes["data-caption"]) {
            caption = figures[i].attributes["data-caption"].textContent;
        }
        let src = figures[i].attributes["data-image"].textContent;

        let img = document.createElement("img");
        img.setAttribute("alt", caption);
        img.setAttribute("src", src);
        img.setAttribute("loading", "lazy");

        figures[i].appendChild(img);
    }
}

window.onload = init;
