$(function () {
//hide preloader
$(".preloader").fadeOut();
});

$(function () {
	//animation burger line
	var headerBurger = $(".header__burger"),
		headerMenu = $(".header__nav");

	headerBurger.on("click", function () {
		$(this).toggleClass("open");
		headerMenu.toggleClass("slide");
	});

	//nav drop link
	var dropButton = $(".drop__button"),
		navWrap = $(".header__nav");

	dropButton.on("click", function () {
		var dataDrop = $(this).attr("data-drop");
		$("." + dataDrop).slideToggle(300);

		$(this).toggleClass("rotate");
		// navWrap.toggleClass('overflow');
	});

	//nav bar fixed
	var body = $("html, body");
	var navBar = $(".header__navBar");
	$(window).on("scroll", function () {
		if (body.scrollTop() >= 20) {
			headerMenu.removeClass("slide");
			headerBurger.removeClass("open");
			navBar.addClass("header__navBar_fixed");
		} else {
			navBar.removeClass("header__navBar_fixed");
			headerMenu.removeClass("slide");
			headerBurger.removeClass("open");
		}
	});
});

$(function () {
	//used the parallax effect to the 2nd block
	$(window).bind("scroll", function (e) {
		parallaxScroll();
	});
	//function parallax effect
	function parallaxScroll() {
		var scrolled = $(window).scrollTop();
		var img_1 = $(".salon__image--1");
		var img_2 = $(".salon__image--2");
		if (scrolled <= 700) {
			img_1.css("transform", "translateY(" + (0 - scrolled * 0.05) + "px)");
			img_2.css("transform", "translateY(" + (0 + scrolled * 0.05) + "px)");
		}
	}
});

new Swiper(".ourStaff__team", {
	slidesPerView: 3,
	spaceBetween: 30,
	autoplay: {
		delay: 3000,
		disableOnInteraction: true,
	},
	speed: 800,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		460: {
			slidesPerView: 1.2,
		},
		600: {
			slidesPerView: 1.6,
		},
		725: {
			slidesPerView: 2,
		},
		1000: {
			slidesPerView: 2.5,
		},
		1171: {
			slidesPerView: 3,
		},
	},
});

new Swiper(".gallery__slider", {
	slidesPerView: 3,
	autoplay: {
		delay: 3000,
		disableOnInteraction: true,
	},
	speed: 800,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		460: {
			slidesPerView: 1.2,
		},
		600: {
			slidesPerView: 1.6,
		},
		725: {
			slidesPerView: 2,
		},
		1000: {
			slidesPerView: 2.5,
		},
		1171: {
			slidesPerView: 3,
		},
	},
});

$(function () {
	var form = $(".form__wrap");
	var label = $(".form__label");
	var input = $(".form__input");
	var err = $(".form__error");

	form.on("click", "label", function () {
		$(this).addClass("form__label_active");
	});
	input.on("blur", function () {
		var attr = $(this).attr("data-err");
		if (!$(this).val()) {
			$(this).css("border", "1px solid #f13f3f");
			err.eq(attr).css("display", "block");
		} else {
			$(this).css("border", "1px solid #a1a1a1");
			err.eq(attr).css("display", "none");
		}
		for (var i = 0; i < input.length; i++) {
			if (!input.eq(i).val()) {
				label.eq(i).removeClass("form__label_active");
			}
		}
	});
});

$(function () {
	var html = $("html");
	var btnUp = $(".scrollTop");
	var whatWeDoImg = $(".whatWeDo__img");
	var whatWeDoTitle = $(".whatWeDo__title");
	var callbackImg = $(".callback__img");
	var callbackTitle = $(".callback__title");

	$(window).on("scroll", function () {
		//show buttonUp
		if (html.scrollTop() > 500) {
			btnUp.fadeIn();
		} else {
			btnUp.fadeOut();
		}

		//show img block
		if (html.scrollTop() >= whatWeDoTitle.offset().top - 500 && $(window).width() > 1024) {
			whatWeDoImg.fadeIn(1000);
		}
		if (html.scrollTop() >= callbackTitle.offset().top - 500 && $(window).width() > 1024) {
			callbackImg.fadeIn(1000);
		}
	});

	btnUp.on("click", function () {
		html.animate(
			{
				scrollTop: 0,
			},
			500
		);
	});
});
