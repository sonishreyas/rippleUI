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

	console.log(rui_cross_warning.parentElement);
	const displayAlert = (element) => {
		if (error.classList.contains("active")) {
			error.classList.remove("active");
			error.classList.add("inactive");
		}
		if (warning.classList.contains("active")) {
			warning.classList.remove("active");
			warning.classList.add("inactive");
		}
		if (info.classList.contains("active")) {
			info.classList.remove("active");
			info.classList.add("inactive");
		}
		if (success.classList.contains("active")) {
			success.classList.remove("active");
			success.classList.add("inactive");
		}
		element.classList.remove("inactive");
		element.classList.add("active");
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
		success.classList.remove("active");
		success.classList.add("inactive");
	});

	rui_cross_error.addEventListener("click", () => {
		error.classList.remove("active");
		error.classList.add("inactive");
	});

	rui_cross_info.addEventListener("click", () => {
		info.classList.remove("active");
		info.classList.add("inactive");
	});

	rui_cross_warning.addEventListener("click", () => {
		warning.classList.remove("active");
		warning.classList.add("inactive");
	});
};

export { standardAlert };
