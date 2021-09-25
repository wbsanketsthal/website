$(document).ready(function(){
  if ($.cookie('preloader')) {
      $('#loader-wrapper').hide();
      $('.wrapper').show();
  } 
  else 
  {         
     $(window).on('load', function () {
         $('#loader-wrapper').fadeOut(1000);
      });
      $('.wrapper').show();
      $.cookie('preloader', true, { 
          path: '/',         
          expire: 1
      });
   }
}); 


//Match title height
function MatchHeight1() {
  $('.match')
    .matchHeight({})
  ;
}
//Functions that run when all HTML is loaded
$(document).ready(function() {
  MatchHeight1(); 
});
$(document).resize(function() {
  MatchHeight1(); 
});


$(window).scroll(function(){
  var sticky = $('header'),
  scroll = $(window).scrollTop();    
  if (scroll >= 100) sticky.addClass('fixednow');
  else sticky.removeClass('fixednow');
});