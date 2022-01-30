const changeClass = (element, removeClass, addClass) => {
	element.classList.remove(removeClass);
	element.classList.add(addClass);
};

const standardAlert = () => {
	const error_btn = document.querySelector(".error-btn");
	const warning_btn = document.querySelector(".warning-btn");
	const info_btn = document.querySelector(".info-btn");
	const success_btn = document.querySelector(".success-btn");
	const error = document.querySelector(".error");
	const warning = document.querySelector(".warning");
	const info = document.querySelector(".info");
	const success = document.querySelector(".success");
	const rui_cross_success = document.querySelector(".success .rui-cross");
	const rui_cross_info = document.querySelector(".info .rui-cross");
	const rui_cross_error = document.querySelector(".error .rui-cross");
	const rui_cross_warning = document.querySelector(".warning .rui-cross");

	const displayAlert = (element) => {
		if (error.classList.contains("active")) {
			changeClass(error, "active", "inactive");
		}
		if (warning.classList.contains("active")) {
			changeClass(warning, "active", "inactive");
		}
		if (info.classList.contains("active")) {
			changeClass(info, "active", "inactive");
		}
		if (success.classList.contains("active")) {
			changeClass(success, "active", "inactive");
		}
		changeClass(element, "inactive", "active");
		setTimeout(() => changeClass(element, "active", "inactive"), 10000);
	};
	error_btn.addEventListener("click", () => {
		displayAlert(error);
	});
	warning_btn.addEventListener("click", () => {
		displayAlert(warning);
	});
	success_btn.addEventListener("click", () => {
		displayAlert(success);
	});
	info_btn.addEventListener("click", () => {
		displayAlert(info);
	});

	rui_cross_success.addEventListener("click", () => {
		changeClass(success, "active", "inactive");
	});

	rui_cross_error.addEventListener("click", () => {
		changeClass(error, "active", "inactive");
	});

	rui_cross_info.addEventListener("click", () => {
		changeClass(info, "active", "inactive");
	});

	rui_cross_warning.addEventListener("click", () => {
		changeClass(warning, "active", "inactive");
	});
};

export { standardAlert };
