// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import { ScrollReveal } from "../libs/scrollreveal.min.js";

window.onload = function () {
	/*=============== FIXED HEADER ===============*/
	const headerElement = document.querySelector(".header");
	const callback = function (entries, observer) {
		if (entries[0].isIntersecting) {
			headerElement.classList.remove("_scroll");
		} else {
			headerElement.classList.add("_scroll");
		}
	};
	const headerObserver = new IntersectionObserver(callback);
	headerObserver.observe(headerElement);

	/*=============== SHOW SCROLL UP ===============*/
	function scrollUp() {
		// Button
		const scrollUp = document.querySelector(".scrollTop");
		if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
		else scrollUp.classList.remove("show-scroll");

		// Parallax
		const img1 = document.querySelector("#img1");
		const img2 = document.querySelector("#img2");
		let value = window.scrollY;
		img1.style.transform = "translateY(-0" + value * 0.05 + "px)";
		img2.style.transform = "translateY(0" + value * 0.05 + "px)";
	}
	window.addEventListener("scroll", scrollUp);

	/*=============== SCROLL REVEAL ANIMATION ===============*/
	const item = ScrollReveal({
		origin: "top",
		distance: "40px",
		duration: 1500,
		delay: 2000,
		// mobile: false,
	});
	item.reveal(`.header__logo`);
	item.reveal(`.menu__icon`, { delay: 2100 });

	const bg = ScrollReveal({
		origin: "right",
		distance: "100%",
		duration: 1500,
		delay: 300,
	});
	bg.reveal(`.main`);
	bg.reveal(`.main__img`, { delay: 500 });

	const text = ScrollReveal({
		origin: "left",
		distance: "100%",
		duration: 2500,
		delay: 600,
	});
	text.reveal(`.main__title`);
	text.reveal(`.main__subtitle`, { delay: 500 });
	text.reveal(`.main__description`, { delay: 400 });
	text.reveal(`.main__link`, { distance: "0", delay: 2300, opacity: 0 });
	text.reveal(`.main__contacts`, { distance: "0", delay: 2400, opacity: 0, interval: 400 });

	const about = ScrollReveal({
		origin: "right",
		distance: "100%",
		duration: 2500,
		delay: 900,
	});
	about.reveal(`.about__sign, .about__subtitle`, { delay: 1500, opacity: 0, distance: "0" });
	about.reveal(`.about__images`, { delay: 1000, opacity: 0, distance: "0" });
	about.reveal(`.about__title`, { delay: 700 });
	about.reveal(`.about__text`, { delay: 500 });
	about.reveal(`.about__text-grey`, { delay: 300 });
	about.reveal(`.about__content`, { delay: 100 });

	const work = ScrollReveal({
		origin: "left",
		distance: "100%",
		duration: 2500,
		delay: 500,
	});
	work.reveal(`.works__title, .staff__title, .testimonials__title, .gallery__title`);
	work.reveal(`.works__item`, { origin: "bottom", delay: 800 });
	work.reveal(`.staff__link`, { origin: "right", delay: 800 });
	work.reveal(`._before`, { delay: 100, distance: "0", opacity: 0 });
	work.reveal(`.works__image`, { delay: 1500, distance: "0", opacity: 0 });

	const slide = ScrollReveal({
		origin: "bottom",
		distance: "40px",
		duration: 2500,
		delay: 200,
	});
	slide.reveal(`.staff__body, .gallery__body`);

	const opacity = ScrollReveal({
		opacity: 0,
		distance: "0",
	});
	opacity.reveal(`.item-testimonial__icon, .callback__img`, { delay: 800 });
	opacity.reveal(`.item-testimonial__text`, { delay: 500 });
	opacity.reveal(`.testimonials__item`, { delay: 200 });
};
