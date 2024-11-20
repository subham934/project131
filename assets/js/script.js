"use strict";

// add event on element

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

// NAVBAR TOGGLE

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]")

const toggleNavbar = function(){
    navbar.classList.toggle('active');
    navToggler.classList.toggle('active')
}

addEventOnElem(navToggler, 'click', toggleNavbar); 




const closeNavbar = function(){
    navbar.classList.remove('active');
    navToggler.classList.remove('active')
}

addEventOnElem(navbarLinks, 'click', closeNavbar);




// ACTIVE HEADER WHEN WINDOW SCROLL DOWN TO 100PX

const header = document.querySelector('[data-header]');
const backTopBtn = document.querySelector('[data-back-top-btn]');

const activeElemOnScroll = function(){
    if(window.scrollY > 100){
        header.classList.add('active')
        backTopBtn.classList.add('active')
    }else{
        header.classList.remove('active')
        backTopBtn.classList.remove('active')
    }
}

addEventOnElem(window, 'scroll', activeElemOnScroll)