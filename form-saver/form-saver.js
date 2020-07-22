"use strict";

var item = Object.create(null);

function init() {

    var fields = document.getElementsByTagName("input");
    var saved = readCache();

    for (var i = 0; i < fields.length; i++) {
        fields[i].addEventListener("input", save);
        fields[i].textContent = saved[fields[i].id]; //undefined doesn't break
    }

    var form = document.getElementById("autosave");
    form.addEventListener("submit", function clearCache() {
        localStorage.clear();
    });
}

function readCache() {
    var cache = localStorage.getItem("fields");
    if (cache !== null) {
        var saved = JSON.parse(cache);
    }
    return saved;
}

function save(event) {

    console.log(event.target);
    item[event.target.id] = event.target.value;
    localStorage.setItem("fields", JSON.stringify(item));
}


window.onload = init;
