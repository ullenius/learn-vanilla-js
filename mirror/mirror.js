"use strict";
function init() {

    var content = document.getElementById("content");
    content.addEventListener("input", mirror, content);
    content.focus();
}

function mirror(event) {

    var preview = document.getElementById("preview-content");
    preview.innerText = event.target.value;
}

window.onload = init;
