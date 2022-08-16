function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  boxesEl: document.querySelector("#boxes"),
  inputEl: document.querySelector("input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
};
let sizeBox = 30;
const createBoxes = (amount) => {
  for (let i = 0; i < amount; i++) {
    const boxEl = document.createElement("div");
    console.log(boxEl);
    sizeBox += 10;
    boxEl.style.width = `${sizeBox}px`;
    boxEl.style.height = `${sizeBox}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    refs.boxesEl.append(boxEl);
  }
};

const onButtonClick = () => {
  createBoxes(refs.inputEl.value);
  if (refs.inputEl.value < 100) {
    refs.inputEl.value = "";
  } else {
    return alert`Good luck, scrollman!!!`;
  }
};

refs.createBtn.addEventListener("click", onButtonClick);
refs.destroyBtn.addEventListener("click", () => {
  refs.boxesEl.innerHTML = "";
  sizeBox = 30;
});
