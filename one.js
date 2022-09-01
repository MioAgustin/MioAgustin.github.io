// Menu Variables
let menuOne = document.getElementById("menuOne");
let menuTwo = document.getElementById("menuTwo");
let coolOne = document.getElementById("coolOne");
let coolTwo = document.getElementById("coolTwo");
let navOneColumn = document.getElementById("navOneColumn");
let fontMenu = document.getElementById("fontMenu");
let fontMenu2 = document.getElementById("fontMenu2");
let fontMenu3 = document.getElementById("fontMenu3");
let navTwo = document.getElementById("navTwo");
let nav = document.getElementById("nav");
let NumMenu = 0;
function menuA() {
    if (NumMenu==0) {
        nav.style.backgroundColor = "rgb(0, 0, 0)";
        nav.style.height = "100vh";
        fontMenu.style.fontSize = "60px";
        fontMenu2.style.fontSize = "40px";
        fontMenu3.style.fontSize = "13px";
        navTwo.style.height = "90vh";
        navOneColumn.style.backgroundColor= "rgb(200, 0, 255)";
        coolOne.style.color = "rgb(200, 0, 255)";
        coolTwo.style.color = "rgb(200, 0, 255)";
        menuOne.style.backgroundColor = "rgb(200, 0, 255)";
        menuOne.style.transform = "rotate(40deg)";
        menuTwo.style.backgroundColor = "rgb(200, 0, 255)";
        menuTwo.style.transform = "rotate(-40deg)";
        menuTwo.style.top = "0%";
        NumMenu++;
    } else {
        nav.style.backgroundColor = "transparent";
        nav.style.height = "10vh";
        fontMenu.style.fontSize = "0px";
        fontMenu2.style.fontSize = "0px";
        fontMenu3.style.fontSize = "0px";
        navTwo.style.height = "0";
        navOneColumn.style.backgroundColor = "rgb(255, 255, 255)";
        coolOne.style.color = "rgb(255, 255, 255)";
        coolTwo.style.color = "rgb(255, 255, 255)";
        menuOne.style.backgroundColor = "rgb(255, 255, 255)";
        menuOne.style.transform = "rotate(0deg)";
        menuTwo.style.backgroundColor = "rgb(255, 255, 255)";
        menuTwo.style.transform = "rotate(0deg)";
        menuTwo.style.top = "100%";
        NumMenu--;
    }
}
// Cursor variables
document.addEventListener("mousemove", moveCursor);
let innerCursor = document.getElementById("inner");
let outerCursor = document.getElementById("outer");
function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;
    innerCursor.style.left = x+"px";
    innerCursor.style.top = y+"px";
    outerCursor.style.left = x+"px";
    outerCursor.style.top = y+"px";
} function cursorHover() {
    innerCursor.style.width = "50px";
    innerCursor.style.height = "50px";
    outerCursor.style.width = "50px";
    outerCursor.style.height = "50px";
}
function cursorOut() {
    innerCursor.style.width = "10px";
    innerCursor.style.height = "10px";
    outerCursor.style.width = "25px";
    outerCursor.style.height = "25px";
}
// Music
let music = document.getElementById("music");
let musiCircle = document.getElementById("musiCircle");
let audio = document.getElementById("audio");
let NumMusic = 0;
function Music() {
    if (NumMusic==0) {
       audio.play();
        music.style.justifyContent = "flex-end";
        music.style.border = "2px solid rgb(200, 0, 255)";
        musiCircle.style.backgroundColor = "rgb(200, 0, 255)";
        NumMusic++;
    } else {
        audio.load();
        music.style.justifyContent = "flex-start";
        music.style.border = "2px solid rgb(255, 255, 255)";
        musiCircle.style.backgroundColor = "rgb(255, 255, 255)";
        NumMusic--;
    }
}