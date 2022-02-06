// // Index JS
import { codeImport } from "../../../../main/js/import-html.js";
import { handleNavBar } from "../../../../main/js/handle-nav-bar.js";
import { elements } from "./properties.js";
import { handleTabs } from "./tabs.js";
import { handleInput } from "./textbox.js";

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
	handleTabs("horizontal", "horizontal");
	handleTabs("vertical", "vertical");
	handleTabs("authentication", "horizontal");
	handleInput();
};
runScripts();
