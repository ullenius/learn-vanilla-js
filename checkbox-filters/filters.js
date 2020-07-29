import {SimpleSet} from "./set.js";
"use strict";

var songs = [];

function init() {
    readPlaylist();
    appendCheckboxes();
    display(songs);
}

function display(songs) {

    var playlist = document.querySelector("#playlist");
    playlist.innerHTML = "";

    songs.forEach(function append(element) {

        let item = document.createElement("li");
        let text = document.createTextNode(element.song);
        item.appendChild(text);
        playlist.appendChild(item);
    });
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
    entry.genre = attributes.genre;

    Object.freeze(entry);
    return entry;
}

function readGenres() {
    console.log("readgenres");

    const genres = Object.create(SimpleSet);
    genres.init();

    songs.forEach(function(song) {
        genres.add(song.genre);
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

    let box = checkboxFactory("grammy");
    let label = labelFactory("grammy");
    filters.appendChild(box);
    filters.appendChild(label);

}

window.onload = init;
