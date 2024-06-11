const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("btn");
const position = document.getElementsByClassName("position");
const firstEye = document.getElementById("eye1");
const slashEye = document.getElementById("eye");
const form = document.getElementById("form");
const img = document.querySelectorAll(".img");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (firstName.value == "") {
    position[0].style.display = "inline";
    img[0].style.display = "inline";
    firstName.classList.add("error");
    firstName.placeholder = "";
  } else if (!/^[a-zA-Z]+$/.test(firstName.value)) {
    position[0].textContent = "invalid input";
    position[0].style.display = "inline";
    img[0].style.display = "inline";
    firstName.classList.add("error");
  } else {
    position[0].style.display = "none";
    img[0].style.display = "none";
    firstName.classList.remove("error");
  }

  if (lastName.value == "") {
    position[1].style.display = "inline";
    img[1].style.display = "inline";
    lastName.classList.add("error");
    lastName.placeholder = "";
  } else if (!/^[a-zA-Z]+$/.test(lastName.value)) {
    position[1].textContent = "invalid input";
    position[1].style.display = "inline";
    img[1].style.display = "inline";
    lastName.classList.add("error");
  } else {
    position[1].style.display = "none";
    img[1].style.display = "none";
    lastName.classList.remove("error");
  }

  if (email.value == "") {
    position[2].style.display = "inline";
    img[2].style.display = "inline";
    email.classList.add("error");

    email.placeholder = "example@gmail.com";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    position[2].textContent = "invalid email format";
    position[2].style.display = "inline";
    img[2].style.display = "inline";
    email.classList.add("error");
  } else {
    position[2].style.display = "none";
    img[2].style.display = "none";
    email.classList.remove("error");
  }

  if (password.value == "") {
    position[3].style.display = "inline";
    img[3].style.display = "inline";
    password.classList.add("error");
    slashEye.style.display = "none";
    password.placeholder = "";
  } else if (password.value.length < 8) {
    position[3].textContent = "password must be up to 8 characters";
    position[3].style.display = "inline";
    img[3].style.display = "inline";
    password.classList.add("error");
  } else {
    position[3].style.display = "none";
    img[3].style.display = "none";
    password.classList.remove("error");
    slashEye.style.display = "block"
  }
});

slashEye.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    slashEye.classList.remove("fa-eye-slash");
    firstEye.classList.add("fa-eye");
   
    firstEye.style.display = "inline";
  } else {
    password.type = "password";
    firstEye.classList.remove("fa-eye");
    slashEye.classList.add("fa-eye-slash");
    
    firstEye.style.display = "none"
  }
});


firstEye.addEventListener("click", () => {
  if (password.type === "text") {
    password.type = "password";
    slashEye.classList.add("fa-eye-slash");
    firstEye.classList.remove("fa-eye");
   
    slashEye.style.display = "inline";
  } else {
    password.type = "text";
    firstEye.classList.add("fa-eye");
    slashEye.classList.remove("fa-eye-slash");
    
    slashEye.style.display = "none"
  }
});

