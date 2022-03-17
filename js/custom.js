// JavaScript Document
jQuery('#custom-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$(document).ready(function(){
    $('form input').change(function () {
      $('form p').text(this.files.length + " file(s) selected");
    });
  });
