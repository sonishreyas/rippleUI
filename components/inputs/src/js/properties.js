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
		name: "Textbox",
		elementClassName: ".textbox",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation: ".main .rui-main--sub-heading .textbox .rui-import-html",
		elementCodeFilePath: "./src/html/textbox.html",
		elementCodeLocation:
			".textbox .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".textbox .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".textbox .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".textbox .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cform%2520class%253D%2522input-form%2520flex-column%2520flex-gap-1%2520flex-wrap%2520h-auto%2520w-100%2522%253E%250A%2520%2520%2520%2520%253Csection%2520class%253D%2522input-container%2520flex-column%2520m-5%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520id%253D%2522email%2522%2520class%253D%2522textbox-content%2520p-5%2522%2520type%253D%2522email%2522%2520name%253D%2522email%2522%2520aria-label%253D%2522Enter%2520Email%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Clabel%2520for%253D%2522email%2522%2520class%253D%2522textbox-label%2520m-0%2522%253EEmail%253Cspan%2520class%253D%2522required-field%2522%253E*%253C%252Fspan%253E%253C%252Flabel%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Csub%2520class%253D%2522email-check%2520p-2%2520my-2%2522%253E%253C%252Fsub%253E%250A%2520%2520%2520%2520%253C%252Fsection%253E%250A%2520%2520%2520%2520%253Csection%2520class%253D%2522input-container%2520flex-column%2520m-5%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520id%253D%2522password%2522%2520class%253D%2522textbox-content%2520p-5%2522%2520typs%253D%2522password%2522%2520name%253D%2522password%2522%2520aria-label%253D%2522Enter%2520Password%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-eye%2520show-password%2522%2520id%253D%2522show-password%2522%2520aria-label%253D%2522Show%2520password%2520button%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Clabel%2520for%253D%2522password%2522%2520class%253D%2522textbox-label%2520m-0%2522%253EPassword%253Cspan%2520class%253D%2522required-field%2522%253E*%253C%252Fspan%253E%253C%252Flabel%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Csub%2520class%253D%2522password-check%2520p-2%2520my-2%2522%253E%253C%252Fsub%253E%250A%2520%2520%2520%2520%253C%252Fsection%253E%250A%253C%252Fform%253E"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeBtnClassPath:
			".textbox .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".textbox .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520handleInput%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2509const%2520input_container%2520%253D%2520document.querySelectorAll%28%250A%2509%2509%2522.input-container%2520.textbox-content%2522%250A%2509%29%253B%250A%250A%2509const%2520emailCheck%2520%253D%2520document.querySelector%28%2522.email-check%2522%29%253B%250A%2509const%2520passwordCheck%2520%253D%2520document.querySelector%28%2522.password-check%2522%29%253B%250A%250A%2509const%2520showPassword%2520%253D%2520document.querySelector%28%2522.show-password%2522%29%253B%250A%2509const%2520passwordBox%2520%253D%2520document.querySelector%28%2522%2523password%2522%29%253B%250A%2509const%2520emailBox%2520%253D%2520document.querySelector%28%2522%2523email%2522%29%253B%250A%2509showPassword.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509if%2520%28passwordBox.type%2520%253D%253D%253D%2520%2522password%2522%29%2520%257B%250A%2509%2509%2509passwordBox.type%2520%253D%2520%2522text%2522%253B%250A%2509%2509%2509showPassword.classList.remove%28%2522fa-eye%2522%29%253B%250A%2509%2509%2509showPassword.classList.add%28%2522fa-eye-slash%2522%29%253B%250A%2509%2509%257D%2520else%2520%257B%250A%2509%2509%2509passwordBox.type%2520%253D%2520%2522password%2522%253B%250A%2509%2509%2509showPassword.classList.remove%28%2522fa-eye-slash%2522%29%253B%250A%2509%2509%2509showPassword.classList.add%28%2522fa-eye%2522%29%253B%250A%2509%2509%257D%250A%2509%257D%29%253B%250A%250A%2509input_container.forEach%28%28item%29%2520%253D%253E%2520%257B%250A%2509%2509item.addEventListener%28%2522focus%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509%2509item.parentElement.classList.add%28%2522focused%2522%29%253B%250A%2509%2509%257D%29%253B%250A%250A%2509%2509item.addEventListener%28%2522blur%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509%2509if%2520%28item.value.length%2520%253D%253D%253D%25200%29%2520%257B%250A%2509%2509%2509%2509item.parentElement.classList.remove%28%2522focused%2522%29%253B%250A%2509%2509%2509%257D%250A%250A%2509%2509%2509if%2520%28item.parentElement.innerText.includes%28%2522Email%2522%29%29%2520%257B%250A%2509%2509%2509%2509if%2520%28item.value.includes%28%2522%2540%2522%29%2520%21%253D%253D%2520true%29%2520%257B%250A%2509%2509%2509%2509%2509emailCheck.innerText%2520%253D%2520%2522Invalid%2520Email%2522%253B%250A%2509%2509%2509%2509%2509emailCheck.classList.add%28%2522invalid%2522%29%253B%250A%2509%2509%2509%2509%257D%2520else%2520%257B%250A%2509%2509%2509%2509%2509emailCheck.innerText%2520%253D%2520%2522%2522%253B%250A%2509%2509%2509%2509%2509emailCheck.classList.remove%28%2522invalid%2522%29%253B%250A%2509%2509%2509%2509%257D%250A%2509%2509%2509%257D%250A%2509%2509%257D%29%253B%250A%250A%2509%2509item.addEventListener%28%2522input%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509%2509if%2520%28item.parentElement.innerText.includes%28%2522Password%2522%29%29%2520%257B%250A%2509%2509%2509%2509if%2520%28item.value.length%2520%253C%25208%29%2520%257B%250A%2509%2509%2509%2509%2509passwordCheck.innerText%2520%253D%250A%2509%2509%2509%2509%2509%2509%2522Password%2520must%2520be%2520greater%2520then%25208%2520characters.%2522%253B%250A%2509%2509%2509%2509%2509if%2520%28passwordCheck.classList.contains%28%2522valid%2522%29%29%250A%2509%2509%2509%2509%2509%2509passwordCheck.classList.remove%28%2522valid%2522%29%253B%250A%2509%2509%2509%2509%2509if%2520%28passwordCheck.classList.contains%28%2522invalid%2522%29%2520%21%253D%253D%2520true%29%250A%2509%2509%2509%2509%2509%2509passwordCheck.classList.add%28%2522invalid%2522%29%253B%250A%2509%2509%2509%2509%2509if%2520%28passwordBox.classList.contains%28%2522invalid-border%2522%29%2520%21%253D%253D%2520true%29%250A%2509%2509%2509%2509%2509%2509passwordBox.classList.add%28%2522invalid-border%2522%29%253B%250A%2509%2509%2509%2509%2509if%2520%28passwordBox.classList.contains%28%2522valid-border%2522%29%29%250A%2509%2509%2509%2509%2509%2509passwordBox.classList.remove%28%2522valid-border%2522%29%253B%250A%2509%2509%2509%2509%257D%2520else%2520%257B%250A%2509%2509%2509%2509%2509passwordCheck.innerText%2520%253D%2520%2522Strong%2520Password.%2522%253B%250A%2509%2509%2509%2509%2509if%2520%28passwordCheck.classList.contains%28%2522invalid%2522%29%29%250A%2509%2509%2509%2509%2509%2509passwordCheck.classList.remove%28%2522invalid%2522%29%253B%250A%2509%2509%2509%2509%2509if%2520%28passwordCheck.classList.contains%28%2522valid%2522%29%2520%21%253D%253D%2520true%29%250A%2509%2509%2509%2509%2509%2509passwordCheck.classList.add%28%2522valid%2522%29%253B%250A%2509%2509%2509%2509%2509if%2520%28passwordBox.classList.contains%28%2522invalid-border%2522%29%29%250A%2509%2509%2509%2509%2509%2509passwordBox.classList.remove%28%2522invalid-border%2522%29%253B%250A%2509%2509%2509%2509%2509if%2520%28passwordBox.classList.contains%28%2522valid-border%2522%29%2520%21%253D%253D%2520true%29%250A%2509%2509%2509%2509%2509%2509passwordBox.classList.add%28%2522valid-border%2522%29%253B%250A%2509%2509%2509%2509%257D%250A%2509%2509%2509%257D%250A%2509%2509%257D%29%253B%250A%2509%257D%29%253B%250A%257D%253B%250A%250Aexport%2520%257B%2520handleInput%2520%257D%253B%250A"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		sandboxURLClass: ".textbox .rui-code-tabs-sandbox--link",
		sandboxURL: "https://codesandbox.io/s/inputs-w30zn",
	},
	{
		name: "Radio and Checkbox",
		elementClassName: ".radio-and-checkbox",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .radio-and-checkbox .rui-import-html",
		elementCodeFilePath: "./src/html/radio-and-checkbox.html",
		elementCodeLocation:
			".radio-and-checkbox .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".radio-and-checkbox .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".radio-and-checkbox .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".radio-and-checkbox .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522form-container%2520flex-colmn%2520flex-gap-2%2520p-5%2520m-5%2522%253E%250A%2520%2520%2520%2520%253Csection%2520class%253D%2522form-header%2520flex-row%2520align-center%2520justify-content-space-between%2520pb-10%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%2520class%253D%2522form-heading%2520text-bold%2520py-5%2520px-0%2522%253EFilters%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2523%2522%2520class%253D%2522link-btn%2522%253EClear%2520All%253C%252Fa%253E%250A%2520%2520%2520%2520%253C%252Fsection%253E%250A%2520%2520%2520%2520%253Cul%2520class%253D%2522radio-btn-container%2520pb-10%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2520form-heading%2520text-bold%2520py-5%2520px-0%2522%253ESort%2520by%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520class%253D%2522radio-btn%2522%2520type%253D%2522radio%2522%2520id%253D%2522radio-btn%2522%2520name%253D%2522radio-btn%2522%2520value%253D%2522Price%2520Low%2520to%2520High%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520aria-label%253D%2522Sort%2520by%2520price%253A%2520low%2520to%2520high%2522%2520%252F%253E%2520Price%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Low%2520to%2520High%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520class%253D%2522radio-btn%2522%2520type%253D%2522radio%2522%2520id%253D%2522radio-btn%2522%2520name%253D%2522radio-btn%2522%2520value%253D%2522High%2520to%2520Low%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520aria-label%253D%2522Sort%2520by%2520price%253A%2520high%2520to%2520low%2522%2520%252F%253E%2520Price%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520High%2520to%2520Low%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%253Cul%2520class%253D%2522checkbox-btn-container%2520pb-10%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2520form-heading%2520text-bold%2520py-5%2520px-0%2522%253EBrand%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2522%253E%253Cinput%2520class%253D%2522checkbox-btn%2522%2520type%253D%2522checkbox%2522%2520value%253D%2522Adidas%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520aria-label%253D%2522Filter%2520to%2520Adidas%2520products%2522%2520%252F%253E%2520Adidas%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522no-list%2522%253E%253Cinput%2520class%253D%2522checkbox-btn%2522%2520type%253D%2522checkbox%2522%2520value%253D%2522Puma%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520aria-label%253D%2522Filter%2520to%2520Puma%2520products%2522%2520%252F%253E%2520Puma%253C%252Fli%253E%250A%2520%2520%2520%2520%253C%252Ful%253E%250A%253C%252Fdiv%253E"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeBtnClassPath:
			".radio-and-checkbox .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".radio-and-checkbox .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".radio-and-checkbox .rui-code-tabs-sandbox--link",
		sandboxURL: "https://codesandbox.io/s/radio-and-checkbox-53je3",
	},
	{
		name: "Textbox with icon",
		elementClassName: ".textbox-with-icon",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .textbox-with-icon .rui-import-html",
		elementCodeFilePath: "./src/html/textbox-with-icon.html",
		elementCodeLocation:
			".textbox-with-icon .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".textbox-with-icon .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".textbox-with-icon .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".textbox-with-icon .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cform%2520class%253D%2522input-form%2520flex-column%2520flex-gap-1%2520flex-grow-1%2520flex-wrap%2520h-auto%2520w-100%2522%253E%250A%2520%2520%2520%2520%253Csection%2520class%253D%2522input-container%2520input-with-icon%2520flex-column%2520b-radius-2%2520m-5%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520id%253D%2522search%2522%2520class%253D%2522textbox-content%2520p-5%2522%2520type%253D%2522text%2522%2520name%253D%2522search%2522%2520placeholder%253D%2522Search...%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520aria-label%253D%2522Search%2520Products%2520here%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-search%2520search-icon%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%253C%252Fsection%253E%250A%253C%252Fform%253E"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeBtnClassPath:
			".textbox-with-icon .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".textbox-with-icon .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".textbox-with-icon .rui-code-tabs-sandbox--link",
		sandboxURL: "https://codesandbox.io/s/inputs-w30zn",
	},
];

export { elements };
