/**
 * rootCodeLocation: Where we need to import code for code tabs.
 * elementCodeFilePath: The File Path for the component html file we need to import.
 * elementCodeLocation: The location where we need to import the code for the component.
 * handleCodeTabBtnClass: The classPath for the code tabs to call the handleCodeTab function which allows us to use the tabs.
 * handleCodeTabCodeContentClass: Here we add content classpath
 * elementCodeClassPath: This is the location where we store the HTML code.
 * elementCodeInnerText: Here we add HTML code
 * elementJSCodeClassPath: Here we add the classpath for JS code.
 * elementJSCodeInnerText: Here we add the JS code.
 * sandboxURLClass: Here we add the classPath for sandboxURL.
 * sandboxURL: Here we add  the sandbox URL
 */

const elements = [
	{
		name: "Two Column Grids",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .two-column-grids .rui-import-html",
		elementCodeFilePath: "./src/html/two-column-grids.html",
		elementCodeLocation:
			".two-column-grids .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".two-column-grids .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".two-column-grids .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".two-column-grids .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%281%2C22%2C39%2C1%29&t=night-owl&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=36px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Carticle%2520class%253D%2522cart-container%2520grid-2-column%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522cart-content%2520flex-jc%2522%253E%2520%2520%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522cart-billing%2520flex-jc%2522%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Farticle%253E"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
		  </iframe>`,
		elementJSCodeBtnClassPath:
			".two-column-grids .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".two-column-grids .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".two-column-grids .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/cart-management-m85is?file=/src/styles.css:0-3281",
	},
];

export { elements };
