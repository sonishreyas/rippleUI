// // Index JS
import { codeImport } from "../../../../main/js/import-html.js";
import { handleNavBar } from "../../../../main/js/handle-nav-bar.js";
import { components } from "./properties.js";

/**
 * Calling codeImport for all components
 */
const callImportFunctions = async () => {
	components.map(async (component) => await codeImport(component));
};

// runs all the js files
const runScripts = async () => {
	const importCode = await callImportFunctions();
	handleNavBar();
};
runScripts();
