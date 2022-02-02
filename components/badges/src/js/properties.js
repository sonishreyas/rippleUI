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
		src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Carticle%2520class%253D%2522card%2520vertical%2520card-shadow%2522%253E%250A%2520%2520%2520%2520%253Csection%2520class%253D%2522card-image-container%2520flex-jc-ac%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fmedia%252Fimages%252Fsneaker.png%2522%2520alt%253D%2522Puma%2520Sneakers%2522%2520class%253D%2522card-image%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fsection%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522card-btn%2520card-wishlist%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522wishlist-icon%2522%253E%253Ci%2520class%253D%2522far%2520fa-heart%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522wishlist-text%2522%253EAdd%2520to%2520wishlist%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Csection%2520class%253D%2522card-content%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%2520class%253D%2522card-title%2522%253EPuma%2520White%2520Sneakers%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522card-category%2522%253EMen%2520Sneakers%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522card-price-tag%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253ERs.%25202999%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cstrike%253E5999%253C%252Fstrike%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522discount%2522%253E%2850%2525%29%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%253C%252Fsection%253E%250A%2520%2520%2520%2520%253Csection%2520class%253D%2522card-tag%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522card-review%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E4%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522review-star%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-star%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%253C%252Fsection%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522card-btn%2520card-cart%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522cart-icon%2522%253E%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522cart-text%2522%253EAdd%2520to%2520Cart%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fbutton%253E%250A%253C%252Farticle%253E"
		style="width: 1024px; height: 473px;" class="rui-code--iframe"
		sandbox="allow-scripts allow-same-origin">
	  </iframe>`,
		elementJSCodeClassPath:
			".icon-badges .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
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
		src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Carticle%2520class%253D%2522card%2520vertical%2520card-shadow%2522%253E%250A%2520%2520%2520%2520%253Csection%2520class%253D%2522card-image-container%2520flex-jc-ac%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fmedia%252Fimages%252Fsneaker.png%2522%2520alt%253D%2522Puma%2520Sneakers%2522%2520class%253D%2522card-image%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fsection%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522card-btn%2520card-wishlist%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522wishlist-text%2522%253E%253Ci%2520class%253D%2522far%2520fa-heart%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522wishlist-text%2522%253EAdd%2520to%2520wishlist%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Csection%2520class%253D%2522card-content%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%2520class%253D%2522card-title%2522%253EPuma%2520White%2520Sneakers%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522card-category%2522%253EMen%2520Sneakers%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522card-price-tag%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253ERs.%25202999%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cstrike%253E5999%253C%252Fstrike%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522discount%2522%253E%2850%2525%29%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%253C%252Fsection%253E%250A%2520%2520%2520%2520%253Csection%2520class%253D%2522card-tag%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522card-review%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E4%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522review-star%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-star%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%253C%252Fsection%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522card-btn%2520card-cart%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522cart-text%2522%253E%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522cart-text%2522%253EAdd%2520to%2520Cart%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fbutton%253E%250A%253C%252Farticle%253E"
		style="width: 1024px; height: 473px;" class="rui-code--iframe"
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
