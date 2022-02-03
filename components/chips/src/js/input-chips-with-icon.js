const handleInputChipsWithIcon = () => {
	const input_icon_chip_input = document.querySelector(
		".input-icon-chip--input"
	);
	const input_with_icon_chip_container = document.querySelector(
		".input-chip-with-icon--container"
	);
	input_with_icon_chip_container.addEventListener("keypress", (e) => {
		const section = document.createElement("section");
		if (e.key === "Enter") {
			const section = document.createElement("section");
			section.classList.add("basic-chip");
			const p_name = document.createElement("p");
			p_name.classList.add("chip-content");
			const p_cross = document.createElement("p");
			p_cross.classList.add("chip-cross");
			p_name.innerText = input_icon_chip_input.value;
			p_cross.innerText = "x";
			const img_icon = document.createElement("img");
			img_icon.srcset =
				"https://picsum.photos/300/200 1x, https://picsum.photos/200/200 2x";
			img_icon.src = "https://picsum.photos/300/200";
			img_icon.alt = "I";
			img_icon.classList.add("chip-icon");
			section.append(img_icon);
			section.append(p_name);
			section.append(p_cross);
			input_with_icon_chip_container.insertBefore(
				section,
				input_icon_chip_input
			);
			input_icon_chip_input.value = "";
			const input_chip_cross = document.querySelectorAll(
				".input-chip-with-icon--container .chip-cross"
			);
			input_chip_cross.forEach((item) => {
				item.addEventListener("click", () => {
					item.parentElement.remove();
				});
			});
		}
	});
};

export { handleInputChipsWithIcon };
