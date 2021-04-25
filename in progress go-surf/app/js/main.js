let menu_btn = document.querySelector(".menu-btn");
let logo = document.querySelector(".logo");
let header__aside = document.querySelector(".header__aside");
let menu__line = document.querySelectorAll(".menu-btn__line");

menu_btn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (menu_btn.classList.contains("active")) {
    menu_btn.classList.remove("active");
    logo.classList.remove("active");
    header__aside.classList.remove("active");
		for (var i = 0; i < menu__line.length; i++) {
			menu__line[i].classList.remove("active");
		}
  } else {
    menu_btn.classList.add("active");
    logo.classList.add("active");
    header__aside.classList.add("active");
		for (var i = 0; i < menu__line.length; i++) {
			menu__line[i].classList.add("active");
		}
  }
}

var menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  }
)


$(function () {

	$('.header__slider').slick({
		infinite: true,
		speed: 700,
		// fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
		asNavFor: '.slider-dotshead',
	});

	$('.slider-dotshead').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.header__slider'
	});

	$('.surf-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
		asNavFor: '.slider-map'
	});

	$('.slider-map').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.surf-slider',
		focusOnSelect: true
	});

	$('.holder__slider, .shop__slider').slick({
		infinite: true,
		speed: 700,
		// fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
	});


	$('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
	$('.quantity').each(function () {
		var spinner = $(this),
			input = spinner.find('input[type="number"]'),
			btnUp = spinner.find('.quantity-up'),
			btnDown = spinner.find('.quantity-down'),
			min = input.attr('min'),
			max = input.attr('max');

		btnUp.click(function () {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function () {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

	});

	// calc price sleep
	// изначальный просчёт цены по умолчанию
	let summ = ($('.guests').val() * $('.summ').data('nights')) * $('.nights').val();
	$('.summ').html('$ ' + summ + ' USD');

	// изменение цены при клике для каждого слайда
	$('.quantity-button').on('click', function () {
		var parents = $(this).parents('.slick-current');
		let summ = ($('.guests', parents).val() * $('.summ', parents).data('nights')) * $('.nights', parents).val();
		$('.summ', parents).html('$ ' + summ + ' USD');
	});

	$('.surfboard-box__circle').on('click', function(){
		$(this).toggleClass('active')
	});

	// Hamburger v2
// $('.menu-btn').on('click', function(){
// 	$('.menu').toggleClass('active');
// });

// Hamburger v2
// $('.menu-btn').on('click', function(){
// 	$('.header__aside, .logo, .menu-btn__line').toggleClass('active');
// });








});