document.getElementById('main-form').addEventListener("submit", checkForm);

function todayDate() {
let today = new Date();

let yyyy = today.getFullYear();
let mm = String(today.getMonth() + 1).padStart(2, '0');
let dd = String(today.getDate()).padStart(2, '0');

let result = yyyy + '-' + mm + '-' + dd;
document.getElementById('birthday').max = result;
console.log('Дата: ' + document.getElementById('birthday').max);
}

todayDate();

function checkForm() {
}