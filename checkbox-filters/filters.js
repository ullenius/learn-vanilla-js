import {SimpleSet} from "./set.js";
"use strict";

var songs = [];

function init() {
    appendCheckboxes();
    readPlaylist();
    console.log(songs);
}

function readPlaylist() {

    var playlist = document.querySelector("#playlist");
    var childNodes = playlist.childNodes;

    childNodes.forEach(function addSong(element) {

        if (element.attributes) {

            let song = element.textContent;
            let genre = element.attributes.getNamedItem("data-genre").value;
            let grammy = element.attributes.getNamedItem("data-grammy").value;

            const attributes = {
                genre : genre,
                grammy : grammy
            };
            let item = createSong(song, attributes);
            songs.push(item);
        }

      });
}

function createSong(song, attributes) {

    const entry = Object.create(null);
    entry.song = song;
    entry.grammy = attributes.grammy;
    entry.genre = attributes.grammy;

    Object.freeze(entry);
    return entry;
}

function readGenres() {

    var playlist = document.querySelector("#playlist");
    var childNodes = playlist.childNodes;

    console.log(playlist);
    console.log(childNodes.length);

    const genres = Object.create(SimpleSet);
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

    const box = document.createElement("input");
    box.setAttribute("type", "checkbox");
    box.setAttribute("name", name);
    box.setAttribute("checked", true);
    console.log(box);
    return box;
}

function labelFactory(name) {
    var label = document.createElement("label");
    label.setAttribute("for", name);
    label.textContent = name;
    return label;
}

function appendCheckboxes() {

    var filters = document.getElementById("filters");
    console.log(filters);
    var genres = readGenres();
    genres.forEach(function addBox(genre) {

        let box = checkboxFactory(genre);
        let label = labelFactory(genre);
        filters.appendChild(box);
        filters.appendChild(label);
    });

}

window.onload = init;
