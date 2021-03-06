"use strict";
function plaintext(event) {

    var toggle = event.target.checked;
    passwordsVisible(toggle);
}

function passwordsVisible(plaintext) {

    passwordFields.forEach(function(box) {
        box.type = (plaintext === true) ? "text" : "password";
    });
}

var passwordFields = [];
var init = function init() {

    var checkbox = document.getElementById("plaintext");
    checkbox.addEventListener("change", plaintext);

    var passwordBoxes = document.getElementsByTagName("input");
    for (var i = 0; i < passwordBoxes.length; i++) {
        if (passwordBoxes[i].type === "password") {
            passwordFields.push(passwordBoxes[i]);
        }
    }
}

window.onload = init;
