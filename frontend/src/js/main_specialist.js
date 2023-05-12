document.getElementById("elForMainTable").addEventListener('click', userBtn);

var modal = document.getElementById("doctorsAppointmentModal");

function userBtn(event) {    
    console.log(event.target)    
    modal.style.display = "block";
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