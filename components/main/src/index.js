// // Index JS
import { codeImport } from "./js/import-html.js";
import { elements } from "./js/properties.js";
import { handleNavBar } from "./js/handle-nav-bar.js";

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
};
runScripts();
