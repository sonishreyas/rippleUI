const handleInputProfile = () => {
	const input_container = document.querySelectorAll(
		".profile-tabs .input-container .textbox-content"
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

export { handleInputProfile };
