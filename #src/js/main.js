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
    let pos = {lat: 35.257733, lng: -80.849192};
    let opt = {
        center: pos,
        zoom: 9,
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#181818"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1b1b1b"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#2c2c2c"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8a8a8a"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#373737"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#3c3c3c"
              }
            ]
          },
          {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#4e4e4e"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#000000"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#3d3d3d"
              }
            ]
          }
        ]        
};

  let myMap = new google.maps.Map(document.getElementById("map"), opt);

  let marker = new google.maps.Marker({
      position: {lat: 34.898688, lng: -80.739192},
      map: myMap,
      title: "Music Festival",
      icon: 'images/marker.png'
  });


}