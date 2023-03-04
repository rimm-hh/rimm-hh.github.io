// btns
const btnCircle1 = document.querySelector(".circle-1");
const btnCircle2 = document.querySelector(".circle-2");
const btnCircle3 = document.querySelector(".circle-3");
const btnDoIt = document.querySelector(".btns-sec-5-main-left-DoIt");
const btnNext = document.querySelector(".btns-sec-5-main-left-Next");

const btnCircle11 = document.querySelector(".circle-11");
const btnCircle22 = document.querySelector(".circle-22");

// pages
const pagePic1 = document.querySelector(".sec-5-main-right-pic-1");
const pagePic2 = document.querySelector(".sec-5-main-right-pic-2");
const pagePic3 = document.querySelector(".sec-5-main-right-pic-3");

const pagePic11 = document.querySelector(".container-main-7-right-photo-1");
const pagePic22 = document.querySelector(".container-main-7-right-photo-2");

// functions
btnCircle1.onclick = function () {
    pagePic1.style.display = 'flex';
    pagePic2.style.display = 'none';
    pagePic3.style.display = 'none';

    btnDoIt.style.display = 'flex';
    btnNext.style.display = 'none';

    btnCircle1.style.color = 'var(--color-Ellipse-22)';
    btnCircle2.style.color = 'transparent';
    btnCircle3.style.color = 'transparent';
}
btnCircle2.onclick = function () {
    pagePic1.style.display = 'none';
    pagePic2.style.display = 'flex';
    pagePic3.style.display = 'none';

    btnDoIt.style.display = 'none';
    btnNext.style.display = 'flex';

    btnCircle1.style.color = 'transparent';
    btnCircle2.style.color = 'var(--color-Ellipse-22)';
    btnCircle3.style.color = 'transparent';
}
btnCircle3.onclick = function () {
    pagePic1.style.display = 'none';
    pagePic2.style.display = 'none';
    pagePic3.style.display = 'flex';

    btnDoIt.style.display = 'none';
    btnNext.style.display = 'flex';

    btnCircle1.style.color = 'transparent';
    btnCircle2.style.color = 'transparent';
    btnCircle3.style.color = 'var(--color-Ellipse-22)';
}

btnCircle11.onclick = function () {
    pagePic11.style.display = 'flex';
    pagePic22.style.display = 'none';


    btnCircle11.style.color = 'var(--color-Ellipse-22)';
    btnCircle22.style.color = 'transparent';
}
btnCircle22.onclick = function () {
    pagePic11.style.display = 'none';
    pagePic22.style.display = 'flex';

    btnCircle11.style.color = 'transparent';
    btnCircle22.style.color = 'var(--color-Ellipse-22)';
}

window.onresize = function() {
    if (window.innerWidth < 601) {
        pagePic1.style.display = "flex";
        pagePic2.style.display = "flex";
        pagePic3.style.display = "flex";

        pagePic11.style.display = "flex";
        pagePic22.style.display = "flex";
  }
  else {
    pagePic1.style.display = "flex";
    pagePic2.style.display = "none";
    pagePic3.style.display = "none";

    pagePic11.style.display = "flex";
    pagePic22.style.display = "none";
    btnCircle11.style.color = 'var(--color-Ellipse-22)';
    btnCircle22.style.color = 'transparent';
} }