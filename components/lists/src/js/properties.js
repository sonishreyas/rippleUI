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
		name: "Stacked Lists",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .stacked-lists .rui-import-html",
		elementCodeFilePath: "./src/html/stacked-lists.html",
		elementCodeLocation:
			".stacked-lists .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".stacked-lists .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".stacked-lists .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".stacked-lists .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cul%2520class%253D%2522stacked-list%2520flex-column%2520flex-gap-1%2520align-center%2520m-10%2522%253E%250A%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2520ml-5%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Carticle%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522basic-card%2520flex-row%2520justify-content-center%2520%250Aalign-center%2520flex-gap-1%2520flex-wrap%2520card-shadow%2520p-5%2520b-radius-2%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fraw.githubusercontent.com%252F%250Asonishreyas%252FrippleUI%252Fdev%252F%250Acomponents%252Fmedia%252Fimages%252Fsneaker.png%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%2520class%253D%2522notification-image%2520%250Ap-5%2520b-radius-2%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch4%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Notification%25201%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fh4%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Farticle%253E%250A%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2520ml-5%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Carticle%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522basic-card%2520flex-row%2520justify-content-center%2520%250Aalign-center%2520flex-gap-1%2520flex-wrap%2520card-shadow%2520p-5%2520b-radius-2%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fraw.githubusercontent.com%252F%250Asonishreyas%252FrippleUI%252Fdev%252F%250Acomponents%252Fmedia%252Fimages%252Fsneaker.png%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%2520class%253D%2522notification-image%2520%250Ap-5%2520b-radius-2%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch4%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Notification%25202%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fh4%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Farticle%253E%250A%2520%2520%2520%2520%253C%252Fli%253E%250A%253C%252Ful%253E"
			class="rui-code--iframe" scrolling="yes" 
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeBtnClassPath:
			".stacked-lists .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".stacked-lists .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".stacked-lists .rui-code-tabs-sandbox--link",
		sandboxURL: "https://codesandbox.io/s/lists-tbbjw",
	},
	{
		name: "Spaced Lists",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .spaced-lists .rui-import-html",
		elementCodeFilePath: "./src/html/spaced-lists.html",
		elementCodeLocation:
			".spaced-lists .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".spaced-lists .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".spaced-lists .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".spaced-lists .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cul%2520class%253D%2522spaced-list%2520flex-row%2520align-center%2522%253E%250A%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2520m-5%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2522%2520class%253D%2522no-link%2522%253EHome%253C%252Fa%253E%250A%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2520m-5%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2522%2520class%253D%2522no-link%2522%253EProducts%253C%252Fa%253E%250A%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2520m-5%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2522%2520class%253D%2522no-link%2522%253EProfile%253C%252Fa%253E%250A%2520%2520%2520%2520%253C%252Fli%253E%250A%253C%252Ful%253E"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeBtnClassPath:
			".spaced-lists .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".spaced-lists .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".spaced-lists .rui-code-tabs-sandbox--link",
		sandboxURL: "https://codesandbox.io/s/lists-tbbjw",
	},
];

export { elements };
