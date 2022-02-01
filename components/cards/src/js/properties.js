/*
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
		name: "Vertical Cards",
		elementClassName: ".vertical-cards",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .vertical-cards .rui-import-html",
		elementCodeFilePath: "./src/html/vertical-cards.html",
		elementCodeLocation:
			".vertical-cards .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".vertical-cards .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".vertical-cards .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".vertical-cards .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
		src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522avatar-container%2522%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522avatar%2520avatar-text%2520xl%2522%253ESS%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522avatar%2520avatar-text%2520l%2522%253ESS%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522avatar%2520avatar-text%2520m%2522%253ESS%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522avatar%2520avatar-text%2520s%2522%253ESS%253C%252Fp%253E%250A%253C%252Fdiv%253E"
		style="width: 400px; height: 187px;" class="rui-code--iframe"
		sandbox="allow-scripts allow-same-origin">
	  </iframe>`,
		elementJSCodeClassPath:
			".vertical-cards .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".vertical-cards .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/cards-final-rhlov?file=/src/styles.css:679-5951",
	},
	{
		name: "Text Overlay Cards",
		elementClassName: ".text-overlay-cards",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .text-overlay-cards .rui-import-html",
		elementCodeFilePath: "./src/html/text-overlay-cards.html",
		elementCodeLocation:
			".text-overlay-cards .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".text-overlay-cards .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".text-overlay-cards .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".text-overlay-cards .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
		src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522avatar-container%2522%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522avatar%2520avatar-text%2520xl%2522%253ESS%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522avatar%2520avatar-text%2520l%2522%253ESS%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522avatar%2520avatar-text%2520m%2522%253ESS%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522avatar%2520avatar-text%2520s%2522%253ESS%253C%252Fp%253E%250A%253C%252Fdiv%253E"
		style="width: 400px; height: 187px;" class="rui-code--iframe"
		sandbox="allow-scripts allow-same-origin">
	  </iframe>`,
		elementJSCodeClassPath:
			".text-overlay-cards .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".text-overlay-cards .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/cards-final-rhlov?file=/src/styles.css:679-5951",
	},
	{
		name: "Cards with dismiss",
		elementClassName: ".dismiss-cards",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .dismiss-cards .rui-import-html",
		elementCodeFilePath: "./src/html/dismiss-cards.html",
		elementCodeLocation:
			".dismiss-cards .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".dismiss-cards .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".dismiss-cards .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".dismiss-cards .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
		src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522avatar-container%2522%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522avatar%2520avatar-text%2520xl%2522%253ESS%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522avatar%2520avatar-text%2520l%2522%253ESS%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522avatar%2520avatar-text%2520m%2522%253ESS%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522avatar%2520avatar-text%2520s%2522%253ESS%253C%252Fp%253E%250A%253C%252Fdiv%253E"
		style="width: 400px; height: 187px;" class="rui-code--iframe"
		sandbox="allow-scripts allow-same-origin">
	  </iframe>`,
		elementJSCodeClassPath:
			".dismiss-cards .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".dismiss-cards .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/cards-final-rhlov?file=/src/styles.css:679-5951",
	},
	{
		name: "Horizontal Cards",
		elementClassName: ".horizontal-cards",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .horizontal-cards .rui-import-html",
		elementCodeFilePath: "./src/html/horizontal-cards.html",
		elementCodeLocation:
			".horizontal-cards .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".horizontal-cards .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".horizontal-cards .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".horizontal-cards .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
		src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522avatar-container%2522%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522avatar%2520avatar-text%2520xl%2522%253ESS%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522avatar%2520avatar-text%2520l%2522%253ESS%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522avatar%2520avatar-text%2520m%2522%253ESS%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522avatar%2520avatar-text%2520s%2522%253ESS%253C%252Fp%253E%250A%253C%252Fdiv%253E"
		style="width: 400px; height: 187px;" class="rui-code--iframe"
		sandbox="allow-scripts allow-same-origin">
	  </iframe>`,
		elementJSCodeClassPath:
			".horizontal-cards .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".horizontal-cards .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/cards-final-rhlov?file=/src/styles.css:679-5951",
	},
];

export { elements };
