document.addEventListener("DOMContentLoaded", () => {
  const radioButtons = document.querySelectorAll(
    'input[name="subscription_preference"]'
  );
  const optionCards = document.querySelectorAll(".option-card");

  // Function to update the selected border
  function updateSelection() {
    // Remove the selected class from all cards first
    optionCards.forEach((card) => {
      card.classList.remove("selected-option");
      card.querySelector(".option-title").classList.remove("selected-title");
    });

    // Find the currently checked radio button
    const checkedRadio = document.querySelector(
      'input[name="subscription_preference"]:checked'
    );

    // If a radio button is checked, add the class to its parent card
    if (checkedRadio) {
      // Find the closest parent with the class .option-card
      const parentCard = checkedRadio.closest(".option-card");
      const title = parentCard.querySelector(".option-title");
      if (parentCard) {
        parentCard.classList.add("selected-option");
        title.classList.add("selected-title");
      }
    }
  }

  // Add event listener to each radio button
  radioButtons.forEach((radio) => {
    // Use 'change' event as it's more reliable for radio buttons
    radio.addEventListener("change", updateSelection);
  });

  // Initial call to set the border on the default selected option on page load
  updateSelection();
});
