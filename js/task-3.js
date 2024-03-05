// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
    if (event.currentTarget.value.trim(){
        
        return nameOutput.textContent;
    })
//   nameOutput.textContent = event.currentTarget.value.trim();
//   nameOutput.innerText = event.currentTarget.value.includes(" ");
});

// refs.nameInput.addEventListener("input", onInputChange);
// function onInputChange(event) {
//   refs.nameOutput.textContent(' ') = nameOutput.trim();
// }
