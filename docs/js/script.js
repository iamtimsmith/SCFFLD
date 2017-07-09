$(document).ready(function(){
    /****************** 
        Scroll Nav
    ******************/
    var height = $(".menu").height();
    
    $("a[href^='#']").on("click", function(e){
    e.preventDefault();
    $(document).off("scroll");

    var target = this.hash,
        menu = target;
      $target = $(target);
      $('html, body').stop().animate({
        'scrollTop' : $target.offset().top - height
      }, 500, "swing", function(){
        window.location.hash = target;
        $(document).on("scroll", onScroll);
      });    
    }); 
    
    
    
    /*********************
          Sticky Nav 
    *********************/
    var pos = $(".big").offset().top;
    
    $(window).scroll(function () {
        if ($(window).scrollTop() >= pos) {
            $('.big').addClass("fixed");
        } else {    
            $('.big').removeClass("fixed");
        }
    });
    
    
});
