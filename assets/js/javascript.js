'use strict';

// DETECTION TAILLE ECRAN
var w = window.innerWidth;
if (w > 1000) {
    var deleteLog = false;
    $(document).ready(function () {
        $('#pagepiling').pagepiling({
            menu: '#menu',
            anchors: ['accueil', 'kesako', 'team', 'actualites', 'avis-client', 'contact',],
            sectionsColor: ['#2d4753', '#2d4753', '#f9aa33', '#2d4753', '#f9aa33', '#2d4753'],
            loopTop: true,
            loopBottom: true
        });
    });
}



//SLIDER PHONE
var swiper = new Swiper('#swiper-present', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 20,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: '.swiper-button-next-present',
        prevEl: '.swiper-button-prev-present',
    },
    breakpoints: {
        1000: {
            slidesPerView: 1,
        },
    }
});



//SLIDER ACTU
var swiper = new Swiper('#swiper-actu', {
    slidesPerView: 2,
    spaceBetween: 40,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next-actu',
        prevEl: '.swiper-button-prev-actu',
    },
    //autoplay: {
    //delay: 1000,
    //disableOnInteraction: false,
    //},
    breakpoints: {
        1250: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
    }
});



//SLIDER AVIS
var swiper = new Swiper('.swiper-avis', {
    slidesPerView: 2,
    slidesPerColumn: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1460: {
            slidesPerView: 2,
            slidesPerColumn: 2,
        },
        1300: {
            slidesPerView: 1,
            slidesPerColumn: 2,
        },
    }
});