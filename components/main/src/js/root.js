const themeIcon = document.querySelector(".theme-icon");
const rippleLogo = document.querySelectorAll(".brand-logo");
const getCurrentTheme = () => {
	let theme = window.matchMedia("(prefers-color-scheme): light").matches
		? "light"
		: "dark";
	localStorage.getItem("ripple.theme")
		? (theme = localStorage.getItem("ripple.theme"))
		: null;
	return theme;
};

const loadTheme = (theme) => {
	const root = document.querySelector(":root");
	if (theme === "light") {
		themeIcon.classList.remove("fa-sun");
		themeIcon.classList.add("fa-moon");
		rippleLogo.forEach((item) => {
			item.src = "../../components/media/images/ripple-logo-light.png";
		});
	} else {
		themeIcon.classList.remove("fa-moon");
		themeIcon.classList.add("fa-sun");
		rippleLogo.forEach((item) => {
			item.src = "../../components/media/images/ripple-logo-dark.png";
		});
	}
	root.setAttribute("color-scheme", `${theme}`);
};

themeIcon.addEventListener("click", () => {
	let theme = getCurrentTheme();
	if (theme === "dark") {
		theme = "light";
	} else {
		theme = "dark";
	}
	localStorage.setItem("ripple.theme", `${theme}`);
	loadTheme(theme);
});
window.addEventListener("DOMContentLoaded", () => {
	loadTheme(getCurrentTheme());
});
