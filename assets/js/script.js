'use strict';

const toggleFunc = (elem) => {
  elem.classList.toggle("active");
}

const denyScroll = (elem) => {
  elem.classList.toggle("deny-scroll");
}

const mobileMenu = document.querySelector(".mobile-menu");
const accordion = document.querySelector(".accordion");
const overlay = document.querySelector(".overlay");
const faqItems = document.querySelectorAll(".faq-list__item");
const body = document.querySelector("body");







mobileMenu.addEventListener("click", function() {
  toggleFunc(accordion);
  toggleFunc(mobileMenu);
  toggleFunc(overlay);
  denyScroll(body);
});

faqItems.forEach(o => {
  o.addEventListener("click", function() {
    toggleFunc(o);
  });
});


const form = document.querySelector("form");
const last_name = document.getElementById("lname");
const first_name = document.getElementById("fname");
const country = document.getElementById("country");
const tel = document.getElementById("tel");
const email = document.getElementById("email");
const textarea = document.getElementById("textarea");
const inputControl = document.querySelector(".form__input-wrapper");



// Event Listener of the form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
}); 

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("_error");
  inputControl.classList.remove("_success");
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = '';
  inputControl.classList.add('_success');
  inputControl.classList.remove('_error');
}

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());

}

const validateInputs = () => {
  const lastNameValue = last_name.value.trim();
  const firstNameValue = first_name.value.trim();
  const countryValue = country.value.trim();
  const telValue = tel.value.trim();
  const emailValue = email.value.trim();
  const textareaValue = textarea.value.trim();

  if(lastNameValue === '') {
    setError(last_name, 'Введите вашу фамилию');
  } else {
    setSuccess(last_name);
  }

  
  if(firstNameValue === '') {
    setError(first_name, 'Введите ваше ваше имя');
  } else {
    setSuccess(first_name);
  }

  if(countryValue === '') {
    setError(country, 'Введите вашу страну');
  } else {
    setSuccess(country);
  }

  if(telValue === '') {
    setError(tel, 'Введите ваш номер телефона');
  } else {
    setSuccess(tel);
  }

  if(emailValue === '') {
    setError(email, 'Введите ваш email');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Введите верный формат');
  } else {
    setSuccess(email);
  }

  if(textareaValue === '') {
    setError(textarea, 'Задайте ваш вопрос');
  } else {
    setSuccess(textarea);
  }

}
