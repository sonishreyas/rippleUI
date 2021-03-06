/*
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
		name: "Primary Buttons",
		elementClassName: ".primary-button",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .primary-button .rui-import-html",
		elementCodeFilePath: "./src/html/primary-button.html",
		elementCodeLocation:
			".primary-button .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".primary-button .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".primary-button .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".primary-button .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%2522primary-btn%2520p-5%250A%2520b-radius-2%2520mx-5%2520my-0%2520text-bold%2522%253EPrimary%253C%252Fbutton%253E"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeBtnClassPath:
			".primary-button .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".primary-button .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".primary-button .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/buttons-hs9wm?file=/index.html:1027-1198",
	},
	{
		name: "Outline Button",
		elementClassName: ".outline-button",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .outline-button .rui-import-html",
		elementCodeFilePath: "./src/html/outline-button.html",
		elementCodeLocation:
			".outline-button .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".outline-button .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".outline-button .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".outline-button .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%2522outline-btn%2520p-5%2520%250Ab-radius-2%2520mx-5%2520my-0%2520text-bold%2522%253EPrimary%2520Outline%253C%252Fbutton%253E"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeBtnClassPath:
			".outline-button .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".outline-button .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".outline-button .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/buttons-hs9wm?file=/index.html:1027-1198",
	},
	{
		name: "Link Button",
		elementClassName: ".link-button",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .link-button .rui-import-html",
		elementCodeFilePath: "./src/html/link-button.html",
		elementCodeLocation:
			".link-button .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".link-button .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".link-button .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".link-button .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Ca%2520href%253D%2522%2523%2522%2520class%253D%2522link-btn%2520mx-5%2520my-0%2522%253ELink%2520Button%253C%252Fa%253E"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeBtnClassPath:
			".link-button .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".link-button .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".link-button .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/buttons-hs9wm?file=/index.html:1027-1198",
	},
	{
		name: "Icon Button",
		elementClassName: ".icon-button",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .icon-button .rui-import-html",
		elementCodeFilePath: "./src/html/icon-button.html",
		elementCodeLocation:
			".icon-button .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".icon-button .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".icon-button .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".icon-button .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cspan%2520class%253D%2522icon-btn%2520mx-5%2520my-0%2520text-bold%2522%253E%250A%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2522%253E%253C%252Fi%253E%250A%253C%252Fspan%253E"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeBtnClassPath:
			".icon-button .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".icon-button .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".icon-button .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/buttons-hs9wm?file=/index.html:1027-1198",
	},
	{
		name: "Icon Text Button",
		elementClassName: ".icon-text-button",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .icon-text-button .rui-import-html",
		elementCodeFilePath: "./src/html/icon-text-button.html",
		elementCodeLocation:
			".icon-text-button .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".icon-text-button .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".icon-text-button .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".icon-text-button .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%250A%2520%2520%2520%2520class%253D%2522primary-btn%2520p-5%2520b-radius-2%2520mx-5%2520my-0%2520%250Atext-bold%2520icon-text-btn%2520flex-row%2520justify-content-center%2520align-center%2520flex-gap-1%2522%253E%250A%2520%2520%2520%2520%253Cspan%253E%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522btn-text%2522%253EAdd%2520to%2520Cart%253C%252Fp%253E%250A%253C%252Fbutton%253E"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeBtnClassPath:
			".icon-text-button .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".icon-text-button .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".icon-text-button .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/buttons-hs9wm?file=/index.html:1027-1198",
	},
	{
		name: "Toggle Button",
		elementClassName: ".toggle-button",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .toggle-button .rui-import-html",
		elementCodeFilePath: "./src/html/toggle-button.html",
		elementCodeLocation:
			".toggle-button .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".toggle-button .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".toggle-button .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".toggle-button .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Csection%2520class%253D%2522toggle-button-container%2520text-center%2522%253E%250A%2520%2520%2520%2520%253Clabel%2520class%253D%2522switch%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522checkbox%2522%2520aria-label%253D%2522Toggle%2520Choice%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522slider%2520b-radius-4%2522%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%253C%252Flabel%253E%250A%253C%252Fsection%253E"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeBtnClassPath:
			".toggle-button .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".toggle-button .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".toggle-button .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/buttons-hs9wm?file=/index.html:1027-1198",
	},
	{
		name: "Floating Button",
		elementClassName: ".floating-button",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .floating-button .rui-import-html",
		elementCodeFilePath: "./src/html/floating-button.html",
		elementCodeLocation:
			".floating-button .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".floating-button .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".floating-button .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".floating-button .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%2522floating-btn%2520b-radius-circle%2522%253E%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522floating-btn-icon%2522%253E%253Ci%2520class%253D%2522fas%2520fa-plus%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%253C%252Fbutton%253E"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeBtnClassPath:
			".floating-button .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".floating-button .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".floating-button .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/buttons-hs9wm?file=/index.html:1027-1198",
	},
];

export { elements };
