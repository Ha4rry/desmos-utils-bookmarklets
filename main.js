let saveUtil = document.querySelector("#saveUtil");
let loadUtil = document.querySelector("#loadUtil");
let multiSaveUtil = document.querySelector("#multiSaveUtil");
let loadBookmarkletFileName = "loadbm.txt";
let saveBookmarkletFileName = "savebm.txt";
let multiSaveBookmarkletFileName = "multisavebm.txt";



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

fetch(multiSaveBookmarkletFileName)
    .then(response => response.text())
    .then((text) => {
        multiSaveUtil.href = text;
})
