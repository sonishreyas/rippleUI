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
		name: "Horizontal Tabs",
		elementClassName: ".horizontal-tabs",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .horizontal-tabs .rui-import-html",
		elementCodeFilePath: "./src/html/horizontal-tabs.html",
		elementCodeLocation:
			".horizontal-tabs .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".horizontal-tabs .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".horizontal-tabs .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".horizontal-tabs .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Carticle%2520class%253D%2522horizontal-tabs-container%2520flex-column%2520flex-wrap%2520flex-gap-1%2520b-radius-2%2520p-5%2520w-100%2520h-auto%2522%253E%250A%2520%2520%2520%2520%253Carticle%2520class%253D%2522horizontal-tabs-btn-container%2520flex-row%2520flex-grow-1%2520w-100%2520h-auto%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522tabs-btn%2520p-5%2522%253EItem%2520one%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522tabs-btn%2520p-5%2522%253EItem%2520two%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522tabs-btn%2520p-5%2522%253EItem%2520three%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253C%252Farticle%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522horizontal-tabs-content%2520p-5%2520w-100%2520h-auto%2522%253EItem%2520One%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522horizontal-tabs-content%2520p-5%2520w-100%2520h-auto%2522%253EItem%2520Two%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522horizontal-tabs-content%2520p-5%2520w-100%2520h-auto%2522%253EItem%2520Three%253C%252Fdiv%253E%250A%253C%252Farticle%253E"
			class="rui-code--iframe" scrolling="yes" 
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeBtnClassPath:
			".horizontal-tabs .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".horizontal-tabs .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520handleTabs%2520%253D%2520%28header%252C%2520tabsClass%29%2520%253D%253E%2520%257B%250A%2509const%2520tabs_btn%2520%253D%2520document.querySelectorAll%28%250A%2509%2509%2560.%2524%257Bheader%257D-tabs%2520.%2524%257BtabsClass%257D-tabs-btn-container%2520.tabs-btn%2560%250A%2509%29%253B%250A%2509const%2520tabs_content%2520%253D%2520document.querySelectorAll%28%250A%2509%2509%2560.%2524%257Bheader%257D-tabs%2520.%2524%257BtabsClass%257D-tabs-content%2560%250A%2509%29%253B%250A%250A%2509const%2520clearAlltabs%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509tabs_btn.forEach%28%28item%29%2520%253D%253E%2520%257B%250A%2509%2509%2509if%2520%28item.classList.contains%28%2560%2524%257BtabsClass%257D-tabs-btn-active%2560%29%29%2520%257B%250A%2509%2509%2509%2509item.classList.remove%28%2560%2524%257BtabsClass%257D-tabs-btn-active%2560%29%253B%250A%2509%2509%2509%257D%250A%2509%2509%257D%29%253B%250A%2509%2509tabs_content.forEach%28%28item%29%2520%253D%253E%2520%257B%250A%2509%2509%2509item.style.display%2520%253D%2520%2560none%2560%253B%250A%2509%2509%257D%29%253B%250A%2509%257D%253B%250A%2509const%2520setActiveTab%2520%253D%2520%28itemIndex%29%2520%253D%253E%2520%257B%250A%2509%2509clearAlltabs%28%29%253B%250A%2509%2509tabs_btn%255BitemIndex%255D.classList.add%28%2560%2524%257BtabsClass%257D-tabs-btn-active%2560%29%253B%250A%2509%2509tabs_content%255BitemIndex%255D.style.display%2520%253D%2520%2560block%2560%253B%250A%2509%257D%253B%250A%250A%2509for%2520%28let%2520i%2520%253D%25200%253B%2520i%2520%253C%2520tabs_btn.length%253B%2520i%252B%252B%29%2520%257B%250A%2509%2509tabs_btn%255Bi%255D.addEventListener%28%2560click%2560%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509%2509setActiveTab%28i%29%253B%250A%2509%2509%257D%29%253B%250A%2509%257D%250A%2509%252F%252F%2520By%2520default%2520the%2520first%2520tab%2520will%2520be%2520active%250A%2509setActiveTab%280%29%253B%250A%257D%253B%250Aexport%2520%257B%2520handleTabs%2520%257D%253B%250A"
			class="rui-code--iframe" scrolling="yes" 
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		sandboxURLClass: ".horizontal-tabs .rui-code-tabs-sandbox--link",
		sandboxURL: "https://codesandbox.io/s/tabs-final-rhlov",
	},
	{
		name: "Vertical Tabs",
		elementClassName: ".vertical-tabs",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .vertical-tabs .rui-import-html",
		elementCodeFilePath: "./src/html/vertical-tabs.html",
		elementCodeLocation:
			".vertical-tabs .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".vertical-tabs .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".vertical-tabs .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".vertical-tabs .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Carticle%2520class%253D%2522vertical-tabs-container%2520flex-row%2520flex-wrap%2520flex-gap-1%2520b-radius-2%2520p-5%2520%2522%253E%250A%2520%2520%2520%2520%253Carticle%2520class%253D%2522vertical-tabs-btn-container%2520flex-column%2520justify-content-start%2520align-start%2520p-0%2520my-5%2520mx-0%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522tabs-btn%2520p-5%2522%253EItem%2520one%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522tabs-btn%2520p-5%2522%253EItem%2520two%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522tabs-btn%2520p-5%2522%253EItem%2520three%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253C%252Farticle%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522vertical-tabs-content%2520p-5%2520b-radius-2%2520my-5%2520mx-0%2520flex-grow-1%2520flex-gap-1%2522%253EItem%25201%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522vertical-tabs-content%2520p-5%2520b-radius-2%2520my-5%2520mx-0%2520flex-grow-1%2520flex-gap-1%2522%253EItem%25202%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522vertical-tabs-content%2520p-5%2520b-radius-2%2520my-5%2520mx-0%2520flex-grow-1%2520flex-gap-1%2522%253EItem%25203%253C%252Fdiv%253E%250A%253C%252Farticle%253E"
			class="rui-code--iframe" scrolling="yes" 
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeBtnClassPath:
			".vertical-tabs .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".vertical-tabs .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520handleTabs%2520%253D%2520%28header%252C%2520tabsClass%29%2520%253D%253E%2520%257B%250A%2509const%2520tabs_btn%2520%253D%2520document.querySelectorAll%28%250A%2509%2509%2560.%2524%257Bheader%257D-tabs%2520.%2524%257BtabsClass%257D-tabs-btn-container%2520.tabs-btn%2560%250A%2509%29%253B%250A%2509const%2520tabs_content%2520%253D%2520document.querySelectorAll%28%250A%2509%2509%2560.%2524%257Bheader%257D-tabs%2520.%2524%257BtabsClass%257D-tabs-content%2560%250A%2509%29%253B%250A%250A%2509const%2520clearAlltabs%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509tabs_btn.forEach%28%28item%29%2520%253D%253E%2520%257B%250A%2509%2509%2509if%2520%28item.classList.contains%28%2560%2524%257BtabsClass%257D-tabs-btn-active%2560%29%29%2520%257B%250A%2509%2509%2509%2509item.classList.remove%28%2560%2524%257BtabsClass%257D-tabs-btn-active%2560%29%253B%250A%2509%2509%2509%257D%250A%2509%2509%257D%29%253B%250A%2509%2509tabs_content.forEach%28%28item%29%2520%253D%253E%2520%257B%250A%2509%2509%2509item.style.display%2520%253D%2520%2560none%2560%253B%250A%2509%2509%257D%29%253B%250A%2509%257D%253B%250A%2509const%2520setActiveTab%2520%253D%2520%28itemIndex%29%2520%253D%253E%2520%257B%250A%2509%2509clearAlltabs%28%29%253B%250A%2509%2509tabs_btn%255BitemIndex%255D.classList.add%28%2560%2524%257BtabsClass%257D-tabs-btn-active%2560%29%253B%250A%2509%2509tabs_content%255BitemIndex%255D.style.display%2520%253D%2520%2560block%2560%253B%250A%2509%257D%253B%250A%250A%2509for%2520%28let%2520i%2520%253D%25200%253B%2520i%2520%253C%2520tabs_btn.length%253B%2520i%252B%252B%29%2520%257B%250A%2509%2509tabs_btn%255Bi%255D.addEventListener%28%2560click%2560%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509%2509setActiveTab%28i%29%253B%250A%2509%2509%257D%29%253B%250A%2509%257D%250A%2509%252F%252F%2520By%2520default%2520the%2520first%2520tab%2520will%2520be%2520active%250A%2509setActiveTab%280%29%253B%250A%257D%253B%250Aexport%2520%257B%2520handleTabs%2520%257D%253B%250A"
			class="rui-code--iframe" scrolling="yes" 
			sandbox="allow-scripts allow-same-origin">
		</iframe>`,
		sandboxURLClass: ".vertical-tabs .rui-code-tabs-sandbox--link",
		sandboxURL: "https://codesandbox.io/s/tabs-final-rhlov",
	},
	{
		name: "Authentication Tabs",
		elementClassName: ".authentication-tabs",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .authentication-tabs .rui-import-html",
		elementCodeFilePath: "./src/html/authentication-tabs.html",
		elementCodeLocation:
			".authentication-tabs .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".authentication-tabs .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".authentication-tabs .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".authentication-tabs .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Carticle%2520class%253D%2522horizontal-tabs-container%2520flex-column%2520flex-wrap%2520flex-gap-1%2520b-radius-2%2520p-5%2522%253E%250A%2520%2520%2520%2520%253Carticle%2520class%253D%2522horizontal-tabs-btn-container%2520flex-row%2520flex-grow-1%2520justify-content-center%2520align-center%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522tabs-btn%2520p-5%2520flex-row%2520flex-grow-1%2520justify-content-center%2520align-center%2522%253ELogin%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522tabs-btn%2520p-5%2520flex-row%2520flex-grow-1%2520justify-content-center%2520align-center%2522%253ERegister%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253C%252Farticle%253E%250A%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522horizontal-tabs-content%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cform%2520class%253D%2522input-form%2520login%2520flex-column%2520flex-gap-1%2520flex-wrap%2520h-auto%2520w-100%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Csection%2520class%253D%2522input-container%2520flex-column%2520m-5%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520id%253D%2522email%2522%2520class%253D%2522textbox-content%2520p-5%2522%2520type%253D%2522email%2522%2520name%253D%2522email%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Clabel%2520for%253D%2522email%2522%2520class%253D%2522textbox-label%2520m-0%2522%253EEmail%253Cspan%2520class%253D%2522required-field%2522%253E*%253C%252Fspan%253E%253C%252Flabel%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Csub%2520class%253D%2522email-check%2520p-2%2520my-2%2522%253E%253C%252Fsub%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fsection%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522outline-btn%2520p-5%2520b-radius-2%2520mx-5%2520my-0%2520text-bold%2522%253ETest%2520Credentials%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522primary-btn%2520p-5%2520b-radius-2%2520mx-5%2520my-0%2520text-bold%2522%253ELogin%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fform%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522horizontal-tabs-content%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cform%2520class%253D%2522input-form%2520register%2520flex-column%2520flex-gap-1%2520flex-wrap%2520h-auto%2520w-100%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Csection%2520class%253D%2522input-container%2520flex-column%2520m-5%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520id%253D%2522first-name%2522%2520class%253D%2522textbox-content%2520p-5%2522%2520type%253D%2522first-name%2522%2520name%253D%2522first-name%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Clabel%2520for%253D%2522first-name%2522%2520class%253D%2522textbox-label%2520m-0%2522%253EFirst%2520Name%253Cspan%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522required-field%2522%253E*%253C%252Fspan%253E%253C%252Flabel%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Csub%2520class%253D%2522p-2%2520my-2%2520inactive-check%2522%253E%253C%252Fsub%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fsection%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522primary-btn%2520p-5%2520b-radius-2%2520mx-5%2520my-0%2520text-bold%2522%253ERegister%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fform%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Farticle%253E"
			class="rui-code--iframe" scrolling="yes" 
			sandbox="allow-scripts allow-same-origin">
		</iframe>`,
		elementJSCodeBtnClassPath:
			".authentication-tabs .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".authentication-tabs .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520handleTabs%2520%253D%2520%28header%252C%2520tabsClass%29%2520%253D%253E%2520%257B%250A%2509const%2520tabs_btn%2520%253D%2520document.querySelectorAll%28%250A%2509%2509%2560.%2524%257Bheader%257D-tabs%2520.%2524%257BtabsClass%257D-tabs-btn-container%2520.tabs-btn%2560%250A%2509%29%253B%250A%2509const%2520tabs_content%2520%253D%2520document.querySelectorAll%28%250A%2509%2509%2560.%2524%257Bheader%257D-tabs%2520.%2524%257BtabsClass%257D-tabs-content%2560%250A%2509%29%253B%250A%250A%2509const%2520clearAlltabs%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509tabs_btn.forEach%28%28item%29%2520%253D%253E%2520%257B%250A%2509%2509%2509if%2520%28item.classList.contains%28%2560%2524%257BtabsClass%257D-tabs-btn-active%2560%29%29%2520%257B%250A%2509%2509%2509%2509item.classList.remove%28%2560%2524%257BtabsClass%257D-tabs-btn-active%2560%29%253B%250A%2509%2509%2509%257D%250A%2509%2509%257D%29%253B%250A%2509%2509tabs_content.forEach%28%28item%29%2520%253D%253E%2520%257B%250A%2509%2509%2509item.style.display%2520%253D%2520%2560none%2560%253B%250A%2509%2509%257D%29%253B%250A%2509%257D%253B%250A%2509const%2520setActiveTab%2520%253D%2520%28itemIndex%29%2520%253D%253E%2520%257B%250A%2509%2509clearAlltabs%28%29%253B%250A%2509%2509tabs_btn%255BitemIndex%255D.classList.add%28%2560%2524%257BtabsClass%257D-tabs-btn-active%2560%29%253B%250A%2509%2509tabs_content%255BitemIndex%255D.style.display%2520%253D%2520%2560block%2560%253B%250A%2509%257D%253B%250A%250A%2509for%2520%28let%2520i%2520%253D%25200%253B%2520i%2520%253C%2520tabs_btn.length%253B%2520i%252B%252B%29%2520%257B%250A%2509%2509tabs_btn%255Bi%255D.addEventListener%28%2560click%2560%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509%2509setActiveTab%28i%29%253B%250A%2509%2509%257D%29%253B%250A%2509%257D%250A%2509%252F%252F%2520By%2520default%2520the%2520first%2520tab%2520will%2520be%2520active%250A%2509setActiveTab%280%29%253B%250A%257D%253B%250Aexport%2520%257B%2520handleTabs%2520%257D%253B%250A"
			class="rui-code--iframe" scrolling="yes" 
			sandbox="allow-scripts allow-same-origin">
		</iframe>`,
		sandboxURLClass: ".authentication-tabs .rui-code-tabs-sandbox--link",
		sandboxURL: "https://codesandbox.io/s/tabs-final-rhlov",
	},
	{
		name: "Profile Tabs",
		elementClassName: ".profile-tabs",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .profile-tabs .rui-import-html",
		elementCodeFilePath: "./src/html/profile-tabs.html",
		elementCodeLocation:
			".profile-tabs .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".profile-tabs .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".profile-tabs .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".profile-tabs .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Carticle%2520class%253D%2522vertical-tabs-container%2520flex-row%2520flex-wrap%2520flex-gap-1%2520b-radius-2%2520p-5%2520w-100%2520h-auto%2522%253E%250A%2520%2520%2520%2520%253Carticle%2520class%253D%2522vertical-tabs-btn-container%2520flex-column%2520justify-content-start%2520align-start%2520p-0%2520my-5%2520mx-0%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522tabs-btn%2520p-5%2520flex-row%2520flex-gap-1%2520align-center%2520justify-content-start%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522tabs-icon%2522%253E%253Ci%2520class%253D%2522fa-solid%2520fa-user%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522tabs-btn-text%2522%253EProfile%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522tabs-btn%2520p-5%2520flex-row%2520flex-gap-1%2520align-center%2520justify-content-start%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522tabs-icon%2522%253E%253Ci%2520class%253D%2522fa-solid%2520fa-bag-shopping%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522tabs-btn-text%2522%253EOrders%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522tabs-btn%2520p-5%2520flex-row%2520flex-gap-1%2520align-center%2520justify-content-start%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522tabs-icon%2522%253E%253Ci%2520class%253D%2522fa-solid%2520fa-address-book%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522tabs-btn-text%2522%253EAddress%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253C%252Farticle%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522vertical-tabs-content%2520p-5%2520b-radius-2%2520my-5%2520mx-0%2520flex-grow-1%2520flex-gap-1%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522profile-container%2520p-5%2520flex-gap-1%2520b-radius-2%2520%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522profile-header%2520flex-row%2520justify-content-space-between%2520align-center%2520flex-wrap%2520p-5%2520my-0%2520mx-5%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%2520class%253D%2522p-2%2520my-2%2520mx-0%2522%253EProfile%2520Details%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522vertical-tabs-content%2520p-5%2520b-radius-2%2520my-5%2520mx-0%2520flex-grow-1%2520flex-gap-1%2520orders-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522profile-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522profile-header%2520flex-row%2520justify-content-space-between%2520align-center%2520flex-wrap%2520p-5%2520my-0%2520mx-5%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%2520class%253D%2522p-2%2520my-2%2520mx-0%2522%253EOrders%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522vertical-tabs-content%2520p-5%2520b-radius-2%2520my-5%2520mx-0%2520flex-grow-1%2520flex-gap-1%2520address-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522profile-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522profile-header%2520flex-row%2520justify-content-space-between%2520align-center%2520flex-wrap%2520p-5%2520my-0%2520mx-5%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%2520class%253D%2522p-2%2520my-2%2520mx-0%2522%253EAddress%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Farticle%253E"
			class="rui-code--iframe" scrolling="yes" 
			sandbox="allow-scripts allow-same-origin">
		</iframe>`,
		elementJSCodeBtnClassPath:
			".profile-tabs .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".profile-tabs .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520handleTabs%2520%253D%2520%28header%252C%2520tabsClass%29%2520%253D%253E%2520%257B%250A%2509const%2520tabs_btn%2520%253D%2520document.querySelectorAll%28%250A%2509%2509%2560.%2524%257Bheader%257D-tabs%2520.%2524%257BtabsClass%257D-tabs-btn-container%2520.tabs-btn%2560%250A%2509%29%253B%250A%2509const%2520tabs_content%2520%253D%2520document.querySelectorAll%28%250A%2509%2509%2560.%2524%257Bheader%257D-tabs%2520.%2524%257BtabsClass%257D-tabs-content%2560%250A%2509%29%253B%250A%250A%2509const%2520clearAlltabs%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509tabs_btn.forEach%28%28item%29%2520%253D%253E%2520%257B%250A%2509%2509%2509if%2520%28item.classList.contains%28%2560%2524%257BtabsClass%257D-tabs-btn-active%2560%29%29%2520%257B%250A%2509%2509%2509%2509item.classList.remove%28%2560%2524%257BtabsClass%257D-tabs-btn-active%2560%29%253B%250A%2509%2509%2509%257D%250A%2509%2509%257D%29%253B%250A%2509%2509tabs_content.forEach%28%28item%29%2520%253D%253E%2520%257B%250A%2509%2509%2509item.style.display%2520%253D%2520%2560none%2560%253B%250A%2509%2509%257D%29%253B%250A%2509%257D%253B%250A%2509const%2520setActiveTab%2520%253D%2520%28itemIndex%29%2520%253D%253E%2520%257B%250A%2509%2509clearAlltabs%28%29%253B%250A%2509%2509tabs_btn%255BitemIndex%255D.classList.add%28%2560%2524%257BtabsClass%257D-tabs-btn-active%2560%29%253B%250A%2509%2509tabs_content%255BitemIndex%255D.style.display%2520%253D%2520%2560block%2560%253B%250A%2509%257D%253B%250A%250A%2509for%2520%28let%2520i%2520%253D%25200%253B%2520i%2520%253C%2520tabs_btn.length%253B%2520i%252B%252B%29%2520%257B%250A%2509%2509tabs_btn%255Bi%255D.addEventListener%28%2560click%2560%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509%2509setActiveTab%28i%29%253B%250A%2509%2509%257D%29%253B%250A%2509%257D%250A%2509%252F%252F%2520By%2520default%2520the%2520first%2520tab%2520will%2520be%2520active%250A%2509setActiveTab%280%29%253B%250A%257D%253B%250Aexport%2520%257B%2520handleTabs%2520%257D%253B%250A"
			class="rui-code--iframe" scrolling="yes" 
			sandbox="allow-scripts allow-same-origin">
		</iframe>`,
		sandboxURLClass: ".profile-tabs .rui-code-tabs-sandbox--link",
		sandboxURL: "https://codesandbox.io/s/tabs-final-rhlov",
	},
];

export { elements };
