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
		name: "Text Avatar",
		elementClassName: ".text-avatar",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .text-avatar .rui-import-html",
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
		style="width: 400px; height: 187px;" class="rui-code--iframe"
		sandbox="allow-scripts allow-same-origin">
	  </iframe>`,
		elementJSCodeClassPath:
			".text-avatar .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".text-avatar .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/avatar-2zoxu?file=/index.html:1356-2687",
	},
	{
		name: "Profile Avatar",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
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
		src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Carticle%2520class%253D%2522avatar-container%2522%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fmedia%252Fimages%252Fprofile.jpeg%2522%2520alt%253D%2522User%2520Profile%2520Picture%2522%2520class%253D%2522avatar%2520xl%2522%2520%252F%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fmedia%252Fimages%252Fprofile.jpeg%2522%2520alt%253D%2522User%2520Profile%2520Picture%2522%2520class%253D%2522avatar%2520l%2522%2520%252F%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fmedia%252Fimages%252Fprofile.jpeg%2522%2520alt%253D%2522User%2520Profile%2520Picture%2522%2520class%253D%2522avatar%2520m%2522%2520%252F%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fmedia%252Fimages%252Fprofile.jpeg%2522%2520alt%253D%2522User%2520Profile%2520Picture%2522%2520class%253D%2522avatar%2520s%2522%2520%252F%253E%250A%253C%252Farticle%253E"
		style="width: 806px; height: 187px;" class="rui-code--iframe"
		sandbox="allow-scripts allow-same-origin">
	  </iframe>`,
		elementJSCodeClassPath:
			".profile-avatar .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".profile-avatar .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/avatar-2zoxu?file=/index.html:1356-2687",
	},
	{
		name: "Status Avatar",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
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
		src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522avatar-container%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar-badge-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar-media--container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fmedia%252Fimages%252Fprofile.jpeg%2522%2520alt%253D%2522User%2520Profile%2520Picture%2522%2520class%253D%2522avatar%2520xl%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522avatar-badge%2520avatar-badge-xl%2520online%2522%253E%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar-badge-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar-media--container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fmedia%252Fimages%252Fprofile.jpeg%2522%2520alt%253D%2522User%2520Profile%2520Picture%2522%2520class%253D%2522avatar%2520l%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522avatar-badge%2520avatar-badge-l%2520online%2522%253E%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar-badge-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar-media--container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fmedia%252Fimages%252Fprofile.jpeg%2522%2520alt%253D%2522User%2520Profile%2520Picture%2522%2520class%253D%2522avatar%2520m%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522avatar-badge%2520avatar-badge-m%2520away%2522%253E%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar-badge-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar-media--container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fmedia%252Fimages%252Fprofile.jpeg%2522%2520alt%253D%2522User%2520Profile%2520Picture%2522%2520class%253D%2522avatar%2520s%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522avatar-badge%2520avatar-badge-s%2520busy%2522%253E%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
		style="width: 873px; height: 559px;" class="rui-code--iframe"
		sandbox="allow-scripts allow-same-origin">
	  </iframe>`,
		elementJSCodeClassPath:
			".status-avatar .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".status-avatar .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/avatar-2zoxu?file=/index.html:1356-2687",
	},
];

export { elements };