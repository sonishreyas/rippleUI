/**
 * Handles Input validation
 */
const handleInput = () => {
	const input_container = document.querySelectorAll(
		".input-container .textbox-content"
	);

	const emailCheck = document.querySelector(".email-check");
	const passwordCheck = document.querySelector(".password-check");

	const showPassword = document.querySelector(".show-password");
	const passwordBox = document.querySelector("#password");
	const emailBox = document.querySelector("#email");
	showPassword.addEventListener("click", () => {
		if (passwordBox.type === "password") {
			passwordBox.type = "text";
			showPassword.classList.remove("fa-eye");
			showPassword.classList.add("fa-eye-slash");
		} else {
			passwordBox.type = "password";
			showPassword.classList.remove("fa-eye-slash");
			showPassword.classList.add("fa-eye");
		}
	});

	input_container.forEach((item) => {
		item.addEventListener("focus", () => {
			item.parentElement.classList.add("focused");
		});

		item.addEventListener("blur", () => {
			if (item.value.length === 0) {
				item.parentElement.classList.remove("focused");
			}

			if (item.parentElement.innerText.includes("Email")) {
				if (item.value.includes("@") !== true) {
					emailCheck.innerText = "Invalid Email";
					emailCheck.classList.add("invalid");
				} else {
					emailCheck.innerText = "";
					emailCheck.classList.remove("invalid");
				}
			}
		});

		item.addEventListener("input", () => {
			if (item.parentElement.innerText.includes("Password")) {
				if (item.value.length < 8) {
					passwordCheck.innerText =
						"Password must be greater then 8 characters.";
					if (passwordCheck.classList.contains("valid"))
						passwordCheck.classList.remove("valid");
					if (passwordCheck.classList.contains("invalid") !== true)
						passwordCheck.classList.add("invalid");
					if (passwordBox.classList.contains("invalid-border") !== true)
						passwordBox.classList.add("invalid-border");
					if (passwordBox.classList.contains("valid-border"))
						passwordBox.classList.remove("valid-border");
				} else {
					passwordCheck.innerText = "Strong Password.";
					if (passwordCheck.classList.contains("invalid"))
						passwordCheck.classList.remove("invalid");
					if (passwordCheck.classList.contains("valid") !== true)
						passwordCheck.classList.add("valid");
					if (passwordBox.classList.contains("invalid-border"))
						passwordBox.classList.remove("invalid-border");
					if (passwordBox.classList.contains("valid-border") !== true)
						passwordBox.classList.add("valid-border");
				}
			}
		});
	});
};

export { handleInput };
