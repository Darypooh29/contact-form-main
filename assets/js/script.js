"use strict";

const input_name = document.querySelector("#name");
const lastname_input = document.querySelector("#lastname");
const email_input = document.querySelector("#email");
const radio_button_container = document.querySelectorAll(
  ".field-container__query-type-container"
);

radio_button_container.forEach((container) => {
  container.addEventListener("click", () => {
    const radioButton = container.querySelector('input[type="radio"]');

    radioButton.checked = true;

    radio_button_container.forEach((c) => {
      c.classList.remove("selected");
      const input = c.querySelector('input[type="radio"]');
      if (input) {
        input.classList.remove("selected-input");
      }
    });

    container.classList.add("selected");

    radioButton.classList.add("selected-input");

    const selectedValue = radioButton.value;
    console.log("Selected Value:", selectedValue);
  });
});
