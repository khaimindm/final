document.getElementById("elForMainTable").addEventListener('click', userBtn);

var modal = document.getElementById("doctorsAppointmentModal");

var userEl = "";
var userId = "";

function userBtn(event) {
    userEl = event.target;

    if (userEl.nodeName == "SPAN") {
        modal.style.display = "block";
        userId = userEl.getAttribute("id");        
        document.getElementById('modalHeader').innerHTML = userEl.innerHTML + " User Id: " + userId;
    }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}