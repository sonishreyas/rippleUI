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
		handleNavBar();
	});
}

runScripts();
