/**
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
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522drawer%2520flex-column%2520drawer-active%2520b-radius-1%2520p-2%2520m-auto%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522drawer-icon-tab%2520flex-row%2520justify-content-end%2520p-6%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522drawer-icon%2520drawer-menu-icon%2522%253E%253Ci%2520class%253D%2522fas%2520fa-bars%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cul%2520class%253D%2522drawer-content--list%2520m-0%2520p-0%2520mt-5%2520no-list-decoration%2520text-bold%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522drawer-content%2520p-5%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2523Home%2522%2520class%253D%2522drawer-links%2520no-link%2520flex-row%2520align-center%2520flex-gap-1%2520p-0%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522drawer-icon%2522%253E%253Ci%2520class%253D%2522fas%2520fa-home%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522drawer-content--text%2522%253EHome%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522drawer-content%2520p-5%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2523Profile%2522%2520class%253D%2522drawer-links%2520no-link%2520flex-row%2520align-center%2520flex-gap-1%2520p-0%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522drawer-icon%2522%253E%253Ci%2520class%253D%2522fas%2520fa-user-alt%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522drawer-content--text%2522%253EProfile%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522drawer-content%2520p-5%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2523Message%2522%2520class%253D%2522drawer-links%2520no-link%2520flex-row%2520align-center%2520flex-gap-1%2520p-0%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522drawer-icon%2522%253E%253Ci%2520class%253D%2522fas%2520fa-comment-alt%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522drawer-content--text%2522%253EMessage%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522drawer-content%2520p-5%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2523Help%2522%2520class%253D%2522drawer-links%2520no-link%2520flex-row%2520align-center%2520flex-gap-1%2520p-0%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522drawer-icon%2522%253E%253Ci%2520class%253D%2522fas%2520fa-info-circle%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522drawer-content--text%2522%253EHelp%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522drawer-content%2520p-5%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2523Settings%2522%2520class%253D%2522drawer-links%2520no-link%2520flex-row%2520align-center%2520flex-gap-1%2520p-0%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522drawer-icon%2522%253E%253Ci%2520class%253D%2522fas%2520fa-cog%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522drawer-content--text%2522%253ESettings%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522drawer-content%2520p-5%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2523Sign-Out%2522%2520class%253D%2522drawer-links%2520no-link%2520flex-row%2520align-cente"
			class="rui-code--iframe" scrolling="yes" 
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeBtnClassPath:
			".hamburger-drawer .rui-import-html .rui-code-tabs--container .rui-code-js-btn",
		elementJSCodeClassPath:
			".hamburger-drawer .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=36px&ph=35px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520handleHamburgerDrawer%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2509const%2520drawerMenuIcon%2520%253D%2520document.querySelector%28%250A%2509%2509%2522.hamburger-drawer%2520.drawer-menu-icon%2522%250A%2509%29%253B%250A%2509const%2520drawer%2520%253D%2520document.querySelector%28%2522.hamburger-drawer%2520.drawer%2522%29%253B%250A%2509const%2520drawerContentList%2520%253D%2520document.querySelector%28%250A%2509%2509%2522.hamburger-drawer%2520.drawer%2520.drawer-content--list%2522%250A%2509%29%253B%250A%2509drawerMenuIcon.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2509%2509if%2520%28%250A%2509%2509%2509drawerContentList.classList.contains%28%2522drawer-menu-icon-inactive%2522%29%2520%2526%2526%250A%2509%2509%2509drawer.classList.contains%28%2522drawer-inactive%2522%29%250A%2509%2509%29%2520%257B%250A%2509%2509%2509drawerContentList.classList.remove%28%2522drawer-menu-icon-inactive%2522%29%253B%250A%2509%2509%2509drawer.classList.remove%28%2522drawer-inactive%2522%29%253B%250A%2509%2509%2509drawer.classList.add%28%2522drawer-active%2522%29%253B%250A%2509%2509%257D%2520else%2520%257B%250A%2509%2509%2509drawerContentList.classList.add%28%2522drawer-menu-icon-inactive%2522%29%253B%250A%2509%2509%2509drawer.classList.remove%28%2522drawer-active%2522%29%253B%250A%2509%2509%2509drawer.classList.add%28%2522drawer-inactive%2522%29%253B%250A%2509%2509%257D%250A%2509%257D%29%253B%250A%257D%253B%250Aexport%2520%257B%2520handleHamburgerDrawer%2520%257D%253B"
			class="rui-code--iframe" scrolling="yes" 
			sandbox="allow-scripts allow-same-origin">
		</iframe>`,
		sandboxURLClass: ".hamburger-drawer .rui-code-tabs-sandbox--link",
		sandboxURL: "https://codesandbox.io/s/drawers-final-hjtbl",
	},
];

export { elements };
