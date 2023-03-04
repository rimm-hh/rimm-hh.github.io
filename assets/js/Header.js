// btns
const btnShowMenuMobileBar = document.querySelector(".bar-header");
const btnShowMenuMobileXmark = document.querySelector(".x-mark-header");

const btnShowServMobile = document.querySelector(".btn-serv-mobile");
const btnShowHowMobile = document.querySelector(".btn-how-mobile");
const btnShowServ = document.querySelector(".btn-serv");
const btnShowHow = document.querySelector(".btn-how");

// pages
const pageMenuMobile = document.querySelector(".container-menu-header-mobile");
const pageServMobile = document.querySelector(".serv-menu-mobile");
const pageHowMobile = document.querySelector(".how-menu-mobile");
const pageServ = document.querySelector(".serv-menu");
const pageHow = document.querySelector(".how-menu");
const footer2 = document.querySelector("footer");
const main2 = document.querySelector("main");

// others
const arrow1Mobile = document.querySelector(".chevron-down-1-mobile");
const arrow2Mobile = document.querySelector(".chevron-down-2-mobile");
const arrow1 = document.querySelector(".chevron-down-1");
const arrow2 = document.querySelector(".chevron-down-2");

// functions

window.addEventListener('scroll', function () {
    var header = document.querySelector('.bottom-header');
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll >= 100) {
        header.style.backgroundColor = '#EDD008';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

btnShowMenuMobileBar.onclick = function () {
    pageMenuMobile.style.right = '0%';
    btnShowMenuMobileBar.style.display = 'none';
    btnShowMenuMobileXmark.style.display = 'block';

    footer2.style.display = 'none';
    main2.style.display = 'none';

    pageLoginModal.style.display = 'none';
    btnShowProfileModalMobile.style.display = 'block';
    btnCancelProfileModalMobile.style.display = 'none';
}

btnShowMenuMobileXmark.onclick = function () {
    pageMenuMobile.style.right = '100%';
    btnShowMenuMobileBar.style.display = 'block';
    btnShowMenuMobileXmark.style.display = 'none';

    footer2.style.display = 'flex';
    main2.style.display = 'flex';
}

btnShowServMobile.onclick = function () {
    if (pageServMobile.style.display === 'none') {
        pageServMobile.style.display = 'block';
        arrow1Mobile.style.transform = 'rotate(180deg)';

        pageHowMobile.style.display = 'none';
        arrow2Mobile.style.transform = 'rotate(0deg)';
    }
    else {
        pageServMobile.style.display = 'none';
        arrow1Mobile.style.transform = 'rotate(0deg)';
    }
}
btnShowHowMobile.onclick = function () {
    if (pageHowMobile.style.display === 'none') {
        pageHowMobile.style.display = 'block';
        arrow2Mobile.style.transform = 'rotate(180deg)';

        pageServMobile.style.display = 'none';
        arrow1Mobile.style.transform = 'rotate(0deg)';
    }
    else {
        pageHowMobile.style.display = 'none';
        arrow2Mobile.style.transform = 'rotate(0deg)';
    }
}

btnShowServ.onclick = function () {
    if (pageServ.style.display === 'none') {
        pageServ.style.display = 'block';
        arrow1.style.transform = 'rotate(180deg)';

        pageHow.style.display = 'none';
        arrow2.style.transform = 'rotate(0deg)';
    }
    else {
        pageServ.style.display = 'none';
        arrow1.style.transform = 'rotate(0deg)';
    }
}
btnShowHow.onclick = function () {
    if (pageHow.style.display === 'none') {
        pageHow.style.display = 'block';
        arrow2.style.transform = 'rotate(180deg)';

        pageServ.style.display = 'none';
        arrow1.style.transform = 'rotate(0deg)';
    }
    else {
        pageHow.style.display = 'none';
        arrow2.style.transform = 'rotate(0deg)';
    }
}