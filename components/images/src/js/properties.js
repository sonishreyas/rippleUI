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
		name: "Responsive Image",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .responsive-image .rui-import-html",
		elementCodeFilePath: "./src/html/responsive-image.html",
		elementCodeLocation:
			".responsive-image .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".responsive-image .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".responsive-image .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".responsive-image .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522image-container%2520w-100%2520h-auto%2522%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fraw.githubusercontent.com%252F%250A%2509%2509sonishreyas%252FrippleUI%252F%250A%2509%2509dev%252Fcomponents%252Fmedia%252F%250A%2509%2509images%252Fresponsive-image.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522Hollywood%2520Hills%2520Image%2522%2520%250Aclass%253D%2522responsive-image%2520w-100%2520h-auto%2522%2520%252F%253E%250A%253C%252Fdiv%253E"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeBtnClassPath:
			".responsive-image .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".responsive-image .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".responsive-image .rui-code-tabs-sandbox--link",
		sandboxURL: "https://codesandbox.io/s/images-vzhjf",
	},
	{
		name: "Round Image",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .round-image .rui-import-html",
		elementCodeFilePath: "./src/html/round-image.html",
		elementCodeLocation:
			".round-image .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".round-image .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".round-image .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".round-image .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522image-container%2522%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fraw.githubusercontent.com%252F%250A%2509%2509sonishreyas%252FrippleUI%252F%250A%2509%2509dev%252Fcomponents%252Fmedia%252F%250A%2509%2509images%252Fresponsive-image.jpg%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522Hollywood%2520Hills%2520Image%2522%2520%250Aclass%253D%2522round-image%2520b-radius-circle%2522%2520%252F%253E%250A%253C%252Fdiv%253E"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeBtnClassPath:
			".round-image .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".round-image .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".round-image .rui-code-tabs-sandbox--link",
		sandboxURL: "https://codesandbox.io/s/images-vzhjf",
	},
];

export { elements };
