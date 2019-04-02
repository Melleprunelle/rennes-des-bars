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