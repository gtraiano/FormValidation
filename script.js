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

// input event handler
const onInput = e => {
  // disable submit button on empty input
  if(!e.currentTarget.value.trim().length) return submit.setAttribute("disabled", "");
  
  const isValid = validateInput(e.currentTarget.value, validator);
  // mark field as invalid and disable submit button depending on input validation
  if (!isValid) {
    e.currentTarget.setCustomValidity("Value must be greater than 10");
    submit.setAttribute("disabled", "");
  }
  else {
    e.currentTarget.setCustomValidity("");
    submit.removeAttribute("disabled");
  }
};

// form submit event handler
const onSubmit = e => {
  e.preventDefault();
  alert(`You submitted ${input.value}`);
  input.value = "";
}

input.addEventListener("input", onInput);
form.addEventListener("submit", onSubmit);

// disable submit button on initial load if input value is empty
document.addEventListener("DOMContentLoaded", () => {
  !input.value.trim().length && submit.setAttribute("disabled", "");
});
