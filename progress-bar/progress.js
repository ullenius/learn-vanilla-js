"use strict";

function init() {

    var progress = document.getElementById("progress");
    var bar = document.createElement("progress");
    bar.setAttribute("max", 100);
    bar.setAttribute("value", 0);
    bar.setAttribute("id", "bar");

    progress.appendChild(bar);

    var name = document.getElementById("name");
    var email = document.getElementById("email");
    name.addEventListener("focusout", updateBar);
    email.addEventListener("focusout", updateBar);

}

function updateBar() {
    var bar = document.getElementById("bar");

    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var arr = [name, email];
    var results = 0;

    arr.forEach(function meter(input) {
        let trimmed = input.value.trim();
        if (trimmed.length !== 0)
            results += 50;
    });

    bar.value = results;
}

window.onload = init;
