// btns
const btnShowProfileModal = document.querySelector(".Profile-btn-1");
const btnCancelProfileModal = document.querySelector(".cancel-1");

const btnShowProfileModalMobile = document.querySelector(".user-header");
const btnCancelProfileModalMobile = document.querySelector(".cancel-2");

const btnShowLoginWellness = document.querySelector(".Wellness-btn");
const btnShowLoginMedical = document.querySelector(".Medical-btn");

// Page
const pageLoginModal = document.querySelector(".container-login");

const pageLoginWellness = document.querySelector(".login-form-Wellness");
const pageLoginMedical = document.querySelector(".login-form-Medical");

const pageDontHave = document.querySelector(".Dont-have-a-profile--sec");
const footer3 = document.querySelector("footer");
const main3 = document.querySelector("main");

// functions
// desktop size 

btnShowProfileModal.onclick = function () {
    if (pageLoginModal.style.display === 'none') {
        pageLoginModal.style.display = 'Grid';
        btnCancelProfileModal.style.display = 'block';
    }
    else {
        pageLoginModal.style.display = 'none';
    }
}
btnCancelProfileModal.onclick = function () {
    pageLoginModal.style.display = 'none';
}

// phone size

btnShowProfileModalMobile.onclick = function () {
    pageLoginModal.style.display = 'Grid';

    btnShowProfileModalMobile.style.display = 'none';
    btnCancelProfileModalMobile.style.display = 'block';

    btnCancelProfileModal.style.display = 'none';

    footer3.style.display = 'none';
    main3.style.display = 'none';

    pageMenuMobile.style.right = '100%';
    btnShowMenuMobileBar.style.display = 'block';
    btnShowMenuMobileXmark.style.display = 'none';
}
btnCancelProfileModalMobile.onclick = function () {
    pageLoginModal.style.display = 'none';

    btnShowProfileModalMobile.style.display = 'block';
    btnCancelProfileModalMobile.style.display = 'none';

    footer3.style.display = 'flex';
    main3.style.display = 'flex';
}

// show sections

btnShowLoginWellness.onclick = function () {
    pageLoginWellness.style.display = 'flex';
    pageLoginMedical.style.display = 'none';

    btnShowLoginWellness.style.borderBottom = '7px solid var(--color-Ellipse-20)';
    btnShowLoginMedical.style.borderBottom = 'none';

    pageDontHave.style.display = 'none';
}
btnShowLoginMedical.onclick = function () {
    pageLoginWellness.style.display = 'none';
    pageLoginMedical.style.display = 'flex';

    btnShowLoginWellness.style.borderBottom = 'none';
    btnShowLoginMedical.style.borderBottom = '7px solid var(--color-Ellipse-20)';

    pageDontHave.style.display = 'flex';
}


window.onresize = function () {
    if (window.innerWidth < 501) {
        pageLoginModal.style.display = 'none';
        btnCancelProfileModal.style.display = 'none';
        btnShowProfileModalMobile.style.display = 'block';
        btnCancelProfileModalMobile.style.display = 'none';
    }
    else {
        btnCancelProfileModal.style.display = 'block';
        footer3.style.display = 'flex';
        main3.style.display = 'flex';
    }
}