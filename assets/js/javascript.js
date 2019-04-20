var w = window.innerWidth;
console.log(w);
if (w > 1000) {
    var deleteLog = false;
    $(document).ready(function () {
        $('#pagepiling').pagepiling({
            menu: '#menu',
            anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', ],
            sectionsColor: ['#2d4753', '#2d4753', '#f78c28', '#2d4753', '#f78c28', '#2d4753'],
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
        stretch: 0,
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