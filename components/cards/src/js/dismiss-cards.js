const handleDismissCard = () => {
	const dismissCardBtn = document.querySelector(
		".dismiss-cards .card-dismiss-btn"
	);
	const card = document.querySelector(".dismiss-cards .card");
	dismissCardBtn.addEventListener("click", () => {
		card.classList.add("inactive");
	});
};

export { handleDismissCard };
