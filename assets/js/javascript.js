var w = window.innerWidth;
console.log(w);
if (w > 1000) {
  var deleteLog = false;
    $(document).ready(function() {
        $('#pagepiling').pagepiling({
          menu: '#menu',
          anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6',],
          sectionsColor: ['#344955', '#344955', '#344955', '#f78c28', '#344955', '#f78c28'],
          loopTop: true,
          loopBottom: true
      });
  });
}


//SLIDER
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    //autoplay: {
      //delay: 1000,
      //disableOnInteraction: false,
    //},
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      1000: {
        slidesPerView: 1,
      },
    }
});