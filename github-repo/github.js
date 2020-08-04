import {repos} from "./repos.js";

"use strict";

function init() {

    console.log(repos.length);
    console.log(repos[0]);

    var app = document.getElementById("app");
    
    repos.forEach(function printRepo(repo) {


        if (repo.fork === false) {

            const name = header(repo.name);
            const language = paragraph("Language: " + repo.language);
            const description = paragraph("Description: " + repo.description);

            const arr = [name, language, description];
            const article = createArticle(arr);
            app.appendChild(article);
        }
    });
}

function paragraph(text) {
    return createElement("p", text);
}

function header(text) {
    return createElement("h1", text);
}

function createElement(type, text) {
    const element = document.createElement(type);
    const content = document.createTextNode(text);
    element.appendChild(content);

    Object.freeze(element);
    return element;
}

function createArticle(contents) {

    const article = document.createElement("article");
    contents.forEach(function append(element) {
        article.appendChild(element);
        });
    Object.freeze(article);
    return article;
}

window.onload = init;
