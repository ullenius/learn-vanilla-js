function init() {

    var textArea = document.getElementById("content");
    textArea.addEventListener("input", wordcount);
}

function wordcount(event) {

    var words = event.target.value;
    var length = words.split(" ").length;
    displayWordcount(length);
}

function displayWordcount(num) {

    var words = document.getElementById("word-count");
    words.textContent = num;
}

window.onload = init;
