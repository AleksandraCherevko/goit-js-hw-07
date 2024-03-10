function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtn = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

changeColorBtn.addEventListener("click", () => {
  colorEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = colorEl.textContent;
});
