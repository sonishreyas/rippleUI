const validation = (
	inputContainer,
	emailCheck,
	passwordCheck,
	confirmPasswordCheck
) => {
	inputContainer.forEach((item) => {
		item.addEventListener("focus", () => {
			item.parentElement.classList.add("focused");
		});

		item.addEventListener("blur", () => {
			if (item.value.length === 0) {
				item.parentElement.classList.remove("focused");
			}

			if (item.parentElement.innerText.includes("Email")) {
				if (item.value.includes("@") !== true) {
					if (emailCheck.classList.contains("inactive-check"))
						emailCheck.classList.remove("inactive-check");
					emailCheck.innerText = "Invalid Email";
					emailCheck.classList.add("invalid");
				} else {
					emailCheck.innerText = "";
					emailCheck.classList.remove("invalid");
				}
			}
		});

		item.addEventListener("input", () => {
			if (
				item.parentElement.innerText.includes("Password") &&
				item.parentElement.innerText.includes("Confirm") != true
			) {
				validatePassword(item, passwordCheck);
			} else if (item.parentElement.innerText.includes("Confirm Password")) {
				validatePassword(item, confirmPasswordCheck);
			}
		});
	});
};

const validatePassword = (item, passwordCheck) => {
	if (item.value.length < 8) {
		passwordCheck.style.display = "block";
		passwordCheck.innerText = "Password must be greater then 8 characters.";
		if (passwordCheck.classList.contains("valid"))
			passwordCheck.classList.remove("valid");
		if (passwordCheck.classList.contains("invalid") !== true)
			passwordCheck.classList.add("invalid");
		if (item.classList.contains("invalid-border") !== true)
			item.classList.add("invalid-border");
		if (item.classList.contains("valid-border"))
			item.classList.remove("valid-border");
	} else {
		passwordCheck.innerText = "Strong Password.";
		if (passwordCheck.classList.contains("invalid"))
			passwordCheck.classList.remove("invalid");
		if (passwordCheck.classList.contains("valid") !== true)
			passwordCheck.classList.add("valid");
		if (item.classList.contains("invalid-border"))
			item.classList.remove("invalid-border");
		if (item.classList.contains("valid-border") !== true)
			item.classList.add("valid-border");
	}
};
const handleInput = () => {
	const inputContainerLogin = document.querySelectorAll(
		".login .input-container .textbox-content"
	);

	const emailCheckLogin = document.querySelector(".login .email-check");
	const passwordCheckLogin = document.querySelector(".login .password-check");

	const inputContainerRegister = document.querySelectorAll(
		".register .input-container .textbox-content"
	);

	const emailCheckRegister = document.querySelector(".register .email-check");
	const passwordCheckRegister = document.querySelector(
		".register .password-check"
	);
	const confirmPasswordCheckRegister = document.querySelector(
		".register .confirm-password-check"
	);
	const showPassword = document.querySelectorAll(".show-password");
	const passwordBox = document.querySelectorAll("#password");
	for (let i = 0; i < showPassword.length; i++) {
		showPassword[i].addEventListener("click", () => {
			if (passwordBox[i].type === "password") {
				passwordBox[i].type = "text";
				showPassword[i].classList.remove("fa-eye");
				showPassword[i].classList.add("fa-eye-slash");
			} else {
				passwordBox[i].type = "password";
				showPassword[i].classList.remove("fa-eye-slash");
				showPassword[i].classList.add("fa-eye");
			}
		});
	}

	validation(inputContainerLogin, emailCheckLogin, passwordCheckLogin);
	validation(
		inputContainerRegister,
		emailCheckRegister,
		passwordCheckRegister,
		confirmPasswordCheckRegister
	);
};

export { handleInput };
