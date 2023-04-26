var addModal = document.getElementById("addModal");
var deleteModal = document.getElementById("deleteModal");

var addSpecBtn = document.getElementById("addSpecBtn");
var deleteSpecBtn = document.getElementById("deleteSpecBtn");

var addSpan = document.getElementsByClassName("addClose")[0];
var deleteSpan = document.getElementsByClassName("deleteClose")[0];

addSpecBtn.onclick = function() {
    addModal.style.display = "block";
}

deleteSpecBtn.onclick = function() {
    deleteModal.style.display = "block";
}

addSpan.onclick = function() {
    addModal.style.display = "none";
}

deleteSpan.onclick = function() {
    deleteModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == addModal) {
        addModal.style.display = "none";
    }

    if (event.target == deleteModal) {
        deleteModal.style.display = "none"
    }
}