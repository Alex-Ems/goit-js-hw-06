function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body");
const btnEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");

btnEl.addEventListener("click", () => {
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = `${color}`;
  colorEl.textContent = color;
});
