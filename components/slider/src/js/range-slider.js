/**
 * Handle Range slider functionality
 */

const handleRangeSlider = (rangeSliderClass, valueGap) => {
	const rangeInput = document.querySelectorAll(
		`.${rangeSliderClass} .range-input input`
	);
	const valueInput = document.querySelectorAll(
		`.${rangeSliderClass} .value-input input`
	);
	const rangeSliderProgress = document.querySelector(
		`.${rangeSliderClass} .range-slider-container .range-slider-progress`
	);

	rangeInput.forEach((item) => {
		item.addEventListener("input", (element) => {
			const minValue = parseInt(rangeInput[0].value);
			const maxValue = parseInt(rangeInput[1].value);

			if (maxValue - minValue < valueGap) {
				if (element.target.className === "range-min") {
					rangeInput[0].value = maxValue - priceGap;
				} else {
					rangeInput[1].value = minValue + priceGap;
				}
			} else {
				valueInput[0].value = minValue;
				valueInput[1].value = maxValue;
				rangeSliderProgress.style.left =
					(minValue / rangeInput[0].max) * 100 + "%";
				rangeSliderProgress.style.right =
					100 - (maxValue / rangeInput[1].max) * 100 + "%";
			}
		});
	});

	valueInput.forEach((item) => {
		item.addEventListener("input", (element) => {
			const minValue = parseInt(valueInput[0].value);
			const maxValue = parseInt(valueInput[1].value);

			if (maxValue - minValue >= valueGap && maxValue <= rangeInput[1].max) {
				if (element.target.classList.contains("input-min")) {
					rangeInput[0].value = minValue;
					rangeSliderProgress.style.left =
						(minValue / rangeInput[0].max) * 100 + "%";
				} else {
					rangeInput[1].value = maxValue;
					rangeSliderProgress.style.right =
						100 - (maxValue / rangeInput[1].max) * 100 + "%";
				}
			}
		});
	});
};

export { handleRangeSlider };
