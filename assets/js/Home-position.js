window.addEventListener('load', adjustPosition);

function adjustPosition() {
  const neuroImg = document.querySelector('.Neuro-img-11');
  neuroImg.style.top = '670px';
}

$(document).ready(function () {
  $('.container-main-1-right').css('right', '50px');
  $('.container-main-1-left').css('left', '120px');
});

$(document).scroll(function () {
  if ($(document).scrollTop() >= 2000) {
    $('.container-main-6-bottom-1').css('top', '0');
    $('.container-main-6-bottom-2').css('top', '0');
    $('.container-main-6-bottom-3').css('top', '0');
    $('.container-main-6-bottom-4').css('top', '0');
  }
});

const elem = document.querySelector('.sec-4-main-double-img');
const elem2 = document.querySelector('.sec-4-main-Neuro-back-img-22');

window.addEventListener('scroll', () => {
  const elemPosition = elem.offsetRight;

  if (window.pageYOffset > 500) {
    elem.style.right = '50px';
    elem2.style.top = '1030px';
  } else {
    elem.style.right = `${elemPosition}px`;
  }
});

// Cookies
const btnAgree = document.querySelector('.btn-I-Agree-Cookies');
const pageCookiesBack = document.querySelector('.container-Cookies-back');

pageCookiesBack.style.display = 'none';
setTimeout(function () {
  pageCookiesBack.style.display = 'flex';
}, 5500);
setTimeout(function () {
  pageCookiesBack.style.bottom = '0';
}, 6000);

btnAgree.onclick = function () {
  pageCookiesBack.style.bottom = '-300px';
  setTimeout(function () {
    pageCookiesBack.style.display = 'none';
  }, 1000);
}