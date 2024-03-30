let quitButton = document.querySelector(".quit-popup");
let quitPopup = document.querySelector(".popup");
let redButton = document.querySelector(".not-playable")

quitPopup.style.opacity = 0;
quitPopup.style.top = "-200%"

function quitThePopup() {
    quitPopup.style.opacity = 0;
    quitPopup.style.top = "-200%"
}

function openThePopup() {
    quitPopup.style.opacity = 1;
    quitPopup.style.top = "0%"
}

quitButton.onclick = function() {quitThePopup()};

redButton.onclick = function() {openThePopup()};