const handleTabs = (header, tabsClass) => {
	const tabs_btn = document.querySelectorAll(
		`.${header}-tabs .${tabsClass}-tabs-btn-container .tabs-btn`
	);
	const tabs_content = document.querySelectorAll(
		`.${header}-tabs .${tabsClass}-tabs-content`
	);

	const clearAlltabs = () => {
		tabs_btn.forEach((item) => {
			if (item.classList.contains(`${tabsClass}-tabs-btn-active`)) {
				item.classList.remove(`${tabsClass}-tabs-btn-active`);
			}
		});
		tabs_content.forEach((item) => {
			item.style.display = `none`;
		});
	};
	const setActiveTab = (itemIndex) => {
		clearAlltabs();
		tabs_btn[itemIndex].classList.add(`${tabsClass}-tabs-btn-active`);
		tabs_content[itemIndex].style.display = `block`;
	};

	for (let i = 0; i < tabs_btn.length; i++) {
		tabs_btn[i].addEventListener(`click`, () => {
			setActiveTab(i);
		});
	}
	// By default the first tab will be active
	setActiveTab(0);
};

export { handleTabs };
