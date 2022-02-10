// // Index JS
import { codeImport } from "../../../../main/js/import-html.js";
import { handleNavBar } from "../../../../main/js/handle-nav-bar.js";
import { elements } from "./properties.js";
import { handleHamburgerDrawer } from "./hamburger-drawer.js";

// Call Function
const callImportFunctions = async () => {
	for (let i = 0; i < elements.length; i++) {
		await codeImport(elements[i]);
	}
};

// runs all the js files
const runScripts = async () => {
	const importCode = await callImportFunctions();
	handleNavBar();
	handleHamburgerDrawer();
};
runScripts();
