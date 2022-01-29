import { handleCodeTab } from "./code-tabs-root.js";

// Importing HTML Functionn
const importHtml = async (
	htmlPath,
	classPath,
	splitOne = "<body>",
	splitTwo = "<script"
) => {
	return fetch(htmlPath)
		.then((response) => response.text())
		.then((data) => {
			if (data.includes(splitOne) && data.includes(splitTwo))
				data = data.split(splitOne)[1].split(splitTwo)[0];
			document.querySelector(classPath).innerHTML += data;
		});
};

// Build Logic

const codeImport = async (
	params,
	rootCodeTabFilePath = "../template/src/html/code-tabs-root.html"
) => {
	// Import root Code Drawer and then add styling
	return importHtml(rootCodeTabFilePath, params.rootCodeLocation).then(() => {
		return importHtml(
			params.elementCodeFilePath,
			params.elementCodeLocation
		).then(() => {
			const element_code = document.querySelector(params.elementCodeClassPath);
			element_code.innerHTML = params.elementCodeInnerText;

			const element_JS_code = document.querySelector(
				params.elementJSCodeClassPath
			);
			console.log(element_JS_code);
			element_JS_code.innerHTML = params.elementJSCodeInnerText;

			handleCodeTab(
				params.handleCodeTabBtnClass,
				params.handleCodeTabCodeContentClass
			);

			const addSandboxURL = document.querySelector(params.sandboxURLClass);
			addSandboxURL.href = params.sandboxURL;
		});
	});
};

export { importHtml, codeImport };
