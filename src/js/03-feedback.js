import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");


form.addEventListener('input', throttle(inputHandler, 500));
window.addEventListener('load', onWindiwLoad);
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const obg = JSON.parse(localStorage.getItem("feedback-form-state"));
    console.log(obg);
    localStorage.removeItem("feedback-form-state");
    input.value = '';
    textarea.innerHTML = '';
 };

function onWindiwLoad() {
    if (localStorage.getItem("feedback-form-state") !== null) {
        const obg = JSON.parse(localStorage.getItem("feedback-form-state"));
        input.value = obg.email;
        textarea.innerHTML = obg.message;
    };

};

function inputHandler() {
    let obg = {
        email: input.value,
        message: textarea.value,
   }
    localStorage.setItem("feedback-form-state", JSON.stringify(obg));
};



