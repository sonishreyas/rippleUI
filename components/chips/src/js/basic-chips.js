/**
 * Handle basic chips dismiss
 */
const handleBasicChips = () => {
	const chipCross = document.querySelectorAll(".chip-cross");
	chipCross.forEach((item) => {
		item.addEventListener(
			"click",
			() => (item.parentElement.style.display = "none")
		);
	});
};

export { handleBasicChips };
