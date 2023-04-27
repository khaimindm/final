var addModal = document.getElementById("addModal");
var deleteModal = document.getElementById("deleteModal");

var addSpecBtn = document.getElementById("addSpecBtn");
var deleteSpecBtn = document.getElementById("deleteSpecBtn");

var addSpan = document.getElementsByClassName("addClose")[0];
var deleteSpan = document.getElementsByClassName("deleteClose")[0];

var cancelBtnAddModal = document.getElementById("cancelBtnAddModal");

var addError = "";

addSpecBtn.onclick = function() {
    addModal.style.display = "block";
}

deleteSpecBtn.onclick = function() {
    deleteModal.style.display = "block";
}

addSpan.onclick = function() {
    addModal.style.display = "none";
    addHideMessage();
}

deleteSpan.onclick = function() {
    deleteModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == addModal) {
        addModal.style.display = "none";
        addHideMessage();
    }

    if (event.target == deleteModal) {
        deleteModal.style.display = "none"
    }
}

cancelBtnAddModal.onclick = function() {
    addModal.style.display = "none";
    addHideMessage();
}

document.getElementById('addNewSpecForm').addEventListener("submit", checkAddForm);

function checkAddForm(event) {
    event.preventDefault();
    var addForm = document.getElementById('addNewSpecForm');

    var addValue = addForm.nameOfTheSpecialist.value;

    if (addValue == "") {
        addError = "Заполните поле"
        document.getElementById('messageAddNewSpecForm').innerHTML = addError;
        document.getElementById('messageAddNewSpecForm').style.visibility = "visible";
    } else {
        addHideMessage();
    }
}

function addHideMessage() {
    document.getElementById('messageAddNewSpecForm').innerHTML = "";
    document.getElementById('messageAddNewSpecForm').style.visibility = "hidden";
}