'use strict';

let initialTextHtml = document.getElementById("random-eng-text");
let emptyPar = document.getElementById("empty-par");

function copyText() {
    initialTextHtml.innerHTML.split(' ').forEach((el) => {
        if(el.toLowerCase().charAt(0) === "r") {
            el = `<span style="color: red"> ${el.split("").reverse().join("")} </span>`;
            emptyPar.innerHTML += el + " "
        } else if(el.toLowerCase().charAt(0) !== "r") {
            emptyPar.innerHTML += el + " "
        }
    });
}

