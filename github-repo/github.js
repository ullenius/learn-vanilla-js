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
            article.setAttribute("id", repo.name);
            console.log(article);
            app.appendChild(article);

            var commits = repo.commits_url;
            var index = commits.indexOf("{");
            var url = commits.substring(0, index);
            console.log(url);
            displayCommits(repo.name, url);
        }
    });
}

function displayCommits(name, url) {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();

    xhr.onload = function callback() {
        if (xhr.status === 200) {
            var result = JSON.parse(xhr.responseText);
            var article = document.getElementById(name);
            for (let i = 0; i < 3; i++) {
                let sha = paragraph(result[i].sha.substring(0,7));
                let message = paragraph(result[i].commit.message);
                article.appendChild(sha);
                article.appendChild(message);

                console.log(result[i].sha);
                console.log(result[i].commit.message);
            }
        } else {
            console.log("Something went wrong");
            console.log(xhr.status);
        }
    };
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
