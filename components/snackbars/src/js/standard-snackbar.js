const handleSnackbar = () => {
	const top_left = document.querySelector(".top-left");
	const top_center = document.querySelector(".top-center");
	const top_right = document.querySelector(".top-right");
	const bottom_left = document.querySelector(".bottom-left");
	const bottom_center = document.querySelector(".bottom-center");
	const bottom_right = document.querySelector(".bottom-right");
	const snackbar_container = document.querySelector(".snackbar--container");
	const snackbar_cross = document.querySelector(".rui-cross");

	const displaySnackbar = (t, b, l, r) => {
		snackbar_container.style.top = t;
		snackbar_container.style.left = l;
		snackbar_container.style.bottom = b;
		snackbar_container.style.right = r;
		snackbar_container.style.visibility = "visible";
	};
	top_left.addEventListener("click", () => {
		displaySnackbar("1rem", null, "1rem", null);
	});
	top_center.addEventListener("click", () => {
		displaySnackbar("1rem", null, "50%", null);
	});

	top_right.addEventListener("click", () => {
		displaySnackbar("1rem", null, null, "1rem");
	});

	bottom_left.addEventListener("click", () => {
		displaySnackbar(null, "1rem", "1rem", null);
	});
	bottom_center.addEventListener("click", () => {
		displaySnackbar(null, "1rem", "50%", null);
	});

	bottom_right.addEventListener("click", () => {
		displaySnackbar(null, "1rem", null, "1rem");
	});

	snackbar_cross.addEventListener("click", () => {
		snackbar_container.style.visibility = "hidden";
	});
};

export { handleSnackbar };
