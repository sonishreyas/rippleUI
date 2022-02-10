const handleHamburgerDrawer = () => {
	const drawer_menu_icon = document.querySelector(
		".hamburger-drawer .drawer-menu-icon"
	);
	const drawer = document.querySelector(".hamburger-drawer .drawer");
	const drawer_content_list = document.querySelector(
		".hamburger-drawer .drawer .drawer-content--list"
	);
	drawer_menu_icon.addEventListener("click", () => {
		if (
			drawer_content_list.classList.contains("drawer-menu-icon-inactive") &&
			drawer.classList.contains("drawer-inactive")
		) {
			drawer_content_list.classList.remove("drawer-menu-icon-inactive");
			drawer.classList.remove("drawer-inactive");
			drawer.classList.add("drawer-active");
		} else {
			drawer_content_list.classList.add("drawer-menu-icon-inactive");
			drawer.classList.remove("drawer-active");
			drawer.classList.add("drawer-inactive");
		}
	});
};
export { handleHamburgerDrawer };
