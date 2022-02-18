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
		src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Carticle%2520class%253D%2522horizontal-tabs-container%2522%253E%250A%2520%2520%2520%2520%253Carticle%2520class%253D%2522horizontal-tabs-btn-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522tabs-btn%2522%253EItem%2520one%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522tabs-btn%2522%253EItem%2520two%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522tabs-btn%2522%253EItem%2520three%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253C%252Farticle%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522horizontal-tabs-content%2522%253EItem%2520One%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522horizontal-tabs-content%2522%253EItem%2520Two%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522horizontal-tabs-content%2522%253EItem%2520Three%253C%252Fdiv%253E%250A%253C%252Farticle%253E"
		class="rui-code--iframe"
		sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeClassPath:
			".horizontal-tabs .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `<iframe
		src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520handleTabs%2520%253D%2520%28header%252C%2520tabsClass%29%2520%253D%253E%2520%257B%250A%2509const%2520tabs_btn%2520%253D%2520document.querySelectorAll%28%250A%2509%2509%2560.%2524%257Bheader%257D-tabs%2520.%2524%257BtabsClass%257D-tabs-btn-container%2520.tabs-btn%2560%250A%2509%29%253B%250A%2509const%2520tabs_content%2520%253D%2520document.querySelectorAll%28%250A%2509%2509%2560.%2524%257Bheader%257D-tabs%2520.%2524%257BtabsClass%257D-tabs-content%2560%250A%2509%29%253B%250A%250A%2509const%2520clearAlltabs%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509tabs_btn.forEach%28%28item%29%2520%253D%253E%2520%257B%250A%2509%2509%2509if%2520%28item.classList.contains%28%2560%2524%257BtabsClass%257D-tabs-btn-active%2560%29%29%2520%257B%250A%2509%2509%2509%2509item.classList.remove%28%2560%2524%257BtabsClass%257D-tabs-btn-active%2560%29%253B%250A%2509%2509%2509%257D%250A%2509%2509%257D%29%253B%250A%2509%2509tabs_content.forEach%28%28item%29%2520%253D%253E%2520%257B%250A%2509%2509%2509item.style.display%2520%253D%2520%2560none%2560%253B%250A%2509%2509%257D%29%253B%250A%2509%257D%253B%250A%2509const%2520setActiveTab%2520%253D%2520%28itemIndex%29%2520%253D%253E%2520%257B%250A%2509%2509clearAlltabs%28%29%253B%250A%2509%2509tabs_btn%255BitemIndex%255D.classList.add%28%2560%2524%257BtabsClass%257D-tabs-btn-active%2560%29%253B%250A%2509%2509tabs_content%255BitemIndex%255D.style.display%2520%253D%2520%2560block%2560%253B%250A%2509%257D%253B%250A%250A%2509for%2520%28let%2520i%2520%253D%25200%253B%2520i%2520%253C%2520tabs_btn.length%253B%2520i%252B%252B%29%2520%257B%250A%2509%2509tabs_btn%255Bi%255D.addEventListener%28%2560click%2560%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509%2509setActiveTab%28i%29%253B%250A%2509%2509%257D%29%253B%250A%2509%257D%250A%2509%252F%252F%2520By%2520default%2520the%2520first%2520tab%2520will%2520be%2520active%250A%2509setActiveTab%280%29%253B%250A%257D%253B%250A%250AhandleTabs%28%2522horizontal%2522%29"
		class="rui-code--iframe"
		sandbox="allow-scripts allow-same-origin">
	  </iframe>`,
		sandboxURLClass: ".horizontal-tabs .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/cards-final-rhlov?file=/src/styles.css:679-5951",
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
		src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Carticle%2520class%253D%2522vertical-tabs-container%2522%253E%250A%2520%2520%2520%2520%253Carticle%2520class%253D%2522vertical-tabs-btn-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522tabs-btn%2522%253EItem%2520one%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522tabs-btn%2522%253EItem%2520two%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522tabs-btn%2522%253EItem%2520three%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253C%252Farticle%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522vertical-tabs-content%2522%253EItem%25201%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522vertical-tabs-content%2522%253EItem%25202%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522vertical-tabs-content%2522%253EItem%25203%253C%252Fdiv%253E%250A%253C%252Farticle%253E"
		class="rui-code--iframe"
		sandbox="allow-scripts allow-same-origin">
	  </iframe>`,
		elementJSCodeClassPath:
			".vertical-tabs .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `<iframe
		src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520handleTabs%2520%253D%2520%28header%252C%2520tabsClass%29%2520%253D%253E%2520%257B%250A%2509const%2520tabs_btn%2520%253D%2520document.querySelectorAll%28%250A%2509%2509%2560.%2524%257Bheader%257D-tabs%2520.%2524%257BtabsClass%257D-tabs-btn-container%2520.tabs-btn%2560%250A%2509%29%253B%250A%2509const%2520tabs_content%2520%253D%2520document.querySelectorAll%28%250A%2509%2509%2560.%2524%257Bheader%257D-tabs%2520.%2524%257BtabsClass%257D-tabs-content%2560%250A%2509%29%253B%250A%250A%2509const%2520clearAlltabs%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509tabs_btn.forEach%28%28item%29%2520%253D%253E%2520%257B%250A%2509%2509%2509if%2520%28item.classList.contains%28%2560%2524%257BtabsClass%257D-tabs-btn-active%2560%29%29%2520%257B%250A%2509%2509%2509%2509item.classList.remove%28%2560%2524%257BtabsClass%257D-tabs-btn-active%2560%29%253B%250A%2509%2509%2509%257D%250A%2509%2509%257D%29%253B%250A%2509%2509tabs_content.forEach%28%28item%29%2520%253D%253E%2520%257B%250A%2509%2509%2509item.style.display%2520%253D%2520%2560none%2560%253B%250A%2509%2509%257D%29%253B%250A%2509%257D%253B%250A%2509const%2520setActiveTab%2520%253D%2520%28itemIndex%29%2520%253D%253E%2520%257B%250A%2509%2509clearAlltabs%28%29%253B%250A%2509%2509tabs_btn%255BitemIndex%255D.classList.add%28%2560%2524%257BtabsClass%257D-tabs-btn-active%2560%29%253B%250A%2509%2509tabs_content%255BitemIndex%255D.style.display%2520%253D%2520%2560block%2560%253B%250A%2509%257D%253B%250A%250A%2509for%2520%28let%2520i%2520%253D%25200%253B%2520i%2520%253C%2520tabs_btn.length%253B%2520i%252B%252B%29%2520%257B%250A%2509%2509tabs_btn%255Bi%255D.addEventListener%28%2560click%2560%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509%2509setActiveTab%28i%29%253B%250A%2509%2509%257D%29%253B%250A%2509%257D%250A%2509%252F%252F%2520By%2520default%2520the%2520first%2520tab%2520will%2520be%2520active%250A%2509setActiveTab%280%29%253B%250A%257D%253B%250A%250AhandleTabs%28%2522vertical%2522%29"
		class="rui-code--iframe"
		sandbox="allow-scripts allow-same-origin">
	  </iframe>`,
		sandboxURLClass: ".vertical-tabs .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/tabs-final-rhlov?file=/src/styles.css:679-5951",
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
		elementCodeInnerText: `<iframe src="https://carbon.now.sh/embed/bWrcgBzy6GcoBKpLN4Og"
		class="rui-code--iframe"
		sandbox="allow-scripts allow-same-origin">
	</iframe>`,
		elementJSCodeClassPath:
			".authentication-tabs .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `<iframe
		src="https://carbon.now.sh/embed/x1qkWv2xQ2hBpPTal2pI"
		class="rui-code--iframe"
		sandbox="allow-scripts allow-same-origin">
	  </iframe>`,
		sandboxURLClass: ".authentication-tabs .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/tabs-final-rhlov?file=/src/styles.css:679-5951",
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
		src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Carticle%2520class%253D%2522profile-tabs-container%2522%253E%250A%2520%2520%2520%2520%253Carticle%2520class%253D%2522profile-tabs-btn-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522tabs-btn%2522%253EItem%2520one%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522tabs-btn%2522%253EItem%2520two%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522tabs-btn%2522%253EItem%2520three%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253C%252Farticle%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522profile-tabs-content%2522%253EItem%25201%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522profile-tabs-content%2522%253EItem%25202%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522profile-tabs-content%2522%253EItem%25203%253C%252Fdiv%253E%250A%253C%252Farticle%253E"
		class="rui-code--iframe"
		sandbox="allow-scripts allow-same-origin">
	  </iframe>`,
		elementJSCodeClassPath:
			".profile-tabs .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `<iframe
		src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520handleTabs%2520%253D%2520%28header%252C%2520tabsClass%29%2520%253D%253E%2520%257B%250A%2509const%2520tabs_btn%2520%253D%2520document.querySelectorAll%28%250A%2509%2509%2560.%2524%257Bheader%257D-tabs%2520.%2524%257BtabsClass%257D-tabs-btn-container%2520.tabs-btn%2560%250A%2509%29%253B%250A%2509const%2520tabs_content%2520%253D%2520document.querySelectorAll%28%250A%2509%2509%2560.%2524%257Bheader%257D-tabs%2520.%2524%257BtabsClass%257D-tabs-content%2560%250A%2509%29%253B%250A%250A%2509const%2520clearAlltabs%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509tabs_btn.forEach%28%28item%29%2520%253D%253E%2520%257B%250A%2509%2509%2509if%2520%28item.classList.contains%28%2560%2524%257BtabsClass%257D-tabs-btn-active%2560%29%29%2520%257B%250A%2509%2509%2509%2509item.classList.remove%28%2560%2524%257BtabsClass%257D-tabs-btn-active%2560%29%253B%250A%2509%2509%2509%257D%250A%2509%2509%257D%29%253B%250A%2509%2509tabs_content.forEach%28%28item%29%2520%253D%253E%2520%257B%250A%2509%2509%2509item.style.display%2520%253D%2520%2560none%2560%253B%250A%2509%2509%257D%29%253B%250A%2509%257D%253B%250A%2509const%2520setActiveTab%2520%253D%2520%28itemIndex%29%2520%253D%253E%2520%257B%250A%2509%2509clearAlltabs%28%29%253B%250A%2509%2509tabs_btn%255BitemIndex%255D.classList.add%28%2560%2524%257BtabsClass%257D-tabs-btn-active%2560%29%253B%250A%2509%2509tabs_content%255BitemIndex%255D.style.display%2520%253D%2520%2560block%2560%253B%250A%2509%257D%253B%250A%250A%2509for%2520%28let%2520i%2520%253D%25200%253B%2520i%2520%253C%2520tabs_btn.length%253B%2520i%252B%252B%29%2520%257B%250A%2509%2509tabs_btn%255Bi%255D.addEventListener%28%2560click%2560%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509%2509setActiveTab%28i%29%253B%250A%2509%2509%257D%29%253B%250A%2509%257D%250A%2509%252F%252F%2520By%2520default%2520the%2520first%2520tab%2520will%2520be%2520active%250A%2509setActiveTab%280%29%253B%250A%257D%253B%250A%250AhandleTabs%28%2522profile%2522%29"
		class="rui-code--iframe"
		sandbox="allow-scripts allow-same-origin">
	  </iframe>`,
		sandboxURLClass: ".profile-tabs .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/tabs-final-rhlov?file=/src/styles.css:679-5951",
	},
];

export { elements };
