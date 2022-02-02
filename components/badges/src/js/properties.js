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
		name: "Icon Badges",
		elementClassName: ".icon-badges",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .icon-badges .rui-import-html",
		elementCodeFilePath: "./src/html/icon-badges.html",
		elementCodeLocation:
			".icon-badges .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".icon-badges .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".icon-badges .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".icon-badges .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
		src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Csection%2520class%253D%2522badge-alignment--container%2522%253E%250A%2520%2520%2520%2520%253Carticle%2520class%253D%2522badge-alignment%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EVertical%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522radio%2522%2520name%253D%2522verticle%2522%2520id%253D%2522top%2522%2520checked%253D%2522true%2522%2520value%253D%2522top%2522%2520aria-label%253D%2522Select%2520Top%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Top%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522radio%2522%2520name%253D%2522verticle%2522%2520id%253D%2522bottom%2522%2520value%253D%2522bottom%2522%2520aria-label%253D%2522Select%2520Bottom%2522%2520%252F%253E%2520Bottom%250A%2520%2520%2520%2520%253C%252Farticle%253E%250A%2520%2520%2520%2520%253Carticle%2520class%253D%2522badge-alignment%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EHorizontal%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522radio%2522%2520name%253D%2522horizontal%2522%2520id%253D%2522right%2522%2520checked%253D%2522true%2522%2520value%253D%2522right%2522%2520aria-label%253D%2522Select%2520Right%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Right%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522radio%2522%2520name%253D%2522horizontal%2522%2520id%253D%2522left%2522%2520value%253D%2522left%2522%2520aria-label%253D%2522Select%2520Left%2522%2520%252F%253E%2520Left%250A%2520%2520%2520%2520%253C%252Farticle%253E%250A%253C%252Fsection%253E%250A%253Cdiv%2520class%253D%2522badge-container%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522badge%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522badge-icon%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-user%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522badge-text%2520top%2520right%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252024%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522badge%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522badge-icon%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fab%2520fa-twitter%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522badge-text%2520top%2520right%2522%253E14%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522badge%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522badge-icon%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522badge-text%2520top%2520right%2522%253E10%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522badge%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522badge-icon%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-bell%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522badge-text%2520top%2520right%2522%253E18%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
		 class="rui-code--iframe"
		sandbox="allow-scripts allow-same-origin">
	  </iframe>`,
		elementJSCodeClassPath:
			".icon-badges .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `<iframe
		src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520handleIconBadge%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2509%252F%252F%2520Icon%2520batch%2520Alignment%250A%250A%2509const%2520badge_text%2520%253D%2520document.querySelectorAll%28%2522.badge-text%2522%29%253B%250A%2509const%2520top%2520%253D%2520document.querySelector%28%2522%2523top%2522%29%253B%250A%2509const%2520bottom%2520%253D%2520document.querySelector%28%2522%2523bottom%2522%29%253B%250A%2509const%2520right%2520%253D%2520document.querySelector%28%2522%2523right%2522%29%253B%250A%2509const%2520left%2520%253D%2520document.querySelector%28%2522%2523left%2522%29%253B%250A%250A%2509top.addEventListener%28%2522change%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509badge_text.forEach%28%28item%29%2520%253D%253E%2520%257B%250A%2509%2509%2509if%2520%28item.classList.contains%28%2522bottom%2522%29%29%2520%257B%250A%2509%2509%2509%2509item.classList.remove%28%2522bottom%2522%29%253B%250A%2509%2509%2509%257D%250A%2509%2509%2509item.classList.add%28%2522top%2522%29%253B%250A%2509%2509%257D%29%253B%250A%2509%257D%29%253B%250A%250A%2509bottom.addEventListener%28%2522change%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509badge_text.forEach%28%28item%29%2520%253D%253E%2520%257B%250A%2509%2509%2509if%2520%28item.classList.contains%28%2522top%2522%29%29%2520%257B%250A%2509%2509%2509%2509item.classList.remove%28%2522top%2522%29%253B%250A%2509%2509%2509%257D%250A%2509%2509%2509item.classList.add%28%2522bottom%2522%29%253B%250A%2509%2509%257D%29%253B%250A%2509%257D%29%253B%250A%250A%2509left.addEventListener%28%2522change%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509badge_text.forEach%28%28item%29%2520%253D%253E%2520%257B%250A%2509%2509%2509if%2520%28item.classList.contains%28%2522rightt%2522%29%29%2520%257B%250A%2509%2509%2509%2509item.classList.remove%28%2522rightt%2522%29%253B%250A%2509%2509%2509%257D%250A%2509%2509%2509item.classList.add%28%2522left%2522%29%253B%250A%2509%2509%257D%29%253B%250A%2509%257D%29%253B%250A%2509right.addEventListener%28%2522change%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509badge_text.forEach%28%28item%29%2520%253D%253E%2520%257B%250A%2509%2509%2509if%2520%28item.classList.contains%28%2522left%2522%29%29%2520%257B%250A%2509%2509%2509%2509item.classList.remove%28%2522left%2522%29%253B%250A%2509%2509%2509%257D%250A%2509%2509%2509item.classList.add%28%2522right%2522%29%253B%250A%2509%2509%257D%29%253B%250A%2509%257D%29%253B%250A%257D%253B%250A%250AhandleIconBadge%28%29%253B"
		class="rui-code--iframe"
		sandbox="allow-scripts allow-same-origin">
	  </iframe>`,
		sandboxURLClass: ".icon-badges .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/badge-j6hc6?file=/index.html:737-2213",
	},
	{
		name: "Text Badges",
		elementClassName: ".text-badges",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .text-badges .rui-import-html",
		elementCodeFilePath: "./src/html/text-badges.html",
		elementCodeLocation:
			".text-badges .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".text-badges .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".text-badges .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".text-badges .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
		src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522badge-container%2522%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522badge-btn%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522badge-btn--text%2522%253ENotification%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522badge-btn--counter%2522%253E1%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522badge-btn%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522badge-btn--text%2522%253EProfile%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522badge-btn--counter%2522%253E3%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fbutton%253E%250A%253C%252Fdiv%253E"
		class="rui-code--iframe"
		sandbox="allow-scripts allow-same-origin">
	  </iframe>`,
		elementJSCodeClassPath:
			".text-badges .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".text-badges .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/badge-j6hc6?file=/index.html:737-2213",
	},
];

export { elements };
