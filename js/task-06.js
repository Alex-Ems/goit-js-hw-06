const myInput = document.querySelector("#validation-input");
myInput.addEventListener("blur", onBlur);
function onBlur() {
  if (this.value.length === Number(this.dataset.length)) {
    this.classList.remove("invalid");
    this.classList.add("valid");
    console.log(`Well done`);
  } else {
    this.classList.remove("valid");
    this.classList.add("invalid");
    console.log(`Please enter 6 symbols`);
  }
}
