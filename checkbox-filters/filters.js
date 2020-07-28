function init() {

}

function readGenres() {

    var playlist = document.querySelector("#playlist");
    var childNodes = playlist.childNodes;

    console.log(playlist);
    console.log(childNodes.length);

    var genres = [];

    childNodes.forEach(function(element) {

        if (element.attributes) {
            let value = element.attributes.getNamedItem("data-genre").value;
            genres[value] = true;
        }

    });
    return genres;
}

var genres = readGenres();
console.log(genres);

