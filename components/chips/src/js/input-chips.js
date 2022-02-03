const handleInputChips = () => {
	const input_chip_input = document.querySelector(".input-chip--input");
	const input_chip_container = document.querySelector(".input-chip--container");

	input_chip_input.addEventListener("keypress", (e) => {
		const section = document.createElement("section");
		if (e.key === "Enter") {
			const section = document.createElement("section");
			section.classList.add("basic-chip");
			const p_name = document.createElement("p");
			p_name.classList.add("chip-content");
			const p_cross = document.createElement("p");
			p_cross.classList.add("chip-cross");
			p_name.innerText = input_chip_input.value;
			p_cross.innerText = "x";
			section.append(p_name);
			section.append(p_cross);
			input_chip_container.insertBefore(section, input_chip_input);
			input_chip_input.value = "";
			const rdc_input_chip_cross = document.querySelectorAll(
				".input-chip--container .chip-cross"
			);

			rdc_input_chip_cross.forEach((item) => {
				item.addEventListener("click", () => {
					item.parentElement.remove();
				});
			});
		}
	});
};

export { handleInputChips };
