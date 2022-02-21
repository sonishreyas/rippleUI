/**
 * Apply edit and delete functionality on the buttons
 * @param {element} modal The modal element whose values we address
 */
const handleCardButtons = (modal) => {
	const editAddressBtn = document.querySelectorAll(".edit-btn");
	const deleteAddressBtn = document.querySelectorAll(".delete-btn");
	editAddressBtn.forEach((item) => {
		item.addEventListener("click", () => {
			modal.style.display = "block";
		});
	});
	deleteAddressBtn.forEach((item) => {
		item.addEventListener("click", () => {
			item.parentElement.parentElement.parentElement.style.display = "none";
		});
	});
};

/**
 * Handles modal and new address creation
 */
const handleModal = () => {
	const modal = document.querySelector(".profile-tabs .modal-container");
	const addNewAddressBtn = document.querySelector(
		".profile-tabs .profile-header .address-btn"
	);
	const cancelBtn = document.querySelector(
		".profile-tabs .modal-container .cancel-btn"
	);
	const saveBtn = document.querySelector(
		".profile-tabs .modal-container .save-btn"
	);
	const addressForm = document.querySelector(".profile-tabs .input-form");
	const addAddressPath = document.querySelector(
		".profile-tabs .address-container .profile-container ul"
	);

	addNewAddressBtn.addEventListener("click", () => {
		modal.style.display = "block";
	});

	cancelBtn.addEventListener("click", () => {
		modal.style.display = "none";
	});

	saveBtn.addEventListener("click", () => {
		const formData = new FormData(addressForm);
		addAddressPath.innerHTML += `<li class="no-list my-5">
		<article class="card basic-card flex-row justify-content-center align-center flex-wrap card-shadow p-10 b-radius-2 w-100 h-auto">
		  <h2 class="name p-2">${formData.get("name")}</h2>
		  <p class="address p-2">
		  ${formData.get("address")}
		  </p>
		  <p class="city p-2">${formData.get("city")}</p>
		  <p class="state p-2">${formData.get("state")}</p>
		  <p class="country p-2">${formData.get("country")}</p>
		  <p class="pincode p-2">${formData.get("pincode")}</p>
		  <section class="card-footer flex-row flex-grow-1 justify-content-center flex-gap-1 py-5 px-0">
			  <button class="primary-btn edit-btn p-5 b-radius-2 mx-5 my-0 text-bold flex-grow-1">Edit</button>
			  <button class="outline-btn delete-btn p-5 b-radius-2 mx-5 my-0 text-bold flex-grow-1">Delete</button>
		  </section>
		</article>
		</li`;
		handleCardButtons(modal);
		modal.style.display = "none";
	});
	handleCardButtons(modal);
};

export { handleModal };
