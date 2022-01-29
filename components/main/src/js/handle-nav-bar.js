const handleNavBar = () => {
	const hamburgerIcon = document.querySelector(".header .header-nav-icon");
	const closeIcon = document.querySelector(
		".nav .rui-drawer-header .close-drawer"
	);
	const brandName = document.querySelector(".header .brand-info");
	const navBar = document.querySelector(".nav");
	hamburgerIcon.addEventListener("click", () => {
		console.log("hamburger");
		navBar.style.visibility = "visible";
		brandName.style.visibility = "hidden";
		console.log(navBar);
	});
	closeIcon.addEventListener("click", () => {
		navBar.style.visibility = "hidden";
		brandName.style.visibility = "visible";
	});
};

export { handleNavBar };
