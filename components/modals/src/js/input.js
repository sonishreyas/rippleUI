/**
 * Handle the effect of textbox
 */
const handleInput = () => {
	const input_container = document.querySelectorAll(
		".input-container .textbox-content"
	);

	input_container.forEach((item) => {
		item.addEventListener("focus", () => {
			item.parentElement.classList.add("focused");
		});

		item.addEventListener("blur", () => {
			if (item.value.length === 0) {
				item.parentElement.classList.remove("focused");
			}
		});
	});
};

export { handleInput };
