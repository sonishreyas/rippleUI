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
		name: "Standard Snackbar",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .standard-snackbar .rui-import-html",
		elementCodeFilePath: "./src/html/standard-snackbar.html",
		elementCodeLocation:
			".standard-snackbar .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".standard-snackbar .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".standard-snackbar .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".standard-snackbar .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Carticle%2520class%253D%2522rui-alert-type--container%2522%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522primary-btn%2520p-5%2520b-radius-2%2520mx-5%2520my-0%2520text-bold%2520top-left%2522%253ETop%2520Left%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522primary-btn%2520p-5%2520b-radius-2%2520mx-5%2520my-0%2520text-bold%2520top-center%2522%253ETop%2520Center%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522primary-btn%2520p-5%2520b-radius-2%2520mx-5%2520my-0%2520text-bold%2520top-right%2522%253ETop%2520Right%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522primary-btn%2520p-5%2520b-radius-2%2520mx-5%2520my-0%2520text-bold%2520bottom-left%2522%253EBottom%2520Left%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522primary-btn%2520p-5%2520b-radius-2%2520mx-5%2520my-0%2520text-bold%2520bottom-center%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Bottom%2520Center%250A%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522primary-btn%2520p-5%2520b-radius-2%2520mx-5%2520my-0%2520text-bold%2520bottom-right%2522%253EBottom%2520Right%253C%252Fbutton%253E%250A%253C%252Farticle%253E%250A%253Carticle%2520class%253D%2522snackbar--container%2520flex-row%2520align-center%2520justify-content-center%2520flex-gap-1%2522%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522snackbar--text%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Can%27t%2520upload%2520photo.%2520Retry%2520in%252010%2520seconds.%250A%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522snackbar--retry%2520cursor-pointer%2522%253ERETRY%253C%252Fp%253E%250A%2520%2520%2520%2520%253Ci%2520class%253D%2522far%2520fa-times-circle%2520rui-cross%2520b-radius-circle%2522%253E%253C%252Fi%253E%250A%253C%252Farticle%253E"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeClassPath:
			".standard-snackbar .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520handleSnackbar%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2509const%2520top_left%2520%253D%2520document.querySelector%28%2522.top-left%2522%29%253B%250A%2509const%2520top_center%2520%253D%2520document.querySelector%28%2522.top-center%2522%29%253B%250A%2509const%2520top_right%2520%253D%2520document.querySelector%28%2522.top-right%2522%29%253B%250A%2509const%2520bottom_left%2520%253D%2520document.querySelector%28%2522.bottom-left%2522%29%253B%250A%2509const%2520bottom_center%2520%253D%2520document.querySelector%28%2522.bottom-center%2522%29%253B%250A%2509const%2520bottom_right%2520%253D%2520document.querySelector%28%2522.bottom-right%2522%29%253B%250A%2509const%2520snackbar_container%2520%253D%2520document.querySelector%28%2522.snackbar--container%2522%29%253B%250A%2509const%2520snackbar_cross%2520%253D%2520document.querySelector%28%2522.rui-cross%2522%29%253B%250A%250A%2509const%2520displaySnackbar%2520%253D%2520%28t%252C%2520b%252C%2520l%252C%2520r%29%2520%253D%253E%2520%257B%250A%2509%2509snackbar_container.style.top%2520%253D%2520t%253B%250A%2509%2509snackbar_container.style.left%2520%253D%2520l%253B%250A%2509%2509snackbar_container.style.bottom%2520%253D%2520b%253B%250A%2509%2509snackbar_container.style.right%2520%253D%2520r%253B%250A%2509%2509snackbar_container.style.visibility%2520%253D%2520%2522visible%2522%253B%250A%2509%257D%253B%250A%2509top_left.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509displaySnackbar%28%25221rem%2522%252C%2520null%252C%2520%25221rem%2522%252C%2520null%29%253B%250A%2509%257D%29%253B%250A%2509top_center.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509displaySnackbar%28%25221rem%2522%252C%2520null%252C%2520%252240%2525%2522%252C%2520null%29%253B%250A%2509%257D%29%253B%250A%250A%2509top_right.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509displaySnackbar%28%25221rem%2522%252C%2520null%252C%2520null%252C%2520%25221rem%2522%29%253B%250A%2509%257D%29%253B%250A%250A%2509bottom_left.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509displaySnackbar%28null%252C%2520%25221rem%2522%252C%2520%25221rem%2522%252C%2520null%29%253B%250A%2509%257D%29%253B%250A%2509bottom_center.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509displaySnackbar%28null%252C%2520%25221rem%2522%252C%2520%252240%2525%2522%252C%2520null%29%253B%250A%2509%257D%29%253B%250A%250A%2509bottom_right.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509displaySnackbar%28null%252C%2520%25221rem%2522%252C%2520null%252C%2520%25221rem%2522%29%253B%250A%2509%257D%29%253B%250A%250A%2509snackbar_cross.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509snackbar_container.style.visibility%2520%253D%2520%2522hidden%2522%253B%250A%2509%257D%29%253B%250A%257D%253B%250A%250Aexport%2520%257B%2520handleSnackbar%2520%257D%253B"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
		</iframe>`,
		sandboxURLClass: ".standard-snackbar .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/snackbar-lr17y?file=/index.html:662-1972",
	},
];

export { elements };
