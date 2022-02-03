import { handleCodeTab } from "./code-tabs-root.js";

// Importing HTML Functionn
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

// Build Logic

// This function defines the code inside the tabs
const handleCodeTabContent = (params) => {
	const element_code = document.querySelector(params.elementCodeClassPath);
	element_code.innerHTML = params.elementCodeInnerText;
	const element_JS_code = document.querySelector(params.elementJSCodeClassPath);
	element_JS_code.innerHTML = params.elementJSCodeInnerText;
	handleCodeTab(
		params.handleCodeTabBtnClass,
		params.handleCodeTabCodeContentClass
	);
	const addSandboxURL = document.querySelector(params.sandboxURLClass);
	addSandboxURL.href = params.sandboxURL;
};

// This function is used to import code from code tabs and element
const codeImport = async (params) => {
	// Import root Code Drawer and then add styling
	const importRootCode = await importHtml(
		params.rootCodeTabFilePath,
		params.rootCodeLocation
	);
	const importElementCode = await importHtml(
		params.elementCodeFilePath,
		params.elementCodeLocation
	);
	handleCodeTabContent(params);
};

export { importHtml, codeImport };