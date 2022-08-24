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
}
function asr() {
    innerCursor.style.width = "50px";
    innerCursor.style.height = "50px";
    outerCursor.style.width = "51px";
    outerCursor.style.height = "51px";

}function asr2() {
    let containerA = document.getElementById("containerA");
    let containerB = document.getElementById("containerB");
    containerA.style.filter = "blur(0px)";
    containerB.style.height = "70vh";
    innerCursor.style.width = "10px";
    innerCursor.style.height = "10px";
    outerCursor.style.width = "25px";
    outerCursor.style.height = "25px";
}
function asr4() {
    let containerA = document.getElementById("containerA");
    let containerB = document.getElementById("containerB");
    containerA.style.filter = "blur(5px)";
    // containerB.style.height = "80vh";
    // innerCursor.style.width = "300px";
    // innerCursor.style.height = "300px";
    // outerCursor.style.width = "310px";
    // outerCursor.style.height = "310px";
}



let menu = document.getElementById("menu");
let menuNum = 0;
let navContainer = document.getElementById("nav");
let oneContainer = document.getElementById("oneContainer");
let oneMenuX = document.getElementById("oneMenu");
let twoMenuX = document.getElementById("twoMenu");
function menuA() {
    if (menuNum==0) {   
        navContainer.style.backgroundColor = "black";
        navContainer.style.height = "100vh";
        menuNum++;
    } else {
        navContainer.style.backgroundColor = "transparent";
        navContainer.style.height = "10vh";
        menuNum--;
    } 
}
let links = document.getElementById("links");
let menuXNum = 0;
function menuAX() {
    if (menuXNum==0) {
        links.style.display = "inline-block";
        oneMenuX.style.bottom = "50%";
        twoMenuX.style.bottom = "50%";
        oneMenuX.style.transform = "rotate(-45deg)";
        twoMenuX.style.transform = "rotate(45deg)"; 
        menuXNum++;
    } else {
        links.style.display = "none";
        oneMenuX.style.bottom = "0%";
        twoMenuX.style.bottom = "100%";
        menuXNum--;
        oneMenuX.style.transform = "rotate(0deg)";
        twoMenuX.style.transform = "rotate(0deg)";
    }   
}function asr3() {
    let groupOneImg = document.getElementById("groupOneImg");
    groupOneImg.style.display = "flex";
    links.style.display = "none";
    oneMenuX.style.bottom = "0%";
    twoMenuX.style.bottom = "100%";
    oneMenuX.style.transform = "rotate(0deg)";
    twoMenuX.style.transform = "rotate(0deg)";
    navContainer.style.backgroundColor = "transparent";
    navContainer.style.height = "10vh";
    menuNum--;
    menuXNum--;
}
let musicNum = 0;
let audio = document.getElementById("audio");
let music= document.getElementById("musicOne");
function musicPlay() {
    if (musicNum==0) {
        audio.play();
        music.style.setProperty('--color-pseudo', 'rgb(0, 255, 242)');
        music.style.border = "2px solid rgb(0, 255, 242)";
        music.style.setProperty('--left-pseudo', 'none');
        music.style.setProperty('--right-pseudo', '5%');
        musicNum++;
    } else {
        audio.pause();
        music.style.setProperty('--color-pseudo', 'rgb(255, 250, 255)');
        music.style.border = "2px solid rgb(255, 250, 255)";
        music.style.setProperty('--right-pseudo', 'none');
        music.style.setProperty('--left-pseudo', '5%');
        musicNum--;
    }
}

let twocontainer = document.getElementById("twocontainer");
let containerA = document.getElementById("containerA");
let containerB = document.getElementById("containerB");
let arrowContainer = document.getElementById("arrowContainer");
function mostrarScroll() {
    let groupOneImg = document.getElementById("groupOneImg");
    let groupOneText = document.getElementById("groupOneText");
    let groupTwoTitle = document.getElementById("groupTwoTitle");
    let groupTwoData = document.getElementById("groupTwoData");
    // height of element
    let twocontainerY = twocontainer.offsetTop/2-1;
    // alert(twocontainerY)
    let allTwoNum = twocontainer.offsetTop/2;
    // Scroll actual
    let scrollA = document.documentElement.scrollTop;
    if(allTwoNum < scrollA) {
        groupTwoTitle.style.fontSize = "20px";
        groupTwoData.style.fontSize = "13px";
        groupOneText.style.display = "block";
        groupOneImg.style.display = "flex";
        arrowContainer.style.bottom = "-113%";
        containerA.style.width = "50%";
        containerB.style.width = "50%";
        // containerB.style.boxShadow = "5px 10px 15px rgb(255, 30, 30)";
    } else {
        groupTwoTitle.style.fontSize = "0px";
        groupTwoData.style.fontSize = "0px";
        groupOneText.style.display = "none";
        groupOneImg.style.display = "none";
        arrowContainer.style.bottom = "-10%";
        containerA.style.width = "0%";
        containerB.style.width = "0%";
    }
};
window.addEventListener('scroll', mostrarScroll);