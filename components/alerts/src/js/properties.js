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
		name: "Standard Alert",
		rootCodeTabFilePath: "./src/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .standard-alert .rui-import-html",
		elementCodeFilePath: "./src/html/standard-alert.html",
		elementCodeLocation:
			".standard-alert .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".standard-alert .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".standard-alert .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".standard-alert .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=twilight&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%253E%250A%2520%2520%2520%2520%253Ch1%253ESample%2520File%253C%252Fh1%253E%250A%253C%252Fdiv%253E"
    sandbox="allow-scripts allow-same-origin" class="rui-code--iframe">
  </iframe>`,
		elementJSCodeClassPath:
			".standard-alert .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `<iframe
    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=twilight&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%253E%250A%2520%2520%2520%2520%253Ch1%253ESample%2520File%253C%252Fh1%253E%250A%253C%252Fdiv%253E"
    sandbox="allow-scripts allow-same-origin" class="rui-code--iframe">
  </iframe>`,
		sandboxURLClass: ".standard-alert .rui-code-tabs-sandbox--link",
		sandboxURL: "https://codesandbox.io/s/drawers-uq55y?file=/src/index.js",
	},
];

export { elements };
