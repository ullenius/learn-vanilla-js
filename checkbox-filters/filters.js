import {SimpleSet} from "./set.js";
"use strict";

var songs = [];
var genres = [];
var grammy = true;

function init() {
    readPlaylist();
    appendCheckboxes();
    display(songs);

    var arr = readGenres();

    for (let i = 0; i < arr.length; i++) {
        genres[arr[i]] = true;
    }
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
                grammy : (grammy === "yes")
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

function appendCheckboxes() {

    var filters = document.getElementById("filters");
    var genres = readGenres();
    genres.forEach(function addBox(genre) {

        let box = checkboxFactory(genre);
        let label = labelFactory(genre);
        filters.appendChild(box);
        filters.appendChild(label);
    });

    let box = checkboxFactory("grammy");
    box.addEventListener("change", filterGrammy);
    let label = labelFactory("grammy");
    filters.appendChild(box);
    filters.appendChild(label);
}

function readGenres() {
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
    box.addEventListener("change", filterSongs);
    return box;
}

function labelFactory(name) {
    const label = document.createElement("label");
    label.setAttribute("for", name);
    label.textContent = name;
    return label;
}

function filterGrammy(event) {
    grammy = event.target.checked; // global variable
    var results = filter(); // by genre
    var second = filterByGrammy(results);
    display(second);
}


function liFactory(text) {
    const listItem = document.createElement("li");
    const textNode = document.createTextNode(text);
    listItem.appendChild(textNode);
    return listItem;
}

function filterSongs(event) {
    var name = event.target.name;
    var visible = event.target.checked; 
    genres[name] = visible;
    var results = filter();

    var second = filterByGrammy(results);
    display(second);
}

function filterByGrammy(arr) {

    var results = arr.filter(function(song) {
        if (song.grammy === grammy)
            return true;
    });
    return results;
}

function filter() {

    var results = songs.filter(function filter(song) {
        if (genres[song.genre])
            return true;
    });
    return results;
}

function display(songs) {

    var playlist = document.querySelector("#playlist");
    playlist.innerHTML = "";

    songs.forEach(function append(element) {
        const item = liFactory(element.song);
        playlist.appendChild(item);
    });
}

window.onload = init;
