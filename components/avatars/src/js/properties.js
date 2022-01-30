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
		name: "Text Avatar",
		elementClassName: ".text-avatar",
		rootCodeTabFilePath: "./src/html/code-tabs-root.html",
		rootCodeLocation: `.main .rui-main--sub-heading .text-avatar .rui-import-html`,
		elementCodeFilePath: "./src/html/text-avatar.html",
		elementCodeLocation:
			".text-avatar .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".text-avatar .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".text-avatar .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".text-avatar .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
		src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522avatar-container%2522%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522avatar%2520avatar-text%2520xl%2522%253ESS%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522avatar%2520avatar-text%2520l%2522%253ESS%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522avatar%2520avatar-text%2520m%2522%253ESS%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522avatar%2520avatar-text%2520s%2522%253ESS%253C%252Fp%253E%250A%253C%252Fdiv%253E"
		style="width: 400px; height: 187px; class="rui-code--iframe"
		sandbox="allow-scripts allow-same-origin">
	  </iframe>`,
		elementJSCodeClassPath:
			".text-avatar .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `none`,
		sandboxURLClass: ".text-avatar .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/avatar-2zoxu?file=/index.html:1356-2687",
	},
	{
		name: "Profile Avatar",
		rootCodeTabFilePath: "./src/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .profile-avatar .rui-import-html",
		elementCodeFilePath: "./src/html/profile-avatar.html",
		elementCodeLocation:
			".profile-avatar .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".profile-avatar .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".profile-avatar .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".profile-avatar .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
		src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Carticle%2520class%253D%2522avatar-container%2522%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fsrc%252Fmedia%252Fimages%252Fprofile.jpeg%2522%2520alt%253D%2522Blank%2520Profile%2520Picture%2522%2520class%253D%2522avatar%2520xl%2522%2520%252F%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fsrc%252Fmedia%252Fimages%252Fprofile.jpeg%2522%2520alt%253D%2522Blank%2520Profile%2520Picture%2522%2520class%253D%2522avatar%2520l%2522%2520%252F%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fsrc%252Fmedia%252Fimages%252Fprofile.jpeg%2522%2520alt%253D%2522Blank%2520Profile%2520Picture%2522%2520class%253D%2522avatar%2520m%2522%2520%252F%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fsrc%252Fmedia%252Fimages%252Fprofile.jpeg%2522%2520alt%253D%2522Blank%2520Profile%2520Picture%2522%2520class%253D%2522avatar%2520s%2522%2520%252F%253E%250A%253C%252Farticle%253E"
		style="width: 839px; height: 187px; class="rui-code--iframe""
		sandbox="allow-scripts allow-same-origin">
	  </iframe>`,
		elementJSCodeClassPath:
			".profile-avatar .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `none`,
		sandboxURLClass: ".profile-avatar .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/avatar-2zoxu?file=/index.html:1356-2687",
	},
	{
		name: "Status Avatar",
		rootCodeTabFilePath: "./src/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .status-avatar .rui-import-html",
		elementCodeFilePath: "./src/html/status-avatar.html",
		elementCodeLocation:
			".status-avatar .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".status-avatar .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".status-avatar .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".status-avatar .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
		src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=0px&dsblur=0px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Carticle%2520class%253D%2522rui-alert-type--container%2522%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522rui-alert-type%2520error-btn%2522%253EError%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522rui-alert-type%2520warning-btn%2522%253EWarning%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522rui-alert-type%2520success-btn%2522%253ESuccess%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522rui-alert-type%2520info-btn%2522%253EInfo%253C%252Fbutton%253E%250A%253C%252Farticle%253E%250A%253Carticle%2520class%253D%2522rui-alert--container%2520error%2520inactive%2522%253E%250A%2520%2520%2520%2520%253Cspan%253E%253Ci%2520class%253D%2522fas%2520fa-exclamation-circle%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522rui-alert--text%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Error%2520while%2520sending%2520data.%250A%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%253Ci%2520class%253D%2522far%2520fa-times-circle%2520rui-cross%2522%253E%253C%252Fi%253E%250A%253C%252Farticle%253E%250A%253Carticle%2520class%253D%2522rui-alert--container%2520warning%2520inactive%2522%253E%250A%2520%2520%2520%2520%253Cspan%253E%253Ci%2520class%253D%2522fas%2520fa-exclamation-triangle%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522rui-alert--text%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Warning.%250A%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%253Ci%2520class%253D%2522far%2520fa-times-circle%2520rui-cross%2522%253E%253C%252Fi%253E%250A%253C%252Farticle%253E%250A%253Carticle%2520class%253D%2522rui-alert--container%2520success%2520inactive%2522%253E%250A%2520%2520%2520%2520%253Cspan%253E%253Ci%2520class%253D%2522fas%2520fa-check-circle%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522rui-alert--text%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Success.%250A%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%253Ci%2520class%253D%2522far%2520fa-times-circle%2520rui-cross%2522%253E%253C%252Fi%253E%250A%253C%252Farticle%253E%250A%253Carticle%2520class%253D%2522rui-alert--container%2520info%2520inactive%2522%253E%250A%2520%2520%2520%2520%253Cspan%253E%253Ci%2520class%253D%2522fas%2520fa-info%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522rui-alert--text%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Information.%250A%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%253Ci%2520class%253D%2522far%2520fa-times-circle%2520rui-cross%2522%253E%253C%252Fi%253E%250A%253C%252Farticle%253E"
		style="width: 569px; height: 707px;" class="rui-code--iframe"
		sandbox="allow-scripts allow-same-origin">
	  </iframe>`,
		elementJSCodeClassPath:
			".status-avatar .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `<iframe
		src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520changeClass%2520%253D%2520%28element%252C%2520removeClass%252C%2520addClass%29%2520%253D%253E%2520%257B%250A%2509element.classList.remove%28removeClass%29%253B%250A%2509element.classList.add%28addClass%29%253B%250A%257D%253B%250A%250Aconst%2520standardAlert%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2509const%2520error_btn%2520%253D%2520document.querySelector%28%2522.error-btn%2522%29%253B%250A%2509const%2520warning_btn%2520%253D%2520document.querySelector%28%2522.warning-btn%2522%29%253B%250A%2509const%2520info_btn%2520%253D%2520document.querySelector%28%2522.info-btn%2522%29%253B%250A%2509const%2520success_btn%2520%253D%2520document.querySelector%28%2522.success-btn%2522%29%253B%250A%2509const%2520error%2520%253D%2520document.querySelector%28%2522.error%2522%29%253B%250A%2509const%2520warning%2520%253D%2520document.querySelector%28%2522.warning%2522%29%253B%250A%2509const%2520info%2520%253D%2520document.querySelector%28%2522.info%2522%29%253B%250A%2509const%2520success%2520%253D%2520document.querySelector%28%2522.success%2522%29%253B%250A%2509const%2520rui_cross_success%2520%253D%2520document.querySelector%28%2522.success%2520.rui-cross%2522%29%253B%250A%2509const%2520rui_cross_info%2520%253D%2520document.querySelector%28%2522.info%2520.rui-cross%2522%29%253B%250A%2509const%2520rui_cross_error%2520%253D%2520document.querySelector%28%2522.error%2520.rui-cross%2522%29%253B%250A%2509const%2520rui_cross_warning%2520%253D%2520document.querySelector%28%2522.warning%2520.rui-cross%2522%29%253B%250A%250A%2509const%2520displayAlert%2520%253D%2520%28element%29%2520%253D%253E%2520%257B%250A%2509%2509if%2520%28error.classList.contains%28%2522active%2522%29%29%2520%257B%250A%2509%2509%2509changeClass%28error%252C%2520%2522active%2522%252C%2520%2522inactive%2522%29%253B%250A%2509%2509%257D%250A%2509%2509if%2520%28warning.classList.contains%28%2522active%2522%29%29%2520%257B%250A%2509%2509%2509changeClass%28warning%252C%2520%2522active%2522%252C%2520%2522inactive%2522%29%253B%250A%2509%2509%257D%250A%2509%2509if%2520%28info.classList.contains%28%2522active%2522%29%29%2520%257B%250A%2509%2509%2509changeClass%28info%252C%2520%2522active%2522%252C%2520%2522inactive%2522%29%253B%250A%2509%2509%257D%250A%2509%2509if%2520%28success.classList.contains%28%2522active%2522%29%29%2520%257B%250A%2509%2509%2509changeClass%28success%252C%2520%2522active%2522%252C%2520%2522inactive%2522%29%253B%250A%2509%2509%257D%250A%2509%2509changeClass%28element%252C%2520%2522inactive%2522%252C%2520%2522active%2522%29%253B%250A%2509%2509setTimeout%28%28%29%2520%253D%253E%2520changeClass%28element%252C%2520%2522active%2522%252C%2520%2522inactive%2522%29%252C%252010000%29%253B%250A%2509%257D%253B%250A%2509error_btn.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509displayAlert%28error%29%253B%250A%2509%257D%29%253B%250A%2509warning_btn.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509displayAlert%28warning%29%253B%250A%2509%257D%29%253B%250A%2509success_btn.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509displayAlert%28success%29%253B%250A%2509%257D%29%253B%250A%2509info_btn.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509displayAlert%28info%29%253B%250A%2509%257D%29%253B%250A%250A%2509rui_cross_success.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509changeClass%28success%252C%2520%2522active%2522%252C%2520%2522inactive%2522%29%253B%250A%2509%257D%29%253B%250A%250A%2509rui_cross_error.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509changeClass%28error%252C%2520%2522active%2522%252C%2520%2522inactive%2522%29%253B%250A%2509%257D%29%253B%250A%250A%2509rui_cross_info.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509changeClass%28info%252C%2520%2522active%2522%252C%2520%2522inactive%2522%29%253B%250A%2509%257D%29%253B%250A%250A%2509rui_cross_warning.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509changeClass%28warning%252C%2520%2522active%2522%252C%2520%2522inactive%2522%29%253B%250A%2509%257D%29%253B%250A%257D%253B%250A%250AstandardAlert%28%29"
		style="width: 679px; height: 1303px; class="rui-code--iframe"
		sandbox="allow-scripts allow-same-origin">
	  </iframe>`,
		sandboxURLClass: ".status-avatar .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/avatar-2zoxu?file=/index.html:1356-2687",
	},
];

export { elements };
