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

function initMap() {
    let pos = {lat: 35.226085, lng: -80.843130};
    let opt = {
        center: pos,
        zoom: 10,
        styles: [
            {
              elementType: "geometry",
              stylers: [
                {
                  color: "#000"
                }
              ]
            },
            {
              elementType: "labels.text.stroke",
              stylers: [
                {
                  color: "#242f3e"
                }
              ]
            },
            {
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#746855"
                }
              ]
            },
            {
              featureType: "administrative.locality",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#d59563"
                }
              ]
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#d59563"
                }
              ]
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [
                {
                  color: "#263c3f"
                }
              ]
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#6b9a76"
                }
              ]
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [
                {
                  color: "#38414e"
                }
              ]
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#212a37"
                }
              ]
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#9ca5b3"
                }
              ]
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [
                {
                  color: "#746855"
                }
              ]
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#1f2835"
                }
              ]
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#f3d19c"
                }
              ]
            },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [
                {
                  color: "#2f3948"
                }
              ]
            },
            {
              featureType: "transit.station",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#d59563"
                }
              ]
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [
                {
                  color: "#17263c"
                }
              ]
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#515c6d"
                }
              ]
            },
            {
              featureType: "water",
              elementType: "labels.text.stroke",
              stylers: [
                {
                  color: "#17263c"
                }
              ]
            }
          ]
    };

    let myMap = new google.maps.Map(document.getElementById("map"), opt);

    let marker = new google.maps.Market({
        position: pos,
        map: myMap,
        title: "Music Festival",
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });


}