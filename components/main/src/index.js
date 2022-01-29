// // Index JS
import { codeImport } from "./js/import-html.js";
import { elements } from "./js/properties.js";
import { handleNavBar } from "./js/handle-nav-bar.js";

// Call Function
async function callImportFunctions() {
	for (let i = 0; i < elements.length; i++) {
		await codeImport(elements[i]);
	}
	return true;
}

function runScripts() {
	callImportFunctions().then((response) => {
		if (window.matchMedia("(min-width: 1180px)")) handleNavBar();
		else {
			const brandName = document.querySelector(".header .brand-info");
			const navBar = document.querySelector(".nav");
			const drawerHeader = document.querySelector(".nav .rui-drawer-header");
			navBar.style.visibility = "visible";
			brandName.style.visibility = "visible";
			drawerHeader.style.visibility = "hidden";
		}
	});
}

runScripts();
