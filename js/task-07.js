const input = document.querySelector("#font-size-control");
const content = document.querySelector("#text");
input.addEventListener("input", stretch);
function stretch(event) {
  content.style.fontSize = `${event.currentTarget.value}px`;
}
