// Webp converter
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}
	else{
		document.querySelector('body').classList.add('no-webp');
	}
});
// /Webp converter
// ==========================================================================

$(document).ready(function() {
	// Burger menu
	$('.burger-menu').click(function(event) {
		$('.icon-menu,.menu__body').toggleClass('_active');
		$('body').toggleClass('_lock');
	});
	// /Burger menu

	// ==========================================================================
	// Scroll to section
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset;
		if(blockId == "#header"){
			blockOffset = 0;
		}
		else {
			blockOffset = $(blockId).offset().top;
		}

		$(".menu a").removeClass("_active");
		$this.addClass("_active");

		if($("#nav").hasClass("_active")) {
			$("#nav_toggle").toggleClass("_active");
			$("#nav").toggleClass("_active");
		}

		$('body').removeClass("_lock");

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
	});
	// /Scroll to section.

	// ==========================================================================
	// Slider
//	$('.products__content').slick({
// 		adaptiveHeight: true,
// 		speed: 700,
// 		easing: 'ease',
// 		infinite: false,
// 		slidesToShow: 2,
// 		rows: 2,
// 		appendArrows: $('#products__container'),
// 		responsive: [
// 	        {
// 	          breakpoint: 768,
// 	          settings: {
// 	            rows: 1,
// 	            slidesToShow: 1.3
// 	          }
// 	        },
// 	        {
// 	          breakpoint: 480,
// 	          settings: {
// 	          	rows: 1,
// 	            slidesToShow: 1
// 	          }
// 	        },
// 	      ]

// 	});
// 	$('.quotes__content').slick({
// 		arrows: false,
// 		dots: true,
// 		adaptiveHeight: true,
// 		variableWidth: true,
// 		slidesToShow: 1.5,
// 		infinite: false,
// 		speed: 700,
// 		easing: 'ease',
// 	});
// });
	// /Slider
	
	// ==========================================================================
	// Fixed Header 
	var intro = $("#intro"),
		header = $("#header"),
		page = $(".page"),
		introH = intro.innerHeight(),
		scrollOffset = $(window).scrollTop();


	$(window).on("scroll", function(){
		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);
	});

	$(window).resize(function(){
		introH = intro.innerHeight()
		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);
	});

	function checkScroll (scrollOffset) {
		if (scrollOffset >= introH) {
			header.addClass("fixed");	
			page.addClass("header-fixed");	
		}
		else {
			header.removeClass("fixed");
			page.removeClass("header-fixed");
		}
	}


	checkScroll(scrollOffset);
	// /Fixed Header 

});

// Responsive
// $(window).resize(function(event) {
// 	adaptive_function();
// });

// function adaptive_header (w, h) {
// 	var headerMenu = $('.header-menu');
// 	var headerLang = $('.header-top-lang');
// 	if(w<767) {
// 		if(!headerLang.hasClass('done')){
// 			headerLang.addClass('done').appendTo(headerMenu);
// 		}
// 	}
// 	else {
// 		if(headerLang.hasClass('done')){
// 			headerLang.removeClass('done').prependTo($('.header-top'));
// 		}
// 	}
// 	if(w<767) {
// 		if(!$('.header-bottom__menu').hasClass('done')){
// 			$('.header-bottom__menu').addClass('done').appendTo(headerMenu);
// 		}
// 	}
// 	else {
// 		$.each($('.header-bottom__menu'), function(index, val) {
// 			if($(this).hasClass('header-bottom__menu--right')){
// 				if($(this).hasClass('done')){
// 					$(this).removeClass('done').prependTo($('.header-bottom__column').eq(2));
// 				}
// 			}
// 			else {
// 				if($(this).hasClass('done')){
// 					$(this).removeClass('done').prependTo($('.header-bottom__column').eq(0));
// 				}
// 			}
// 		});
// 	}
// }

// function adaptive_function () {
// 	var w=$(window).outerWidth();
// 	var h=$(window).outerHeight();
// 	adaptive_header(w, h);
// }

// adaptive_function();
// /Responsive
// ==========================================================================
// Tabs
// const tabsBtn = document.querySelectorAll(".tabs__item");
// const tabsItems = document.querySelectorAll(".giftset__item")

// tabsBtn.forEach(function(item) {
// 	onTabClick(item);
// });

// function onTabClick (item) {
// 	item.addEventListener("click", function() {
// 		event.preventDefault();
// 		let currentBtn = item;
// 		let tabId = currentBtn.getAttribute("href");
// 		let currentTab = document.querySelector(tabId);

// 		if(!currentBtn.classList.contains('_active')) {
// 			tabsBtn.forEach(function(item) {
// 				item.classList.remove('_active');
// 			});

// 			tabsItems.forEach(function(item) {
// 				item.classList.remove('_active');
// 			});

// 			currentBtn.classList.add('_active');
// 			currentTab.classList.add('_active');
// 		}
// 	});
// }

// document.querySelector('.tabs__item:nth-child(1)').click();
// /Tabs
// ==========================================================================
