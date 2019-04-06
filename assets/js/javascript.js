$(function(){
    $("a").click(function(evt){
      evt.preventDefault();
      var obj = $(this),
          objParent = obj.parent(),
          allLi = objParent.parent().find("a");
      
      $("div.nav li").removeClass("active");
        allLi.removeClass("active");
        objParent.addClass("active");
    });
  });


var deleteLog = false;
var w = window.innerWidth;
if (w > 1000) {		
  $(document).ready(function() {
      $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6',],
        sectionsColor: ['#344955', '#f78c28', '#344955', '#f78c28', '#344955', '#f78c28'],
        loopTop: true,
        loopBottom: true
    });
  });
};