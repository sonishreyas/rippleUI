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
		name: "Basic Chips",
		elementClassName: ".basic-chips",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .basic-chips .rui-import-html",
		elementCodeFilePath: "./src/html/basic-chips.html",
		elementCodeLocation:
			".basic-chips .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".basic-chips .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".basic-chips .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".basic-chips .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
		src="https://carbon.now.sh/embed?bg=rgba%281%2C22%2C39%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=48px&wc=true&wa=true&pv=30px&ph=39px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522chip-container%2520flex-row%2520flex-wrap%2520flex-gap-1%2522%253E%250A%2520%2520%2520%2520%253Csection%2520class%253D%2522basic-chip%2520flex-row%2520align-center%2520flex-wrap%2520flex-gap-1%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522basic-chip-content%2522%253EHTML%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520onClick%253D%2522this.parentElement.style.display%2520%253D%2520%27none%27%2522%2520class%253D%2522chip-cross%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520x%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fsection%253E%250A%2520%2520%2520%2520%253Csection%2520class%253D%2522basic-chip%2520flex-row%2520align-center%2520flex-wrap%2520flex-gap-1%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522basic-chip-content%2522%253ECSS%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522chip-cross%2522%253Ex%253C%252Fp%253E%250A%2520%2520%2509%253C%252Fsection%253E%250A%253C%252Fdiv%253E"
		class="rui-code--iframe" scrolling="yes"
		sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeClassPath:
			".basic-chips .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `<iframe
		src="https://carbon.now.sh/embed?bg=rgba%281%2C22%2C39%2C1%29&t=night-owl&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=48px&wc=true&wa=true&pv=30px&ph=39px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520handleBasicChips%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2509const%2520chipCross%2520%253D%2520document.querySelectorAll%28%2522.chip-cross%2522%29%253B%250A%2509chipCross.forEach%28%28item%29%2520%253D%253E%2520%257B%250A%2509%2509item.addEventListener%28%250A%2509%2509%2509%2522click%2522%252C%250A%2509%2509%2509%28%29%2520%253D%253E%2520%28item.parentElement.style.display%2520%253D%2520%2522none%2522%29%250A%2509%2509%29%253B%250A%2509%257D%29%253B%250A%257D%253B%250A%250Aexport%2520%257B%2520handleBasicChips%2520%257D%253B"
		class="rui-code--iframe" scrolling="yes"
		sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		sandboxURLClass: ".basic-chips .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/chips-yyquw?file=/index.html:2282-2484",
	},
	{
		name: "Input Chips",
		elementClassName: ".input-chips",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .input-chips .rui-import-html",
		elementCodeFilePath: "./src/html/input-chips.html",
		elementCodeLocation:
			".input-chips .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".input-chips .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".input-chips .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".input-chips .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
		src="https://carbon.now.sh/embed?bg=rgba%281%2C22%2C39%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=48px&wc=true&wa=true&pv=30px&ph=39px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522chip-container%2520input-chip--container%2520input-chip-with-icon--container%2520%2520flex-row%2520flex-wrap%2520flex-gap-1%2522%253E%250A%2520%2520%2520%2520%253Cinput%2520type%253D%2522text%2522%2520class%253D%2522input-chip--input%2522%2520placeholder%253D%2522Add%2520here%2522%2520aria-label%253D%2522Add%2520chips%2520content%2520here%2522%2520%252F%253E%250A%253C%252Fdiv%253E"
		class="rui-code--iframe" scrolling="yes"
		sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeClassPath:
			".input-chips .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `<iframe
		src="https://carbon.now.sh/embed?bg=rgba%281%2C22%2C39%2C1%29&t=night-owl&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=48px&wc=true&wa=true&pv=30px&ph=39px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520handleInputChips%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2509const%2520inputChipInput%2520%253D%2520document.querySelector%28%250A%2509%2509%2522.input-chips%2520.input-chip--input%2522%250A%2509%29%253B%250A%2509const%2520inputChipContainer%2520%253D%2520document.querySelector%28%250A%2509%2509%2522.input-chips%2520.input-chip--container%2522%250A%2509%29%253B%250A%2509const%2520basicChipClasses%2520%253D%2520%255B%250A%2509%2509%2522basic-chip%2522%252C%250A%2509%2509%2522flex-row%2522%252C%250A%2509%2509%2522align-center%2522%252C%250A%2509%2509%2522flex-wrap%2522%252C%250A%2509%2509%2522flex-gap-1%2522%252C%250A%2509%255D%253B%250A%2509inputChipInput.addEventListener%28%2522keypress%2522%252C%2520%28e%29%2520%253D%253E%2520%257B%250A%2509%2509const%2520section%2520%253D%2520document.createElement%28%2522section%2522%29%253B%250A%2509%2509if%2520%28e.key%2520%253D%253D%253D%2520%2522Enter%2522%29%2520%257B%250A%2509%2509%2509const%2520section%2520%253D%2520document.createElement%28%2522section%2522%29%253B%250A%2509%2509%2509section.classList.add%28...basicChipClasses%29%253B%250A%2509%2509%2509const%2520pName%2520%253D%2520document.createElement%28%2522p%2522%29%253B%250A%2509%2509%2509pName.classList.add%28%2522chip-content%2522%29%253B%250A%2509%2509%2509const%2520pCross%2520%253D%2520document.createElement%28%2522p%2522%29%253B%250A%2509%2509%2509pCross.classList.add%28%2522chip-cross%2522%29%253B%250A%2509%2509%2509pName.innerText%2520%253D%2520inputChipInput.value%253B%250A%2509%2509%2509pCross.innerText%2520%253D%2520%2522x%2522%253B%250A%2509%2509%2509section.append%28pName%252C%2520pCross%29%253B%250A%2509%2509%2509inputChipContainer.insertBefore%28section%252C%2520inputChipInput%29%253B%250A%2509%2509%2509inputChipInput.value%2520%253D%2520%2522%2522%253B%250A%2509%2509%2509const%2520inputChipCross%2520%253D%2520document.querySelectorAll%28%250A%2509%2509%2509%2509%2522.input-chip--container%2520.chip-cross%2522%250A%2509%2509%2509%29%253B%250A%250A%2509%2509%2509inputChipCross.forEach%28%28item%29%2520%253D%253E%2520%257B%250A%2509%2509%2509%2509item.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509%2509%2509%2509item.parentElement.remove%28%29%253B%250A%2509%2509%2509%2509%257D%29%253B%250A%2509%2509%2509%257D%29%253B%250A%2509%2509%257D%250A%2509%257D%29%253B%250A%257D%253B%250A%250Aexport%2520%257B%2520handleInputChips%2520%257D%253B"
		class="rui-code--iframe" scrolling="yes"
		sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		sandboxURLClass: ".input-chips .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/chips-yyquw?file=/index.html:2282-2484",
	},
	{
		name: "Input Chips With Icon",
		elementClassName: ".input-chips-with-icon",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .input-chips-with-icon .rui-import-html",
		elementCodeFilePath: "./src/html/input-chips-with-icon.html",
		elementCodeLocation:
			".input-chips-with-icon .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".input-chips-with-icon .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".input-chips-with-icon .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".input-chips-with-icon .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
		src="https://carbon.now.sh/embed?bg=rgba%281%2C22%2C39%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=48px&wc=true&wa=true&pv=30px&ph=39px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522chip-container%2520input-chip-with-icon--container%2520flex-row%2520flex-wrap%2520flex-gap-1%2522%253E%250A%2520%2520%2520%2520%253Cinput%2520type%253D%2522text%2522%2520class%253D%2522input-chip--input%2520input-icon-chip--input%2522%2520placeholder%253D%2522Add%2520here%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520aria-label%253D%2522Add%2520chips%2520content%2520here%2522%2520%252F%253E%250A%253C%252Fdiv%253E"
		class="rui-code--iframe" scrolling="yes"
		sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeClassPath:
			".input-chips-with-icon .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `<iframe
		src="https://carbon.now.sh/embed?bg=rgba%281%2C22%2C39%2C1%29&t=night-owl&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=48px&wc=true&wa=true&pv=30px&ph=39px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520handleInputChipsWithIcon%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2509const%2520inputIconChipInput%2520%253D%2520document.querySelector%28%250A%2509%2509%2522.input-chips-with-icon%2520.input-icon-chip--input%2522%250A%2509%29%253B%250A%2509const%2520inputWithIconChipContainer%2520%253D%2520document.querySelector%28%250A%2509%2509%2522.input-chips-with-icon%2520.input-chip-with-icon--container%2522%250A%2509%29%253B%250A%2509const%2520basicChipClasses%2520%253D%2520%255B%250A%2509%2509%2522basic-chip%2522%252C%250A%2509%2509%2522flex-row%2522%252C%250A%2509%2509%2522align-center%2522%252C%250A%2509%2509%2522flex-wrap%2522%252C%250A%2509%2509%2522flex-gap-1%2522%252C%250A%2509%255D%253B%250A%2509inputWithIconChipContainer.addEventListener%28%2522keypress%2522%252C%2520%28e%29%2520%253D%253E%2520%257B%250A%2509%2509if%2520%28e.key%2520%253D%253D%253D%2520%2522Enter%2522%29%2520%257B%250A%2509%2509%2509const%2520section%2520%253D%2520document.createElement%28%2522section%2522%29%253B%250A%2509%2509%2509section.classList.add%28...basicChipClasses%29%253B%250A%2509%2509%2509const%2520pName%2520%253D%2520document.createElement%28%2522p%2522%29%253B%250A%2509%2509%2509pName.classList.add%28%2522chip-content%2522%29%253B%250A%2509%2509%2509const%2520pCross%2520%253D%2520document.createElement%28%2522p%2522%29%253B%250A%2509%2509%2509pCross.classList.add%28%2522chip-cross%2522%29%253B%250A%2509%2509%2509pName.innerText%2520%253D%2520inputIconChipInput.value%253B%250A%2509%2509%2509pCross.innerText%2520%253D%2520%2522x%2522%253B%250A%2509%2509%2509const%2520imgIcon%2520%253D%2520document.createElement%28%2522img%2522%29%253B%250A%2509%2509%2509imgIcon.srcset%2520%253D%250A%2509%2509%2509%2509%2522https%253A%252F%252Fpicsum.photos%252F300%252F200%25201x%252C%2520https%253A%252F%252Fpicsum.photos%252F200%252F200%25202x%2522%253B%250A%2509%2509%2509imgIcon.src%2520%253D%2520%2522https%253A%252F%252Fpicsum.photos%252F300%252F200%2522%253B%250A%2509%2509%2509imgIcon.alt%2520%253D%2520%2522I%2522%253B%250A%2509%2509%2509imgIcon.classList.add%28%2522chip-icon%2522%29%253B%250A%2509%2509%2509section.append%28imgIcon%252C%2520pName%252C%2520pCross%29%253B%250A%2509%2509%2509inputWithIconChipContainer.insertBefore%28section%252C%2520inputIconChipInput%29%253B%250A%2509%2509%2509inputIconChipInput.value%2520%253D%2520%2522%2522%253B%250A%2509%2509%2509const%2520inputChipCross%2520%253D%2520document.querySelectorAll%28%250A%2509%2509%2509%2509%2522.input-chip-with-icon--container%2520.chip-cross%2522%250A%2509%2509%2509%29%253B%250A%2509%2509%2509inputChipCross.forEach%28%28item%29%2520%253D%253E%2520%257B%250A%2509%2509%2509%2509item.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509%2509%2509%2509item.parentElement.remove%28%29%253B%250A%2509%2509%2509%2509%257D%29%253B%250A%2509%2509%2509%257D%29%253B%250A%2509%2509%257D%250A%2509%257D%29%253B%250A%257D%253B%250A%250Aexport%2520%257B%2520handleInputChipsWithIcon%2520%257D%253B"
		class="rui-code--iframe" scrolling="yes"
		sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		sandboxURLClass: ".input-chips-with-icon .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/chips-yyquw?file=/index.html:2282-2484",
	},
];

export { elements };
