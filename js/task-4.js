const registerForm = document.querySelector(".login-form");

const useremail = document.querySelector('[type="email"]');
const password = document.querySelector('[type="password"]');

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const elements = event.target.elements;

  const info = {
    email: elements.email.value,
    password: elements.password.value,
  };

  if (useremail.value === "" || password.value === "") {
    return alert(`Please fill in all the fields!`);
  }

  console.log(info);
  event.target.reset();
}
