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
		name: "Static Rating",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .static-rating .rui-import-html",
		elementCodeFilePath: "./src/html/static-rating.html",
		elementCodeLocation:
			".static-rating .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".static-rating .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".static-rating .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".static-rating .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522rating-container%2522%253E%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522rating%2520flex-row%2520align-center%2520flex-gap-half%2520pb-5%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-star%2520set%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-star%2520set%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-star%2520set%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-star%2520set%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-star%2520unset%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522card-review%2520m-3%2520p-0%2520text-bold%2520flex-row%2520align-center%2520flex-gap-half%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E4%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522review-star%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-star%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%253C%252Fspan%253E%250A%253C%252Fdiv%253E"
			class="rui-code--iframe" scrolling="yes" 
			sandbox="allow-scripts allow-same-origin">
		</iframe>`,
		elementJSCodeBtnClassPath:
			".static-rating .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".static-rating .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".static-rating .rui-code-tabs-sandbox--link",
		sandboxURL: "https://codesandbox.io/s/rating-b2zz9",
	},
];

export { elements };
