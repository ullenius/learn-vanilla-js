import {SimpleSet} from "./set.js";
"use strict";

function init() {

}

function readGenres() {

    var playlist = document.querySelector("#playlist");
    var childNodes = playlist.childNodes;

    console.log(playlist);
    console.log(childNodes.length);

    var genres = Object.create(SimpleSet);
    genres.init();

    childNodes.forEach(function(element) {

        if (element.attributes) {
            let value = element.attributes.getNamedItem("data-genre").value;
            genres.add(value);
        }

    });
    return genres.toArray();
}

function checkboxFactory(name) {

    var box = document.createElement("input");
    box.setAttribute("type", "checkbox");
    box.setAttribute("name", name);
    return box;
}

var genres = readGenres();
console.log(genres);



