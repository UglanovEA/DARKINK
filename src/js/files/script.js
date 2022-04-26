// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

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
};
