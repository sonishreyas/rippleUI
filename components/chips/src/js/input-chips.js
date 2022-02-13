/**
 * Builds input chips on user input
 */
const handleInputChips = () => {
	const inputChipInput = document.querySelector(
		".input-chips .input-chip--input"
	);
	const inputChipContainer = document.querySelector(
		".input-chips .input-chip--container"
	);
	const basicChipClasses = [
		"basic-chip",
		"flex-row",
		"align-center",
		"flex-wrap",
		"flex-gap-1",
	];
	inputChipInput.addEventListener("keypress", (e) => {
		if (e.key === "Enter") {
			const section = document.createElement("section");
			section.classList.add(...basicChipClasses);
			const pName = document.createElement("p");
			pName.classList.add("chip-content");
			const pCross = document.createElement("p");
			pCross.classList.add("chip-cross");
			pName.innerText = inputChipInput.value;
			pCross.innerText = "x";
			section.append(pName, pCross);
			inputChipContainer.insertBefore(section, inputChipInput);
			inputChipInput.value = "";
			const inputChipCross = document.querySelectorAll(
				".input-chip--container .chip-cross"
			);

			inputChipCross.forEach((item) => {
				item.addEventListener("click", () => {
					item.parentElement.remove();
				});
			});
		}
	});
};

export { handleInputChips };
