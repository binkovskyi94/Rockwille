$(function(){
    
    $('.open__fast').click(function(){
        $('.popup__fast').css({'top': $(window).scrollTop() +100}).addClass('active');
        $('.bg__popup').fadeIn();
    
        $('.bg__popup').click(function(){
            $('.popup__fast').removeClass('active');
            $('.bg__popup').fadeOut();
        });
    });

});

$(window).scroll(function(){

    $('.popup__fast').css({'top': $(window).scrollTop() +100})

}).scroll();

$(function(){

    $('.header__menu-btn').on('click', function(){          
        $('.header__menu ul ').slideToggle();  
    });  

});

$(function(){
    
    $('.button').on("click", function(){
      if($('body').hasClass('nav_is_visible') == true){
       $('body').removeClass('nav_is_visible');
       $('.button').removeClass('close');
          }
      else{
       $('body').addClass('nav_is_visible');
       $('.button').addClass('close');
    }

});

$('body').addClass('home_is_visible');
  
function removeClasses() {

    $(".menu ul li").each(function() {
      var custom_class = $(this).find('a').data('class');
    $('body').removeClass(custom_class);
        });
    }
    $('.menu a').on('click',function(e){
      e.preventDefault();
      removeClasses();
      var custom_class = $(this).data('class');
      $('body').addClass(custom_class);
    });
    
});