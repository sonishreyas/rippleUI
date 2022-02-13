/**
 * Builds input icon chips on user input
 */
const handleInputChipsWithIcon = () => {
	const inputIconChipInput = document.querySelector(
		".input-chips-with-icon .input-icon-chip--input"
	);
	const inputWithIconChipContainer = document.querySelector(
		".input-chips-with-icon .input-chip-with-icon--container"
	);
	const basicChipClasses = [
		"basic-chip",
		"flex-row",
		"align-center",
		"flex-wrap",
		"flex-gap-1",
	];
	inputWithIconChipContainer.addEventListener("keypress", (e) => {
		if (e.key === "Enter") {
			const section = document.createElement("section");
			section.classList.add(...basicChipClasses);
			const pName = document.createElement("p");
			pName.classList.add("chip-content");
			const pCross = document.createElement("p");
			pCross.classList.add("chip-cross");
			pName.innerText = inputIconChipInput.value;
			pCross.innerText = "x";
			const imgIcon = document.createElement("img");
			imgIcon.srcset =
				"https://picsum.photos/300/200 1x, https://picsum.photos/200/200 2x";
			imgIcon.src = "https://picsum.photos/300/200";
			imgIcon.alt = "I";
			imgIcon.classList.add("chip-icon");
			section.append(imgIcon, pName, pCross);
			inputWithIconChipContainer.insertBefore(section, inputIconChipInput);
			inputIconChipInput.value = "";
			const inputChipCross = document.querySelectorAll(
				".input-chip-with-icon--container .chip-cross"
			);
			inputChipCross.forEach((item) => {
				item.addEventListener("click", () => {
					item.parentElement.remove();
				});
			});
		}
	});
};

export { handleInputChipsWithIcon };
