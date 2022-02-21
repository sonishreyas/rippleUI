/**
 * rootCodeLocation: Where we need to import code for code tabs.
 * elementCodeFilePath: The File Path for the component html file we need to import.
 * elementCodeLocation: The location where we need to import the code for the component.
 * handleCodeTabBtnClass: The classPath for the code tabs to call the handleCodeTab function which allows us to use the tabs.
 * handleCodeTabCodeContentClass: Here we add content classpath
 * elementCodeClassPath: This is the location where we store the HTML code.
 * elementCodeInnerText: Here we add HTML code
 * elementJSCodeBtnClassPath: Here we add the classpath for JS code tab button.
 * elementJSCodeClassPath: Here we add the classpath for JS code.
 * elementJSCodeInnerText: Here we add the JS code.
 * sandboxURLClass: Here we add the classPath for sandboxURL.
 * sandboxURL: Here we add  the sandbox URL
 */

const elements = [
	{
		name: "Text Heading",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .text-heading .rui-import-html",
		elementCodeFilePath: "./src/html/text-heading.html",
		elementCodeLocation:
			".text-heading .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".text-heading .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".text-heading .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".text-heading .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522flex-column%2520justify-content-center%2520align-center%2522%253E%250A%2520%2520%2520%2520%253Ch1%2520class%253D%2522p-2%2520m-2%2522%253EThis%2520is%2520a%2520heading%2520text%253C%252Fh1%2520class%253D%2522p-2%2520m-2%2522%253E%250A%2520%2520%2520%2520%253Ch2%2520class%253D%2522p-2%2520m-2%2522%253EThis%2520is%2520a%2520heading%2520text%253C%252Fh2%253E%250A%2520%2520%2520%2520%253Ch3%2520class%253D%2522p-2%2520m-2%2522%253EThis%2520is%2520a%2520heading%2520text%253C%252Fh3%253E%250A%2520%2520%2520%2520%253Ch4%2520class%253D%2522p-2%2520m-2%2522%253EThis%2520is%2520a%2520heading%2520text%253C%252Fh4%253E%250A%2520%2520%2520%2520%253Ch5%2520class%253D%2522p-2%2520m-2%2522%253EThis%2520is%2520a%2520heading%2520text%253C%252Fh5%253E%250A%2520%2520%2520%2520%253Ch6%2520class%253D%2522p-2%2520m-2%2522%253EThis%2520is%2520a%2520heading%2520text%253C%252Fh6%253E%250A%253C%252Fdiv%253E"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeBtnClassPath:
			".text-heading .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".text-heading .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".text-heading .rui-code-tabs-sandbox--link",
		sandboxURL: "https://codesandbox.io/s/typography-094xw",
	},
	{
		name: "Text Position",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .text-position .rui-import-html",
		elementCodeFilePath: "./src/html/text-position.html",
		elementCodeLocation:
			".text-position .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".text-position .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".text-position .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".text-position .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522text-left%2520p-2%2520m-2%2522%253EText%2520left%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522text-center%2520p-2%2520m-2%2522%253EText%2520center%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522text-right%2520p-2%2520m-2%2522%253EText%2520right%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522text-justify%2520p-2%2520m-2%2522%253EText%2520justify%253C%252Fp%253E%250A%253C%252Fdiv%253E"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeBtnClassPath:
			".text-position .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".text-position .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".text-position .rui-code-tabs-sandbox--link",
		sandboxURL: "https://codesandbox.io/s/typography-094xw",
	},
	{
		name: "Text Properties",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .text-properties .rui-import-html",
		elementCodeFilePath: "./src/html/text-properties.html",
		elementCodeLocation:
			".text-properties .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".text-properties .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".text-properties .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".text-properties .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522flex-column%2520justify-content-center%2520align-center%2522%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522text-bold%2520p-2%2520m-2%2522%253EBold%2520Text%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522text-light%2520p-2%2520m-2%2522%253ELight%2520Text%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cstrike%2520class%253D%2522p-2%2520m-2%2522%253EStrike%2520Text%253C%252Fstrike%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522text-uppercase%2520p-2%2520m-2%2522%253EUppercase%2520Text%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522text-lowercase%2520p-2%2520m-2%2522%253ELowercase%2520Text%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522text-capitalise%2520p-2%2520m-2%2522%253Ecapitalise%2520text%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522text-italic%2520p-2%2520m-2%2522%253EItalic%2520Text%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522text-cta-color%2520p-2%2520m-2%2522%253ECTA%2520Color%2520Text%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522text-secondary-color%2520p-2%2520m-2%2522%253ESecondary%2520Color%2520Text%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522text-disabled%2520p-2%2520m-2%2522%253EDisabled%2520Grey%2520Text%253C%252Fp%253E%250A%253C%252Fdiv%253E"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeBtnClassPath:
			".text-properties .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".text-properties .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".text-properties .rui-code-tabs-sandbox--link",
		sandboxURL: "https://codesandbox.io/s/typography-094xw",
	},
];

export { elements };
