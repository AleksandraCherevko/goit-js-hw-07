// Для рендеру елементів на сторінці створи функцію createBoxes(amount),
// яка приймає один параметр — число, що зберігає кількість елементів для рендеру.
// // Функція має створювати стільки <div> елементів,
// скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.

const createBtn = document.querySelector("[data-create]");

const destroyBtn = document.querySelector("[data-destroy]");

const numberEl = document.querySelector("#controls");

const divBox = document.querySelector("#boxes");
let width = 30;
let height = 30;

const input = document.querySelector("[type='number']");

createBtn.addEventListener("click", clickCheck);

function clickCheck(event) {
  if (input.value < 1 || input.value > 100) {
    createBoxes(amount);

    return;
  }

  createBoxes(input.value);
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    i = document.createElement("div");

    i.style.width = 30 + 10;
    i.style.height = 30;
    i.style.backgroundColor = getRandomHexColor();

    divBox.append(i);
  }
}
destroyBtn.addEventListener("click", deleteFun);

function deleteFun(event) {
  input.value = "";
  return (divBox.innetrHTML = "");
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
