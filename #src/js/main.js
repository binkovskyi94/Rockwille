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