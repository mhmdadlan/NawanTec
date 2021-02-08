// JavaScript Document
$(function(){
    "use strict";
    $("div[id^=art]").css("color", "#888888");
    $("div[id=art1]").css("color", "#111111");
$("div[id^=art]").on("click", function(event){
	$(this).css("color", "#111");
	var link = "img/" + $(this).attr("id") + ".png";
	$("img.widget").attr("src", link);
	$(this).siblings().css("color", "#888888");
});
});
$(function() {
	"use strict";
//	var topoffset = 50; //variable for menu height

  var wheight = $(window).height(); //get the height of the window
  $('.fullheight').css('height', wheight); //set to window tallness 
   
  //replace IMG inside carousels with a background image
  $('.featured .item img').each(function() {
    var imgSrc = $(this).attr('src');
    $(this).parent().css({'background-image': 'url('+imgSrc+')'});
    $(this).remove();
  });
  //adjust height of .fullheight elements on window resize
  $(window).resize(function() {
    wheight = $(window).height(); //get the height of the window
    $('.fullheight').css('height', wheight); //set to window tallness  
  });
  
  // add inbody class on scroll down
$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('nav').addClass("inbody");
  }
  else{
    $('nav').removeClass("inbody");
  }
});


    
  // Thumbnail effect
  $( document ).ready(function() {
    $("[rel='tooltip']").tooltip();    
 
    $('.thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    ); 
});


});