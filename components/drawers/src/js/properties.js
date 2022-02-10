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
		name: "Hamburger Drawer",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .hamburger-drawer .rui-import-html",
		elementCodeFilePath: "./src/html/hamburger-drawer.html",
		elementCodeLocation:
			".hamburger-drawer .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".hamburger-drawer .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".hamburger-drawer .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".hamburger-drawer .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
		src="https://carbon.now.sh/embed?bg=rgba%281%2C22%2C39%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=35px&ph=37px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522drawer%2520drawer-active%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522drawer-icon-tab%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522drawer-icon%2520drawer-menu-icon%2522%253E%253Ci%2520class%253D%2522fas%2520fa-bars%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cul%2520class%253D%2522drawer-content--list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522drawer-content%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2523Home%2522%2520class%253D%2522drawer-links%2520no-link%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522drawer-icon%2522%253E%253Ci%2520class%253D%2522fas%2520fa-home%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522drawer-content--text%2522%253EHome%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522drawer-content%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2523Profile%2522%2520class%253D%2522drawer-links%2520no-link%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522drawer-icon%2522%253E%253Ci%2520class%253D%2522fas%2520fa-user-alt%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522drawer-content--text%2522%253EProfile%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522drawer-content%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2523Message%2522%2520class%253D%2522drawer-links%2520no-link%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522drawer-icon%2522%253E%253Ci%2520class%253D%2522fas%2520fa-comment-alt%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522drawer-content--text%2522%253EMessage%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522drawer-content%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2523Sign-Out%2522%2520class%253D%2522drawer-links%2520no-link%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522drawer-icon%2522%253E%253Ci%2520class%253D%2522fas%2520fa-sign-out-alt%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522drawer-content--text%2522%253ESign%2520Out%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%253C%252Ful%253E%250A%253C%252Fdiv%253E"
		class="rui-code--iframe" scrolling="yes" 
		sandbox="allow-scripts allow-same-origin">
	  </iframe>`,
		elementJSCodeClassPath:
			".hamburger-drawer .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%281%2C22%2C39%2C1%29&t=night-owl&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=35px&ph=37px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520handleHamburgerDrawer%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2509const%2520drawer_menu_icon%2520%253D%2520document.querySelector%28%250A%2509%2509%2522.hamburger-drawer%2520.drawer-menu-icon%2522%250A%2509%29%253B%250A%2509const%2520drawer%2520%253D%2520document.querySelector%28%2522.hamburger-drawer%2520.drawer%2522%29%253B%250A%2509const%2520drawer_content_list%2520%253D%2520document.querySelector%28%250A%2509%2509%2522.hamburger-drawer%2520.drawer%2520.drawer-content--list%2522%250A%2509%29%253B%250A%2509drawer_menu_icon.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509if%2520%28%250A%2509%2509%2509drawer_content_list.classList.contains%28%2522drawer-menu-icon-inactive%2522%29%2520%2526%2526%250A%2509%2509%2509drawer.classList.contains%28%2522drawer-inactive%2522%29%250A%2509%2509%29%2520%257B%250A%2509%2509%2509drawer_content_list.classList.remove%28%2522drawer-menu-icon-inactive%2522%29%253B%250A%2509%2509%2509drawer.classList.remove%28%2522drawer-inactive%2522%29%253B%250A%2509%2509%2509drawer.classList.add%28%2522drawer-active%2522%29%253B%250A%2509%2509%257D%2520else%2520%257B%250A%2509%2509%2509drawer_content_list.classList.add%28%2522drawer-menu-icon-inactive%2522%29%253B%250A%2509%2509%2509drawer.classList.remove%28%2522drawer-active%2522%29%253B%250A%2509%2509%2509drawer.classList.add%28%2522drawer-inactive%2522%29%253B%250A%2509%2509%257D%250A%2509%257D%29%253B%250A%257D%253B%250Aexport%2520%257B%2520handleHamburgerDrawer%2520%257D%253B%250A"
			class="rui-code--iframe" scrolling="yes" 
			sandbox="allow-scripts allow-same-origin">
		  </iframe>`,
		sandboxURLClass: ".hamburger-drawer .rui-code-tabs-sandbox--link",
		sandboxURL:
			"https://codesandbox.io/s/drawers-final-hjtbl?file=/src/html/standard-drawer.html",
	},
];

export { elements };