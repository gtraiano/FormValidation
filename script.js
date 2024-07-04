// validates input, returns boolean
const validator = (input) => {
  const value = Number.parseFloat(input);
  return !Number.isNaN(value) && value > 10;
};

// execute validator for given input
const validateInput = (input, validator) => validator(input);

const input = document.querySelector("form input#number");
const form = document.querySelector("form");
const submit = document.querySelector("form input[type='submit']");

input.addEventListener("input", (e) => {
  // perform validation on input
  const isValid = validateInput(e.currentTarget.value, validator);
  // mark field as invalid and disable submit button depending on input validation
  if (!isValid) {
    input.setCustomValidity("Value must be greater than 10");
    submit.setAttribute("disabled", "");
  } else {
    input.setCustomValidity("");
    submit.removeAttribute("disabled");
  }
});

// form submit cleanup
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(`You submitted ${input.value}`);
  input.value = "";
});

// disable submit button on initial load if input value is empty
document.addEventListener("DOMContentLoaded", () => {
  !input.value.trim().length && submit.setAttribute("disabled", "");
});

