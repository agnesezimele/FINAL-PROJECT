
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

let inputEmail = document.getElementById("email-input");
let send = document.getElementById("guideSent");


send.addEventListener("click", Download);

function Download(){
  if (inputEmail.value == "") {
    alert("empty");
  } else {

  }
}