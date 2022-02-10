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
		src="https://carbon.now.sh/embed?bg=rgba%281%2C22%2C39%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=34px&ph=32px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cul%2520class%253D%2522stacked-list%2522%253E%250A%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Carticle%2520class%253D%2522card%2520basic-card%2520card-shadow%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fmedia%252Fimages%252Fsneaker.png%2522%2520alt%253D%2522%2522%2520class%253D%2522notification-image%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Notification%25201%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Farticle%253E%250A%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Carticle%2520class%253D%2522card%2520basic-card%2520card-shadow%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fmedia%252Fimages%252Fsneaker.png%2522%2520alt%253D%2522%2522%2520class%253D%2522notification-image%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Notification%25202%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Farticle%253E%250A%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Carticle%2520class%253D%2522card%2520basic-card%2520card-shadow%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fmedia%252Fimages%252Fsneaker.png%2522%2520alt%253D%2522%2522%2520class%253D%2522notification-image%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Notification%25203%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Farticle%253E%250A%2520%2520%2520%2520%253C%252Fli%253E%250A%253C%252Ful%253E"
		class="rui-code--iframe" scrolling="yes" 
		sandbox="allow-scripts allow-same-origin">
	  </iframe>`,
		elementJSCodeClassPath:
			".stacked-lists .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".stacked-lists .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/alert-lr17y?file=/index.html:662-1972",
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
		src="https://carbon.now.sh/embed?bg=rgba%281%2C22%2C39%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=34px&ph=32px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cul%2520class%253D%2522spaced-list%2522%253E%250A%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2522%2520class%253D%2522no-link%2522%253EHome%253C%252Fa%253E%250A%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2522%2520class%253D%2522no-link%2522%253EProducts%253C%252Fa%253E%250A%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2522%2520class%253D%2522no-link%2522%253EProfile%253C%252Fa%253E%250A%2520%2520%2520%2520%253C%252Fli%253E%250A%253C%252Ful%253E"
		class="rui-code--iframe" scrolling="yes"
		sandbox="allow-scripts allow-same-origin">
	  </iframe>`,
		elementJSCodeClassPath:
			".spaced-lists .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".spaced-lists .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/alert-lr17y?file=/index.html:662-1972",
	},
];

export { elements };
