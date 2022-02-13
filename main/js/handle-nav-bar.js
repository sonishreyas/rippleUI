const handleNavBar = () => {
	const hamburgerIcon = document.querySelector(".header .header-nav-icon");
	const closeIcon = document.querySelector(
		".nav .rui-drawer-header .close-drawer"
	);
	const brandName = document.querySelector(".header .brand-info");
	const navBar = document.querySelector(".nav");
	const drawerHeader = document.querySelector(".nav .rui-drawer-header");
	hamburgerIcon.addEventListener("click", () => {
		drawerHeader.style.visibility = "visible";
		navBar.style.visibility = "visible";
		brandName.style.visibility = "hidden";
	});
	closeIcon.addEventListener("click", () => {
		drawerHeader.style.visibility = "hidden";
		navBar.style.visibility = "hidden";
		brandName.style.visibility = "visible";
	});
	window.addEventListener("resize", function () {
		if (window.innerWidth >= 1180) {
			navBar.style.visibility = "visible";
			brandName.style.visibility = "visible";
			if (drawerHeader.classList.contains("display-inactive") === false) {
				drawerHeader.classList.add("display-inactive");
			}
		} else {
			if (drawerHeader.classList.contains("display-inactive")) {
				drawerHeader.classList.remove("display-inactive");
			}
			navBar.style.visibility = "hidden";
			drawerHeader.style.visibility = "hidden";
			brandName.style.visibility = "visible";
		}
	});

	if (window.innerWidth < 1180) {
		if (drawerHeader.classList.contains("display-inactive")) {
			drawerHeader.classList.remove("display-inactive");
		}
	}
};

export { handleNavBar };
