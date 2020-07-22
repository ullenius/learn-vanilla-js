function plaintext(event) {

    var passwordBox = document.getElementById("password");
    if (event.target.checked === true) {
        passwordBox.type = "text";
    } else {
        passwordBox.type = "password";
    }
}

function init() {

    var checkbox = document.getElementById("plaintext");
    checkbox.addEventListener("change", plaintext);
}




window.onload = init;
