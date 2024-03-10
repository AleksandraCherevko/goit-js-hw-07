// Для рендеру елементів на сторінці створи функцію createBoxes(amount),
// яка приймає один параметр — число, що зберігає кількість елементів для рендеру.
// // Функція має створювати стільки <div> елементів,
// скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.

// const createBtn = document.querySelector("[data-create]");
// console.log(createBtn);
// const destroyBtn = document.querySelector("[data-destroy]");
// console.log(destroyBtn);
// const numberEl = document.querySelector("#controls input");
// console.log(numberEl);
// const divBox = document.querySelector("#boxes");
// console.log(divBox);

// function createBoxes(amount) {
//   for (let i = 0; i < amount; i += 1) {
//     element = document.createBoxes("div");
//     element.style.width = 30 + 10 * i + "px";
//     elem.style.height = 30 + "px";
//     elment.style.backgroundColor = getRandomHexColor();
//   }

//   divBox.append(element);
// }

// function destroyBoxes(amount) {
//   numberEl.value = "";
//   return (divBox.innerHTML = "");
// }
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// createBtn.addEventListener("click", function () {
//   let amount = numberEl.value;
//   if (amount > 0) {
//     createBoxes(amount);
//   }
// });

// destroyBtn.addEventListener("click", function () {
//   divBox.innerHTML = "";
// });
