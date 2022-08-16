const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", newInput);
function newInput(event) {
  output.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    output.textContent = "Anonymous";
  }
}
