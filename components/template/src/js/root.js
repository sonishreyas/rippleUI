const themeIcon = document.querySelector(".theme-icon");
themeIcon.addEventListener("click", () => {
	document.body.classList.toggle("light-theme");
	if (document.body.classList.contains("light-theme")) {
		console.log("here", themeIcon.classList);
		if (themeIcon.classList.contains("fa-sun")) {
			themeIcon.classList.remove("fa-sun");
			themeIcon.classList.add("fa-moon");
		}
	} else {
		if (themeIcon.classList.contains("fa-moon")) {
			themeIcon.classList.remove("fa-moon");
			themeIcon.classList.add("fa-sun");
		}
	}
});
