// btns 
const btnShowBraingomoApp = document.querySelector(".container-main-1-menu-1 p");
const btnShowBraingomoGame = document.querySelector(".container-main-1-menu-2 p");
const btnShowWebservers = document.querySelector(".container-main-1-menu-3 p");

const btnShowFormComment = document.querySelector(".container-main-3-2");
const btnCloseFormComment = document.querySelector(".close-form-comment");

const btnPrevEnabled = document.querySelector(".perv-btn-enabled");
const btnNextEnabled = document.querySelector(".next-btn-enabled");
const btnPervDisabled = document.querySelector(".perv-btn-disabled");
const btnNextDisabled = document.querySelector(".next-btn-disabled");

const btnNext = document.querySelector(".phone-slider-next-btn");
const btnPerv = document.querySelector(".phone-slider-perv-btn");

// pages

const pageBraingomoApp = document.querySelector("#Braingomo-App-page");
const pageBraingomoGame = document.querySelector("#Braingomo-Game-page");
const pageWebservers = document.querySelector("#Webservers-page");

const pageFormComment = document.querySelector(".Add-Comment-popup");

const picPhone1 = document.querySelector("#pics-1");
const picPhone2 = document.querySelector("#pics-2");
const picPhone3 = document.querySelector("#pics-3");

// other 

const borderBraingomoApp = document.querySelector(".container-main-1-menu-1");
const borderBraingomoGame = document.querySelector(".container-main-1-menu-2");
const borderWebservers = document.querySelector(".container-main-1-menu-3");

// functions

btnShowBraingomoApp.onclick = function () {
    pageBraingomoApp.style.display = 'grid';
    pageBraingomoGame.style.display = 'none';
    pageWebservers.style.display = 'none';

    borderBraingomoApp.style.borderBottom = '10px solid var(--color-Ellipse-20)';
    borderBraingomoGame.style.borderBottom = '10px solid #00969b32';
    borderWebservers.style.borderBottom = '10px solid #00969b32';
}
btnShowBraingomoGame.onclick = function () {
    pageBraingomoApp.style.display = 'none';
    pageBraingomoGame.style.display = 'grid';
    pageWebservers.style.display = 'none';

    borderBraingomoApp.style.borderBottom = '10px solid #00969b32';
    borderBraingomoGame.style.borderBottom = '10px solid var(--color-Ellipse-20)';
    borderWebservers.style.borderBottom = '10px solid #00969b32';
}
btnShowWebservers.onclick = function () {
    pageBraingomoApp.style.display = 'none';
    pageBraingomoGame.style.display = 'none';
    pageWebservers.style.display = 'grid';

    borderBraingomoApp.style.borderBottom = '10px solid #00969b32';
    borderBraingomoGame.style.borderBottom = '10px solid #00969b32';
    borderWebservers.style.borderBottom = '10px solid var(--color-Ellipse-20)';
}

btnShowFormComment.onclick = function () {

    if (pageFormComment.style.display === 'none') {
        pageFormComment.style.display = 'flex';
    }
    else {
        pageFormComment.style.display = 'none';
    }
}
btnCloseFormComment.onclick = function () {
    pageFormComment.style.display = 'none';
}

// card slider

const back = document.querySelector(".back");
let isDown = false;
let startX;
let scrollLeft;

back.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - back.offsetLeft;
    scrollLeft = back.scrollLeft;
});

back.addEventListener("mouseleave", () => {
    isDown = false;
});

back.addEventListener("mouseup", () => {
    isDown = false;
});

back.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - back.offsetLeft;
    const walk = (x - startX) * 1;
    back.scrollLeft = scrollLeft - walk;
});

// show 2 pages

window.onresize = function () {
    if (window.innerWidth < 501) {
        pageBraingomoApp.style.display = "grid";
        pageBraingomoGame.style.display = "grid";
        pageWebservers.style.display = "grid";

        btnPrevEnabled.style.display = "none";
        btnPervDisabled.style.display = "none";
        btnNextEnabled.style.display = "none";
        btnNextDisabled.style.display = "none";

        btnNext.style.display = "none";
        btnPerv.style.display = "none";
    }
    else {
        pageBraingomoApp.style.display = "grid";
        pageBraingomoGame.style.display = "none";
        pageWebservers.style.display = "none";

        borderBraingomoApp.style.borderBottom = '10px solid var(--color-Ellipse-20)';
        borderBraingomoGame.style.borderBottom = '10px solid #00969b32';
        borderWebservers.style.borderBottom = '10px solid #00969b32';

        picPhone1.style.display = "block"
        btnPrevEnabled.style.display = "none";
        btnPervDisabled.style.display = "grid";
        btnNextEnabled.style.display = "grid";
        btnNextDisabled.style.display = "none";

        btnNext.style.display = "grid";
        btnPerv.style.display = "grid";
    }
}

// phone sliders

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);

    if (picPhone1.style.display === "block") {
        btnPrevEnabled.style.display = "none";
        btnPervDisabled.style.display = "grid";
        btnNextEnabled.style.display = "grid";
        btnNextDisabled.style.display = "none";
    } else if (picPhone2.style.display === "block") {
        btnPrevEnabled.style.display = "grid";
        btnPervDisabled.style.display = "none";
        btnNextEnabled.style.display = "grid";
        btnNextDisabled.style.display = "none";
    } else if (picPhone3.style.display === "block") {
        btnPrevEnabled.style.display = "grid";
        btnPervDisabled.style.display = "none";
        btnNextEnabled.style.display = "none";
        btnNextDisabled.style.display = "grid";
    }
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("container-main-1-6-img-11");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

// slide btns

if (picPhone1.style.display === "block") {
    btnPrevEnabled.style.display = "none";
    btnPervDisabled.style.display = "grid";

    btnNextEnabled.style.display = "grid";
    btnNextDisabled.style.display = "none";
}