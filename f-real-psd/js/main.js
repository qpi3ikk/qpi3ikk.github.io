// плаваюче меню
var offset = $('#navbar').offset();
$(window).scroll(function(){
   //$('#mine').text($(document).scrollTop());
  $('#navbar').addClass('fixed-nav');
  if($(document).scrollTop() < 553){
         $('#navbar').removeClass('fixed-nav');
  }
});

// кнопка вверх
$(function() {
 
    $(window).scroll(function() {
     
    if($(this).scrollTop() != 0) {
     
    $('#toTop').fadeIn();
     
    } else {
     
    $('#toTop').fadeOut();
     
    }
     
    });
     
    $('#toTop').click(function() {
     
    $('body,html').animate({scrollTop:0},800);
     
    });
     
});



jQuery(function($){
    // Перший слайдер
    $(document).ready(function(){
        $('.slickslider').slick({
            centerPadding: '60px',
            slidesToShow: 3,
            responsive: [
                {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
                },
                {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
                }
            ]
        });
    });

    // Другий слайдер
    $(document).ready(function(){
        $('.advice-bottom').slick({
            centerPadding: '60px',
            infinite: false,
            slidesToShow: 3,
            responsive: [
                {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
                },
                {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
                }
            ]
        });
    });
    // Попап
    $(document).ready(function() {
        $(".popup").magnificPopup();
    });
});
// Показати-скрити блоки
$(document).ready(function() {
 
    $(".first").click(function() {
        $("#section-b").css({"display":"none"});
        $("#section-a").css({"display":"block"});
        $("#section-g").css({"display":"block"});
    });

    $(".second").click(function() {
        $("#section-a").css({"display":"none"});
        $("#section-b").css({"display":"block"});
        $("#section-g").css({"display":"none"});
    });

    $(".alll").click(function() {
        $("#section-a").css({"display":"block"});
        $("#section-b").css({"display":"block"});
        $("#section-g").css({"display":"block"});
    });
 
});

// Відстеження активного меню
jQuery(window).scroll(function(){
    var $sections = $('section');
$sections.each(function(i,el){
   var top  = $(el).offset().top-100;
   var bottom = top +$(el).height();
   var scroll = $(window).scrollTop();
   var id = $(el).attr('id');
   if( scroll > top && scroll < bottom){
       $('a.active').removeClass('active');
       $('a[href="#'+id+'"]').addClass('active');

   }
})
});
// Плавна перемотка меню

$("nav").on("click","a", function (event) {
   // исключаем стандартную реакцию браузера
   event.preventDefault();

   // получем идентификатор блока из атрибута href
   var id  = $(this).attr('href'),

   // находим высоту, на которой расположен блок
       top = $(id).offset().top;
    
   // анимируем переход к блоку, время: 800 мс
   $('body,html').animate({scrollTop: top}, 800);
});

// Плавна перемотка нарисованої мишки

$(".mouse").on("click","a", function (event) {
    // исключаем стандартную реакцию браузера
    event.preventDefault();
 
    // получем идентификатор блока из атрибута href
    var id  = $(this).attr('href'),
 
    // находим высоту, на которой расположен блок
        top = $(id).offset().top;
     
    // анимируем переход к блоку, время: 800 мс
    $('body,html').animate({scrollTop: top}, 800);
 });