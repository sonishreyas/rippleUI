// Index JS
import { codeImport } from "../../../../main/js/import-html.js";
import { handleNavBar } from "../../../../main/js/handle-nav-bar.js";
import { elements } from "./properties.js";
import { handleBasicChips } from "./basic-chips.js";
import { handleInputChips } from "./input-chips.js";
import { handleInputChipsWithIcon } from "./input-chips-with-icon.js";

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
	const importCode = await callImportFunctions();
	handleNavBar();
	handleBasicChips();
	handleInputChips();
	handleInputChipsWithIcon();
};
runScripts();
