// Навбар
(function SVGMenuAnimate() {
    function SVGMenu( el, options ) {
        this.el = el;
        this.init();
    }
    SVGMenu.prototype.init = function() {
        this.trigger = this.el.querySelector( 'button.menu__handle' );
        this.shapeEl = this.el.querySelector( 'div.morph-shape' );

        var s = Snap( this.shapeEl.querySelector( 'svg' ) );
        this.pathEl = s.select( 'path' );
        this.paths = {
            reset : this.pathEl.attr( 'd' ),
            open : this.shapeEl.getAttribute( 'data-morph-open' ),
            close : this.shapeEl.getAttribute( 'data-morph-close' )
        };
        this.isOpen = false;
        this.initEvents();
    };
    SVGMenu.prototype.initEvents = function() {
        this.trigger.addEventListener( 'click', this.toggle.bind(this) );
    };
    SVGMenu.prototype.toggle = function() {
        var self = this;
        if( this.isOpen ) {
            classie.remove( self.el, 'menu--anim' );
            setTimeout( function() { classie.remove( self.el, 'menu--open' );	}, 250 );
        }
        else {
            classie.add( self.el, 'menu--anim' );
            setTimeout( function() { classie.add( self.el, 'menu--open' );	}, 250 );
        }
        this.pathEl.stop().animate( { 'path' : this.isOpen ? this.paths.close : this.paths.open }, 350, mina.easeout, function() {
            self.pathEl.stop().animate( { 'path' : self.paths.reset }, 800, mina.elastic );
        } );
        this.isOpen = !this.isOpen;
    };
    new SVGMenu( document.getElementById( 'menu' ) );

    
    $(document).ready(function() {
        $('.menu__handle').click(function() {
            $('section').toggleClass('box');
        });

        $('#menu ul li a').click(function() {
            $('#menu').removeClass('menu--anim');
            $('#menu').removeClass('menu--open');
            $('section').removeClass('box');
            
            new SVGMenu( document.getElementById( 'menu' ) );
        });
    
        $(document).mouseup(function (e){ // событие клика по веб-документу
            var div = $("#menu ul li"); // тут указываем ID элемента
            var divv = $(".menu__handle"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0 && !divv.is(e.target)) {  // и не по его дочерним элементам + ещо один елемент
                    $('#menu').removeClass('menu--anim');
                    $('#menu').removeClass('menu--open');
                    $('section').removeClass('box'); // скрываем его\
    
                    new SVGMenu( document.getElementById( 'menu' ) );
            }
        });
    });
    
})();

$(document).ready(function() {
    // Плавна перемотка меню
    $("nav").on("click","a", function (event) {
        event.preventDefault();// исключаем стандартную реакцию браузера
        var id  = $(this).attr('href'),// получем идентификатор блока из атрибута href
            top = $(id).offset().top;// находим высоту, на которой расположен блок
        $('body,html').animate({scrollTop: top}, 800);// анимируем переход к блоку, время: 800 мс
     });


    // Попап
	$('.ajax-popup').magnificPopup({
		type: 'ajax',
		// alignTop: true,
		// overflowY: 'scroll'
    });


    // Форма О.С
    $("#phone").mask("+38(099)999-99-99");
    $("#done").click(function(){
        $("#massageShow").hide();
        var name = $("#name").val();
        var phone = $("#phone").val();
        var email = $("#email").val();
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var fail = "";
        if (name.length < 3) 
            fail = "**Ім'я повинно бути не коротше 3-х символів";
        if (phone.length < 17) 
            fail = "**Будь-ласка, перевірте номер телефону";
        else if (reg.test(email) == false) 
            fail = "**Некорректна eMail-адреса";

        if (fail != "") {
            $("#massageShow").html (fail + "<div class='clear'><br></div>");
            $("#massageShow").show();
            return false;
        }
        $("#form").submit(function() {
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: $(this).serialize()
            }).done(function() {
                $(this).find("input").val("");
                $("#form").trigger("reset");
            });
            alert("Дякуємо за заявку, ми зв'яжемося з вами найблищим часом");
            return false;
        });
    });
});




//Дата футер
var date = new Date();
var year = date.getFullYear();
document.getElementById("year").innerHTML = year;
// ----------->


// Anti-inspector
// document.oncontextmenu = function() { 
//     return false; 
// }; 
// document.onkeydown = function(e) { 
//     if (e.keyCode == 123) { 
//         return false; 
//     } 
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { 
//         return false; 
//     } 
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { 
//         return false; 
//     } 
//     if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { 
//         return false; 
//     } 
  
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { 
//         return false; 
//     } 
// }