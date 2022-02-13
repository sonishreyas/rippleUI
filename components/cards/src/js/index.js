// Index JS
import { codeImport } from "../../../../main/js/import-html.js";
import { handleNavBar } from "../../../../main/js/handle-nav-bar.js";
import { elements } from "./properties.js";
import { handleDismissCard } from "./dismiss-cards.js";

/**
 * Calling codeImport for all components
 */
const callImportFunctions = async () => {
	for (let i = 0; i < elements.length; i++) {
		await codeImport(elements[i]);
	}
};

/**
 * Run all scripts on the page
 */
const runScripts = async () => {
	await callImportFunctions();
	handleNavBar();
	handleDismissCard();
};
runScripts();
