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
    $('form .drag-n-drop-input').change(function () {
      $('form .drap-n-drop-files').text(this.files.length + " file(s) selected");
    });
  });
