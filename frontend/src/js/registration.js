document.getElementById('main-form').addEventListener("submit", checkForm);
function todayDate() {
let today = new Date();

let yyyy = today.getFullYear();
let mm = String(today.getMonth() + 1).padStart(2, '0');
let dd = String(today.getDate()).padStart(2, '0');

let result = yyyy + '-' + mm + '-' + dd;
document.getElementById('birthday').max = result;
}

todayDate();

function checkForm(event) {
  event.preventDefault();
  let el = document.getElementById('main-form');

  let login = el.login.value;
  let password = el.password.value;
  let name = el.name.value;
  let birthday = el.birthday.value;
  let role = el.role.value;

  let error = "";

  if(login == "" || password == "" || name == "" || birthday == "") {
  error = "Заполните все поля";
  document.getElementById('message')
.innerHTML = error;
  document.getElementById('message').style.visibility = "visible";
  }

  // console.log(error);
}