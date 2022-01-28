import { handleCodeTab } from "./code-tabs-root";

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
			data = data.split(splitOne)[1].split(splitTwo)[0];
			document.querySelector(classPath).innerHTML += data;
		});
};

// Build Logic

const codeImport = async (
	params,
	rootCodeTabFilePath = "../src/html/code-tabs-root.html"
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
			element_JS_code.innerText = params.elementJSCodeInnerText;

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
