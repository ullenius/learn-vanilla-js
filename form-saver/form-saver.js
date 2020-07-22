"use strict";

var item = Object.create(null);

function init() {

    var cache = localStorage.getItem("fields");
    if (cache !== null) {
        var fields = JSON.parse(cache);
    }
    console.log(fields);
    var fields = document.getElementsByTagName("input");

    for (var i = 0; i < fields.length; i++) {
        fields[i].addEventListener("input", save);
    }


}

function save(event) {

    console.log(event.target);
    item[event.target.id] = event.target.value;
    localStorage.setItem("fields", JSON.stringify(item));
}

window.onload = init;
