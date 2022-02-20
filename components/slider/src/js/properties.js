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
		name: "Range Slider",
		rootCodeTabFilePath: "../../../../main/html/code-tabs-root.html",
		rootCodeLocation:
			".main .rui-main--sub-heading .range-slider .rui-import-html",
		elementCodeFilePath: "./src/html/range-slider.html",
		elementCodeLocation:
			".range-slider .rui-import-html .rui-code-tabs--content-container .preview",
		handleCodeTabBtnClass:
			".range-slider .rui-import-html .rui-code-tabs-btn--container .rui-code-tabs--btn",
		handleCodeTabCodeContentClass:
			".range-slider .rui-import-html .rui-code-tabs--content",
		elementCodeClassPath:
			".range-slider .rui-import-html .rui-code-tabs--container .rui-code",
		elementCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=30px&ph=32px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Carticle%2520class%253D%2522outline-container%2520p-5%2520m-5%2520b-radius-2%2520flex-column%2520flex-gap-1%2520flex-wrap%2520w-max-content%2522%253E%250A%2520%2520%2520%2520%253Ch3%2520class%253D%2522text-bold%2520text-cta-color%2520my-5%2522%253EPrice%253C%252Fh3%253E%250A%2520%2520%2520%2520%253Carticle%2520class%253D%2522value-input%2520flex-row%2520flex-gap-2%2520flex-wrap%2520align-center%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Carticle%2520class%253D%2522field%2520flex-row%2520align-center%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522h3%2522%253EMin%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522number%2522%2520value%253D%25222000%2522%2520class%253D%2522input-min%2520w-100%2520ml-5%2520b-radius-1%2520h4%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Farticle%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522h3%2522%253E-%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Carticle%2520class%253D%2522field%2520flex-row%2520align-center%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522h3%2522%253EMax%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522number%2522%2520value%253D%252215000%2522%2520class%253D%2522input-max%2520w-100%2520ml-5%2520b-radius-1%2520h4%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Farticle%253E%250A%2520%2520%2520%2520%253C%252Farticle%253E%250A%250A%2520%2520%2520%2520%253Carticle%2520class%253D%2522range-slider-container%2520b-radius-1%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Carticle%2520class%253D%2522range-slider-progress%2520b-radius-1%2522%253E%253C%252Farticle%253E%250A%2520%2520%2520%2520%253C%252Farticle%253E%250A%250A%2520%2520%2520%2520%253Carticle%2520class%253D%2522range-input%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522range%2522%2520name%253D%2522range-min%2522%2520min%253D%25220%2522%2520max%253D%252215000%2522%2520%252F%2520value%253D%25222000%2522%2520class%253D%2522range-min%2522%2520step%253D%2522100%2522%253E%2520%253Cinput%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520type%253D%2522range%2522%2520name%253D%2522range-max%2522%2520min%253D%25220%2522%2520max%253D%252215000%2522%2520%252F%2520value%253D%252215000%2522%2520class%253D%2522range-max%2522%2520step%253D%2522100%2522%253E%250A%2520%2520%253C%252Farticle%253E%250A%253C%252Farticle%253E"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
	  	</iframe>`,
		elementJSCodeClassPath:
			".range-slider .rui-import-html .rui-code-tabs--container .rui-code-js",
		elementJSCodeInnerText: `<iframe
			src="https://carbon.now.sh/embed?bg=rgba%2823%2C24%2C26%2C1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=30px&ph=32px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520handleRangeSlider%2520%253D%2520%28rangeSliderClass%252C%2520valueGap%29%2520%253D%253E%2520%257B%250A%2509const%2520rangeInput%2520%253D%2520document.querySelectorAll%28%250A%2509%2509%2560.%2524%257BrangeSliderClass%257D%2520.range-input%2520input%2560%250A%2509%29%253B%250A%2509const%2520valueInput%2520%253D%2520document.querySelectorAll%28%250A%2509%2509%2560.%2524%257BrangeSliderClass%257D%2520.value-input%2520input%2560%250A%2509%29%253B%250A%2509const%2520rangeSliderProgress%2520%253D%2520document.querySelector%28%250A%2509%2509%2560.%2524%257BrangeSliderClass%257D%2520.range-slider-container%2520.range-slider-progress%2560%250A%2509%29%253B%250A%250A%2509rangeInput.forEach%28%28item%29%2520%253D%253E%2520%257B%250A%2509%2509item.addEventListener%28%2522input%2522%252C%2520%28element%29%2520%253D%253E%2520%257B%250A%2509%2509%2509const%2520minValue%2520%253D%2520parseInt%28rangeInput%255B0%255D.value%29%253B%250A%2509%2509%2509const%2520maxValue%2520%253D%2520parseInt%28rangeInput%255B1%255D.value%29%253B%250A%250A%2509%2509%2509if%2520%28maxValue%2520-%2520minValue%2520%253C%2520valueGap%29%2520%257B%250A%2509%2509%2509%2509if%2520%28element.target.className%2520%253D%253D%253D%2520%2522range-min%2522%29%2520%257B%250A%2509%2509%2509%2509%2509rangeInput%255B0%255D.value%2520%253D%2520maxValue%2520-%2520priceGap%253B%250A%2509%2509%2509%2509%257D%2520else%2520%257B%250A%2509%2509%2509%2509%2509rangeInput%255B1%255D.value%2520%253D%2520minValue%2520%252B%2520priceGap%253B%250A%2509%2509%2509%2509%257D%250A%2509%2509%2509%257D%2520else%2520%257B%250A%2509%2509%2509%2509valueInput%255B0%255D.value%2520%253D%2520minValue%253B%250A%2509%2509%2509%2509valueInput%255B1%255D.value%2520%253D%2520maxValue%253B%250A%2509%2509%2509%2509rangeSliderProgress.style.left%2520%253D%250A%2509%2509%2509%2509%2509%28minValue%2520%252F%2520rangeInput%255B0%255D.max%29%2520*%2520100%2520%252B%2520%2522%2525%2522%253B%250A%2509%2509%2509%2509rangeSliderProgress.style.right%2520%253D%250A%2509%2509%2509%2509%2509100%2520-%2520%28maxValue%2520%252F%2520rangeInput%255B1%255D.max%29%2520*%2520100%2520%252B%2520%2522%2525%2522%253B%250A%2509%2509%2509%257D%250A%2509%2509%257D%29%253B%250A%2509%257D%29%253B%250A%250A%2509valueInput.forEach%28%28item%29%2520%253D%253E%2520%257B%250A%2509%2509item.addEventListener%28%2522input%2522%252C%2520%28element%29%2520%253D%253E%2520%257B%250A%2509%2509%2509const%2520minValue%2520%253D%2520parseInt%28valueInput%255B0%255D.value%29%253B%250A%2509%2509%2509const%2520maxValue%2520%253D%2520parseInt%28valueInput%255B1%255D.value%29%253B%250A%250A%2509%2509%2509if%2520%28maxValue%2520-%2520minValue%2520%253E%253D%2520valueGap%2520%2526%2526%2520maxValue%2520%253C%253D%2520rangeInput%255B1%255D.max%29%2520%257B%250A%2509%2509%2509%2509if%2520%28element.target.classList.contains%28%2522input-min%2522%29%29%2520%257B%250A%2509%2509%2509%2509%2509rangeInput%255B0%255D.value%2520%253D%2520minValue%253B%250A%2509%2509%2509%2509%2509rangeSliderProgress.style.left%2520%253D%250A%2509%2509%2509%2509%2509%2509%28minValue%2520%252F%2520rangeInput%255B0%255D.max%29%2520*%2520100%2520%252B%2520%2522%2525%2522%253B%250A%2509%2509%2509%2509%257D%2520else%2520%257B%250A%2509%2509%2509%2509%2509rangeInput%255B1%255D.value%2520%253D%2520maxValue%253B%250A%2509%2509%2509%2509%2509rangeSliderProgress.style.right%2520%253D%250A%2509%2509%2509%2509%2509%2509100%2520-%2520%28maxValue%2520%252F%2520rangeInput%255B1%255D.max%29%2520*%2520100%2520%252B%2520%2522%2525%2522%253B%250A%2509%2509%2509%2509%257D%250A%2509%2509%2509%257D%250A%2509%2509%257D%29%253B%250A%2509%257D%29%253B%250A%257D%253B%250A%250Aexport%2520%257B%2520handleRangeSlider%2520%257D%253B%250A"
			class="rui-code--iframe" scrolling="yes"
			sandbox="allow-scripts allow-same-origin">
		  </iframe>`,
		sandboxURLClass: ".range-slider .rui-code-tabs-sandbox--link",
		sandboxURL: "https://codesandbox.io/s/slider-52e64",
	},
];

export { elements };
