const handleNavBar = () => {
	const hamburgerIcon = document.querySelector(".header .header-nav-icon");
	const closeIcon = document.querySelector(
		".nav .rui-drawer-header .close-drawer"
	);
	const brandName = document.querySelector(".header .brand-info");
	const navBar = document.querySelector(".nav");
	const drawerHeader = document.querySelector(".nav .rui-drawer-header");
	hamburgerIcon.addEventListener("click", () => {
		// drawerHeader.style.visibility = "visible";
		// navBar.style.visibility = "visible";
		// brandName.style.visibility = "hidden";
		if (drawerHeader.classList.contains("inactive"))
			drawerHeader.classList.remove("inactive");
		if (navBar.classList.contains("inactive"))
			navBar.classList.remove("inactive");
		if (brandName.classList.contains("inactive") === false)
			brandName.classList.add("inactive");
	});
	closeIcon.addEventListener("click", () => {
		// drawerHeader.style.visibility = "hidden";
		// navBar.style.visibility = "hidden";
		// brandName.style.visibility = "visible";
		if (drawerHeader.classList.contains("inactive") === false)
			drawerHeader.classList.add("inactive");
		if (navBar.classList.contains("inactive") === false)
			navBar.classList.add("inactive");
		if (brandName.classList.contains("inactive"))
			brandName.classList.remove("inactive");
	});
};

export { handleNavBar };
