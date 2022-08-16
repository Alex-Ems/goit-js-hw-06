let counterValue = 0;
const btnDec = document.querySelector('button[data-action="decrement"]');
const btnInc = document.querySelector('button[data-action="increment"]');
const myValue = document.querySelector("#value");

const countDec = function () {
  counterValue -= 1;
  myValue.textContent = counterValue;
};

const countInc = function () {
  counterValue += 1;
  myValue.textContent = counterValue;
};
btnDec.addEventListener("click", countDec);
btnInc.addEventListener("click", countInc);
btnDec.style.backgroundColor = "tomato";
btnInc.style.backgroundColor = "skyblue";
