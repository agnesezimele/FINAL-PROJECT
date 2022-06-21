
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

let inputEmail = document.getElementById("email-input");
let send = document.getElementById("guideSent");


send.addEventListener("click", Open);

function Open (){
  if (ValidateEmail(inputEmail)=== false) {
    e.preventDefault();
  } else {
    open('https://www.dropbox.com/sh/nrj1qda2ezpqvw2/AADX85lni5frZ2UMbo5D6AXta?dl=0');
  }
}

function ValidateEmail(inputEmail) {
let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputEmail.value.match(validRegex)) {
    return true;
 } else {
  alert("Invalid email address");
    return false;
  }
}