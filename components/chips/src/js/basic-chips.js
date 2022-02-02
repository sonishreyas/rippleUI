const handleBasicChips = () => {
	const chip_cross = document.querySelectorAll(".chip-cross");
	chip_cross.forEach((item) => {
		item.addEventListener(
			"click",
			() => (item.parentElement.style.display = "none")
		);
	});
};

export { handleBasicChips };
