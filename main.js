let saveUtil = document.querySelector("#saveUtil");
let loadUtil = document.querySelector("#loadUtil");
let loadBookmarkletFileName = "loadbm.txt";
let saveBookmarkletFileName = "savebm.txt";


let saveBookmarklet;

fetch(saveBookmarkletFileName)
    .then(response => response.text())
    .then((text) => {
        saveUtil.href = text;
    })

fetch(loadBookmarkletFileName)
    .then(response => response.text())
    .then((text) => {
        loadUtil.href = text;
    })