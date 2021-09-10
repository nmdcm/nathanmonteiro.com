AOS.init({
  easing: 'ease-in-quad',
});

//Scroll Links
$("#button").click(function() {
  $('html, body').animate({
      scrollTop: ($("#experience").offset().top)-60
  }, 1300);
  
});
$(".exp-nav").click(function() {
  $('html, body').animate({
      scrollTop: $("#experience").offset().top
  }, 1300);
});

$(".proj-nav").click(function() {
  $('html, body').animate({
      scrollTop: $("#projects").offset().top
  }, 1300);
});

$(".logo").click(function() {
  $('html, body').animate({
      scrollTop: 0
  }, 1300);
});

//Hand Animation
$(function() {
  $("#hand")
    .on("click", function(){
    $(this).addClass('animate-hand');
  })
    .on("animationend", function(){
    $(this).removeClass('animate-hand');
  });
});

//Mobile Menu
(function () {
  const header = document.querySelector('.mobile-header');
    const icon = document.querySelector('.icon-container');
    icon.onclick = function () {
        header.classList.toggle('menu-open');
    }
}());
(function () {
  const header = document.querySelector('.mobile-header');
    const link = document.querySelector('.menu-list');
    link.onclick = function () {
        header.classList.toggle('menu-open');
    }
}());

