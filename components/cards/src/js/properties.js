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
		name: "Text Only Cards",
		elementClassName: ".text-cards",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .text-cards .rui-import-html",
		elementCodeFilePath: "./src/html/text-cards.html",
		elementCodeLocation:
			".text-cards .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".text-cards .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".text-cards .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".text-cards .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Carticle%2520class%253D%2522card%2520basic-card%2520flex-row%2520justify-content-center%2520align-center%2520flex-wrap%2520card-shadow%2520p-10%2520b-radius-2%2522%253E%250A%2520%2520%2520%2520%253Ch2%2520class%253D%2522name%2520p-2%2522%253EShreyas%2520Soni%253C%252Fh2%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522address%2520p-2%2522%253ED-203%252C%2520Nisarg%2520Nirman%252C%2520Kokne%2520Chowk%2520Pimple%2520Saudagar%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522city%2520p-2%2522%253EPune%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522state%2520p-2%2522%253EMaharashtra%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522pincode%2520p-2%2522%253E411027%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522ph-number%2520p-2%2522%253E%253Cb%253EMobile%2520Number%253A%2520%253C%252Fb%253E%25207894561230%253C%252Fp%253E%250A%253C%252Farticle%253E"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeBtnClassPath:
			".text-cards .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".text-cards .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".text-cards .rui-code-tabs-sandbox--link",
		sandboxURL: "https://codesandbox.io/s/cards-final-rhlov",
	},
	{
		name: "Vertical Cards",
		elementClassName: ".vertical-cards",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .vertical-cards .rui-import-html",
		elementCodeFilePath: "./src/html/vertical-cards.html",
		elementCodeLocation:
			".vertical-cards .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".vertical-cards .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".vertical-cards .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".vertical-cards .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Carticle%2520class%253D%2522card%2520vertical%2520card-shadow%2520p-5%2520b-radius-2%2522%253E%250A%2520%2520%2520%2520%253Csection%2520class%253D%2522card-image-container%2520flex-row%2520%250Ajustify-content-center%2520align-center%2520flex-wrap%2520b-radius-2%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fraw.githubusercontent.com%252Fsonishreyas%250A%252FrippleUI%252Fdev%252Fcomponents%252F%250Amedia%252Fimages%252Fsneaker.png%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522Puma%2520Sneakers%2522%2520class%253D%2522card-image%2520b-radius-2%2520mt-2%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fsection%253E%250A%2520%2520%2520%2520%253Cbutton%250A%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522outline-btn%2520p-0%2520b-radius-2%2520text-bold%250A%2520card-wishlist%2520m-5%2520flex-row%2520justify-content-center%2520align-center%250A%2520flex-gap-1%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522wishlist-icon%2522%253E%253Ci%2520class%253D%2522far%2520fa-heart%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522wishlist-text%2522%253EAdd%2520to%2520wishlist%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Csection%2520class%253D%2522card-content%2520p-5%2520pb-0%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%2520class%253D%2522card-title%2522%253EPuma%2520White%2520Sneakers%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522card-category%2522%253EMen%2520Sneakers%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522card-price-tag%2520mt-3%2520flex-row%2520align-center%250A%2520flex-gap-half%2520text-bold%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522p-0%2520m-0%2522%253ERs.%25202999%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cstrike%2520class%253D%2522p-0%2520m-0%2522%253E5999%253C%252Fstrike%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522discount%2520p-0%2520m-0%2522%253E%2850%2525%29%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%253C%252Fsection%253E%250A%2520%2520%2520%2520%253Csection%2520class%253D%2522card-tag%2520m-2%2520px-1%2520py-0%2520b-radius-1%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522card-review%2520m-3%2520p-0%2520text-bold%2520flex-row%2520align-center%2520%250Aflex-gap-half%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E4%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522review-star%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-star%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%253C%252Fsection%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522primary-btn%2520p-0%2520b-radius-2%2520text-bold%2520flex-row%250A%2520justify-content-center%2520align-center%2520flex-gap-1%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522cart-icon%2522%253E%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522cart-text%2522%253EAdd%2520to%2520Cart%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fbutton%253E%250A%253C%252Farticle%253E"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeBtnClassPath:
			".vertical-cards .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".vertical-cards .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".vertical-cards .rui-code-tabs-sandbox--link",
		sandboxURL: "https://codesandbox.io/s/cards-final-rhlov",
	},
	{
		name: "Text Overlay Cards",
		elementClassName: ".text-overlay-cards",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .text-overlay-cards .rui-import-html",
		elementCodeFilePath: "./src/html/text-overlay-cards.html",
		elementCodeLocation:
			".text-overlay-cards .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".text-overlay-cards .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".text-overlay-cards .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".text-overlay-cards .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Carticle%2520class%253D%2522card%2520vertical%2520card-shadow%2520p-5%2520b-radius-2%2522%253E%250A%2520%2520%2520%2520%253Carticle%2520class%253D%2522card-text-overlay%2520flex-row%2520%250Ajustify-content-center%2520align-center%2520flex-wrap%2520b-radius-2%2520text-center%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522overlay-text%2520text-bold%2522%253EOut%2520of%2520Stock%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Farticle%253E%250A%2520%2520%2520%2520%253Csection%2520class%253D%2522card-image-container%2520flex-row%2520%250Ajustify-content-center%2520align-center%2520flex-wrap%2520b-radius-2%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fraw.githubusercontent.com%252Fsonishreyas%252F%250ArippleUI%252Fdev%252Fcomponents%252Fmedia%252Fimages%252Fsneaker.png%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522Puma%2520Sneakers%2522%2520class%253D%2522card-image%2520b-radius-2%2520mt-2%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fsection%253E%250A%2520%2520%2520%2520%253Cbutton%250A%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522outline-btn%2520p-0%2520b-radius-2%2520text-bold%250A%2520card-wishlist%2520m-5%2520flex-row%2520justify-content-center%2520align-center%2520flex-gap-1%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522wishlist-icon%2522%253E%253Ci%2520class%253D%2522far%2520fa-heart%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522wishlist-text%2522%253EAdd%2520to%2520wishlist%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Csection%2520class%253D%2522card-content%2520p-5%2520pb-0%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%2520class%253D%2522card-title%2522%253EPuma%2520White%2520Sneakers%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522card-category%2522%253EMen%2520Sneakers%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522card-price-tag%2520mt-3%2520flex-row%2520align-center%2520%250Aflex-gap-half%2520text-bold%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522p-0%2520m-0%2522%253ERs.%25202999%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cstrike%2520class%253D%2522p-0%2520m-0%2522%253E5999%253C%252Fstrike%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522discount%2520p-0%2520m-0%2522%253E%2850%2525%29%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%253C%252Fsection%253E%250A%2520%2520%2520%2520%253Csection%2520class%253D%2522card-tag%2520m-2%2520px-1%2520py-0%2520b-radius-1%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522card-review%2520m-3%2520p-0%2520text-bold%2520flex-row%2520%250Aalign-center%2520flex-gap-half%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E4%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522review-star%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-star%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%253C%252Fsection%253E%250A%253C%252Farticle%253E"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
		</iframe>`,
		elementJSCodeBtnClassPath:
			".text-overlay-cards .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".text-overlay-cards .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".text-overlay-cards .rui-code-tabs-sandbox--link",
		sandboxURL: "https://codesandbox.io/s/cards-final-rhlov",
	},
	{
		name: "Cards with dismiss",
		elementClassName: ".dismiss-cards",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .dismiss-cards .rui-import-html",
		elementCodeFilePath: "./src/html/dismiss-cards.html",
		elementCodeLocation:
			".dismiss-cards .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".dismiss-cards .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".dismiss-cards .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".dismiss-cards .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Carticle%2520class%253D%2522card%2520vertical%2520card-shadow%2520p-5%2520b-radius-2%2522%253E%250A%2520%2520%2520%2520%253Csection%2520class%253D%2522card-image-container%2520flex-row%2520%250Ajustify-content-center%2520align-center%2520flex-wrap%2520b-radius-2%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fraw.githubusercontent.com%252Fsonishreyas%252F%250ArippleUI%252Fdev%252Fcomponents%252Fmedia%252Fimages%252Fsneaker.png%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522Puma%2520Sneakers%2522%2520class%253D%2522card-image%2520b-radius-2%2520mt-2%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fsection%253E%250A%2520%2520%2520%2520%253Cbutton%250A%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522outline-btn%2520p-0%2520b-radius-2%2520text-bold%2520%250Acard-wishlist%2520m-5%2520flex-row%2520justify-content-center%2520align-center%2520flex-gap-1%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522wishlist-icon%2522%253E%253Ci%2520class%253D%2522far%2520fa-heart%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522wishlist-text%2522%253EAdd%2520to%2520wishlist%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Csection%2520class%253D%2522card-content%2520p-5%2520pb-0%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%2520class%253D%2522card-title%2522%253EPuma%2520White%2520Sneakers%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522card-category%2522%253EMen%2520Sneakers%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522card-price-tag%2520mt-3%2520flex-row%2520%250Aalign-center%2520flex-gap-half%2520text-bold%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522p-0%2520m-0%2522%253ERs.%25202999%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cstrike%2520class%253D%2522p-0%2520m-0%2522%253E5999%253C%252Fstrike%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522discount%2520p-0%2520m-0%2522%253E%2850%2525%29%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%253C%252Fsection%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522primary-btn%2520p-0%2520b-radius-2%2520text-bold%2520flex-row%250A%2520justify-content-center%2520align-center%2520flex-gap-1%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522cart-icon%2522%253E%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522cart-text%2522%253EAdd%2520to%2520Cart%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Ci%2520class%253D%2522far%2520fa-times-circle%2520rui-cross%250A%2520b-radius-circle%2520card-dismiss-btn%2520m-3%2520p-1%2522%253E%253C%252Fi%253E%250A%253C%252Farticle%253E"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeBtnClassPath:
			".dismiss-cards .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".dismiss-cards .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520handleDismissCard%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2509const%2520dismissCardBtn%2520%253D%2520document.querySelector%28%250A%2509%2509%2522.dismiss-cards%2520.card-dismiss-btn%2522%250A%2509%29%253B%250A%2509const%2520card%2520%253D%2520document.querySelector%28%2522.dismiss-cards%2520.card%2522%29%253B%250A%2509dismissCardBtn.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509card.classList.add%28%2522inactive%2522%29%253B%250A%2509%257D%29%253B%250A%257D%253B%250A%250Aexport%2520%257B%2520handleDismissCard%2520%257D%253B"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		sandboxURLClass: ".dismiss-cards .rui-code-tabs-sandbox--link",
		sandboxURL: "https://codesandbox.io/s/cards-final-rhlov",
	},
	{
		name: "Horizontal Cards",
		elementClassName: ".horizontal-cards",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .horizontal-cards .rui-import-html",
		elementCodeFilePath: "./src/html/horizontal-cards.html",
		elementCodeLocation:
			".horizontal-cards .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".horizontal-cards .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".horizontal-cards .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".horizontal-cards .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Carticle%2520class%253D%2522card%2520horizontal%2520card-shadow%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522horizontal-card-img--container%2520flex-row%2520justify-content-center%2520align-center%2520flex-wrap%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522..%252Fmedia%252Fimages%252Fsneaker.png%2522%2520alt%253D%2522Puma%2520Sneakers%2522%2520class%253D%2522horizontal-card-img%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522horizontal-card-text--container%2520flex-column%2520flex-gap-1%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253EPuma%2520White%2520Sneakers%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EPUMA%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522horizontal-card-btn-container%2520flex-row%2520align-center%2520flex-gap-1%2520flex-wrap%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522card-btn%2520card-cart%2520horizontal-card-btn-primary%2520flex-row%2520justify-content-center%2520align-center%2520flex-gap-1%2520flex-grow-1%2520text-bold%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522cart-icon%2522%253E%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522cart-text%2522%253EAdd%2520to%2520Cart%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522horizontal-card-details-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253ESpecifications%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522specification-column%2520flex-row%2520align-center%2520flex-wrap%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cform%2520class%253D%2522specifications-form%2520flex-column%2520flex-grow-1%2520flex-wrap%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Csection%2520class%253D%2522specification%2520flex-column%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Clabel%2520for%253D%2522type%2522%2520class%253D%2522specification-key%2522%253EType%253C%252Flabel%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522text%2522%2520value%253D%2522Sneakers%2522%2520class%253D%2522specification-value%2522%2520readonly%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520aria-label%253D%2522Shoes%2520Type%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fsection%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fform%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Farticle%253E"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeBtnClassPath:
			".horizontal-cards .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".horizontal-cards .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `NA`,
		sandboxURLClass: ".horizontal-cards .rui-code-tabs-sandbox--link",
		sandboxURL: "https://codesandbox.io/s/cards-final-rhlov",
	},
];

export { elements };
