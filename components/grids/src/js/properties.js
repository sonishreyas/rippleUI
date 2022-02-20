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
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=30px&ph=32px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Carticle%2520class%253D%2522cart-container%2520grid-2-column%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522cart-content%2520flex-column%2520align-center%2520justify-content-center%2522%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522cart-billing%2520flex-column%2520align-start%2522%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Farticle%253E"
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
	{
		name: "Three Rows Grid",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .three-rows-grid .rui-import-html",
		elementCodeFilePath: "./src/html/three-rows-grid.html",
		elementCodeLocation:
			".three-rows-grid .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".three-rows-grid .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".three-rows-grid .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".three-rows-grid .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=30px&ph=32px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Carticle%2520class%253D%2522grid-3-rows%2520w-100%2520h-auto%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522header-row%2520p-10%2520m-5%2520background-cta-color%2520text-center%2522%253EHeader%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522nav-row%2520p-10%2520m-5%2520background-cta-color%2520text-center%2522%253ENav%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522main-row%2520p-10%2520m-5%2520background-cta-color%2520text-center%2522%253EMain%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522footer-row%2520p-10%2520m-5%2520background-cta-color%2520text-center%2522%253EFooter%253C%252Fdiv%253E%250A%253C%252Farticle%253E"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
		  </iframe>`,
		elementJSCodeBtnClassPath:
			".three-rows-grid .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".three-rows-grid .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".three-rows-grid .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/cart-management-m85is?file=/src/styles.css:0-3281",
	},
];

export { elements };
