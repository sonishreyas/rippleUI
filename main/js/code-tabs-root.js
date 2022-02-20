/**
 * Handles Code Tabs functionality
 * @param {String} ruiCodeTabsBtnPath The code tab button classpath
 * @param {String} ruiCodeTabsContentPath The code tab content classpath
 */
const handleCodeTab = (ruiCodeTabsBtnPath, ruiCodeTabsContentPath) => {
	const ruiCodeTabsBtn = document.querySelectorAll(ruiCodeTabsBtnPath);
	const ruiCodeTabsContent = document.querySelectorAll(ruiCodeTabsContentPath);
	const clearAlltabs = () => {
		ruiCodeTabsBtn.forEach((item) => {
			if (item.classList.contains("rui-code-tabs--btn-active")) {
				item.classList.remove("rui-code-tabs--btn-active");
			}
		});
		ruiCodeTabsContent.forEach((item) => {
			item.style.display = "none";
		});
	};
	const setActiveTab = (itemIndex) => {
		clearAlltabs();
		ruiCodeTabsBtn[itemIndex].classList.add("rui-code-tabs--btn-active");
		ruiCodeTabsContent[itemIndex].style.display = "block";
	};

	ruiCodeTabsBtn.forEach((item, index) => {
		item.addEventListener("click", () => {
			setActiveTab(index);
		});
	});
	// By default the first tab will be active
	setActiveTab(0);
};

export { handleCodeTab };
