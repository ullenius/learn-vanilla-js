"use strict";

const RECENT_COMMITS = 3;
const REPO_URL = "https://api.github.com/users/ullenius/repos";
const SHA_LENGTH = 7;
const HTTP_OK = 200;

function init() {

    var cache = readCache("repos");
    if (cache) {
        console.log("displaying repos from cache");
        displayRepos(cache);
    } else {
        console.log("fetching repos from API");
        fetchRepos();
    }
}

function readCache(name) {

    var cache = localStorage.getItem(name);
    if (cache !== null)
        var saved = JSON.parse(cache);
    return saved;
}

function saveCache(name, data) {
    var json = JSON.stringify(data);
    localStorage.setItem(name, json);
}

function fetchRepos() {
    var xhr = ApiRequest(REPO_URL);
    xhr.send();
    xhr.onload = function callback() {
        if (xhr.status === HTTP_OK) {
            var repos = JSON.parse(xhr.responseText);
            saveCache("repos", repos); 
            displayRepos(repos);
        } else {
            console.log("Something went wrong fetching the repos :(");
            console.log("HTTP status: " + xhr.status);
        }
    };
}

function displayRepos(repos) {
    
    var app = document.getElementById("app");

    repos.forEach(function printRepo(repo) {

        if (repo.fork === false) {

            const name = header(repo.name);
            const language = paragraph("Language: " + repo.language);
            const description = paragraph("Description: " + repo.description);

            const arr = [name, language, description];
            const article = createArticle(arr);
            article.setAttribute("id", repo.name);
            app.appendChild(article);

            var commits = repo.commits_url;
            var index = commits.indexOf("{");
            var url = commits.substring(0, index);
            displayCommits(repo.name, url);
        }
    });
}

function displayCommits(name, url) {

    var cache = readCache(name);
    if (cache) {
        console.log("reading commits from cache");
        display(cache);
    } else {
        console.log("fetching commits");
        var xhr = ApiRequest(url);
        xhr.send();

        xhr.onload = function callback() {
            if (xhr.status === HTTP_OK) {
                var result = JSON.parse(xhr.responseText);
                saveCache(name, result);
                display(result);
            } else {
                console.log("Something went wrong");
                console.log("HTTP status: " + xhr.status);
            }
        };
    }
    function display(result) {
        var article = document.getElementById(name);
        for (let i = 0; i < RECENT_COMMITS; i++) {
            let sha = result[i].sha.substring(0,SHA_LENGTH);
            let message = result[i].commit.message;
            let text = paragraph(sha + " : " + message);
            article.appendChild(text);
        }
    }
}

function ApiRequest(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    return xhr;
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
