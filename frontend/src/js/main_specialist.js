document.getElementById("elForMainTable").addEventListener('click', userBtn);

var modal = document.getElementById("doctorsAppointmentModal");

var userEl = "";
var userId = "";

var cancelBtn = document.getElementById("cancelBtn");
var applyBtn = document.getElementById("applyBtn");

var errorMessage = "";

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

cancelBtn.onclick = function() {
    modal.style.display = "none";
    hideMessage();
}

function hideMessage() {
    document.getElementById("message").innerHTML = "";
    document.getElementById("message").style.visibility = "hidden";
}