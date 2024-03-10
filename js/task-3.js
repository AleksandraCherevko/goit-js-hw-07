const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
let defaultValue = "Anonymous";

nameInput.addEventListener("input", (event) => {
  if (event.target.value != "") {
    nameOutput.textContent = event.target.value.trim();
  } else {
    nameOutput.textContent = defaultValue;
  }
});
