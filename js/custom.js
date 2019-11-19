/*-----Service-----*/

$(document).ready(function(){
    new WOW().init();               
});

$(function(){
    $("#work").magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }
    });
});

/*-------team-member-----*/

$(function(){
    $('#team-member').owlCarousel({
        items:3,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true,
    });
});

/*-------testimonial-----*/

$(function(){
    $('#customer-testimonial').owlCarousel({
        items:1,
        autoplay:true,
        smartSpeed:700,
        autoplayHoverPause:true,
        loop:true,
    });
});