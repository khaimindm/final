var modal = document.getElementById("confirmationModal");

var btn = document.getElementById("applyBtn");

var span = document.getElementsByClassName("close")[0];

var date = document.getElementById("date");

var selectedDate;

document.addEventListener("DOMContentLoaded", function(){
    var d = new Date();
    
    var day = d.getDate();
    if (day < 10) {
        day = "0" + day;
    }

    var month = d.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }

    var year = d.getFullYear();
    var name_input = document.getElementById("date");    
    var currentDate = year + "-" + month + "-" + day;
    name_input.value = currentDate;
    selectedDate = currentDate;
});

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

date.onchange = function() {
    selectedDate = date.value;    
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}