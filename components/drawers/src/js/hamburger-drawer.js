/**
 * Handle hamburger drawer responsiveness.
 */
const handleHamburgerDrawer = () => {
	const drawerMenuIcon = document.querySelector(
		".hamburger-drawer .drawer-menu-icon"
	);
	const drawer = document.querySelector(".hamburger-drawer .drawer");
	const drawerContentList = document.querySelector(
		".hamburger-drawer .drawer .drawer-content--list"
	);
	drawerMenuIcon.addEventListener("click", () => {
		if (
			drawerContentList.classList.contains("drawer-menu-icon-inactive") &&
			drawer.classList.contains("drawer-inactive")
		) {
			drawerContentList.classList.remove("drawer-menu-icon-inactive");
			drawer.classList.remove("drawer-inactive");
			drawer.classList.add("drawer-active");
		} else {
			drawerContentList.classList.add("drawer-menu-icon-inactive");
			drawer.classList.remove("drawer-active");
			drawer.classList.add("drawer-inactive");
		}
	});
};
export { handleHamburgerDrawer };
