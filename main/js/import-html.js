import { handleCodeTab } from "./code-tabs-root.js";

/**
 * Import HTML code into the specified classpath
 * @param {String} htmlPath Path of HTML code that we want to import
 * @param {String} classPath Classpath where we need to import the HTML code
 * @param {String} splitOne This handles an edge case incase the fetch api returns data in other format
 * @param {String} splitTwo This handles an edge case incase the fetch api returns data in other format
 */
const importHtml = async (
	htmlPath,
	classPath,
	splitOne = "<body>",
	splitTwo = "<script"
) => {
	await fetch(htmlPath)
		.then((response) => response.text())
		.then((data) => {
			if (data.includes(splitOne) && data.includes(splitTwo))
				data = data.split(splitOne)[1].split(splitTwo)[0];
			document.querySelector(classPath).innerHTML += data;
		});
};

/**
 * Defines the content in the code tabs
 * @param {Array of Objects} classnameDictionary Properties of the element to import
 */
const handleCodeTabContent = (classnameDictionary) => {
	const elementCode = document.querySelector(
		classnameDictionary.elementCodeClassPath
	);
	elementCode.innerHTML = classnameDictionary.elementCodeInnerText;
	const elementJSCode = document.querySelector(
		classnameDictionary.elementJSCodeClassPath
	);
	if (classnameDictionary.elementJSCodeInnerText === `NA`) {
		const elementJSCodeBtn = document.querySelector(
			classnameDictionary.elementJSCodeBtnClassPath
		);
		elementJSCodeBtn.style.display = "none";
	} else {
		elementJSCode.innerHTML = classnameDictionary.elementJSCodeInnerText;
	}
	handleCodeTab(
		classnameDictionary.handleCodeTabBtnClass,
		classnameDictionary.handleCodeTabCodeContentClass
	);
	const addSandboxURL = document.querySelector(
		classnameDictionary.sandboxURLClass
	);
	addSandboxURL.href = classnameDictionary.sandboxURL;
};

// This function is used to import code from code tabs and element
/**
 * Import code tabs HTML code into the page and then import the element code into the code tabs code
 * @param {Array of Objects} classnameDictionary Properties of the element to import
 */
const codeImport = async (classnameDictionary) => {
	// Import root Code Drawer and then add styling
	const importRootCode = await importHtml(
		classnameDictionary.rootCodeTabFilePath,
		classnameDictionary.rootCodeLocation
	);
	const importElementCode = await importHtml(
		classnameDictionary.elementCodeFilePath,
		classnameDictionary.elementCodeLocation
	);
	handleCodeTabContent(classnameDictionary);
};

export { importHtml, codeImport };
