/**
 * Handle badge position on icon
 */
const handleIconBadge = () => {
	// Icon batch Alignment

	const badgeText = document.querySelectorAll(".badge-text");
	const top = document.querySelector("#top");
	const bottom = document.querySelector("#bottom");
	const right = document.querySelector("#right");
	const left = document.querySelector("#left");

	top.addEventListener("change", () => {
		badgeText.forEach((item) => {
			if (item.classList.contains("bottom")) {
				item.classList.remove("bottom");
			}
			item.classList.add("top");
		});
	});

	bottom.addEventListener("change", () => {
		badgeText.forEach((item) => {
			if (item.classList.contains("top")) {
				item.classList.remove("top");
			}
			item.classList.add("bottom");
		});
	});

	left.addEventListener("change", () => {
		badgeText.forEach((item) => {
			if (item.classList.contains("rightt")) {
				item.classList.remove("rightt");
			}
			item.classList.add("left");
		});
	});
	right.addEventListener("change", () => {
		badgeText.forEach((item) => {
			if (item.classList.contains("left")) {
				item.classList.remove("left");
			}
			item.classList.add("right");
		});
	});
};

export { handleIconBadge };
