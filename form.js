var formD = document;
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

let strongPassword = new RegExp(
  "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
);
let mediumPassword = new RegExp("((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))");

let timeout;

let strengthBadge = formD.getElementById("StrengthDisp");
let password = formD.getElementById("exampleInputPassword1");

function validatEfORM() {
  console.log("Valodate");
  let password2 = formD.getElementById("exampleInputPassword2").value;
  let email = formD.getElementById("exampleInputEmail1").value;
  let phone = formD.getElementById("phone").value;

  if (
    phonenumber(phone) &&
    validateEmail(email) &&
    passwordVlidate(password.value) &&
    passwordVlidate2(password2)
  ) {
    window.location.href = "home.html";
    return true;
  } else {
    console.log("Valodate");

    return false;
  }
}

function passwordVlidate(inputText) {
  if (inputText.length > 7) {
    return true;
  } else {
    window.alert("Password Length not less than 8");
    return false;
  }
}

function passwordVlidate2(inputText) {
  if (inputText === password.value) {
    return true;
  } else {
    window.alert("Password not mtached");
    return false;
  }
}

function validateEmail(inputText) {
  if (inputText.match(mailformat)) {
    return true;
  } else {
    window.alert("You have entered an invalid email address!");
    return false;
  }
}

function phonenumber(inputtxt) {
  if (inputtxt.length < 10) {
    window.alert("Enter Valid mobile number");
  }
  if (inputtxt.match(phoneno)) {
    return true;
  } else {
    alert("Not a valid Phone Number");
    return false;
  }
}

function StrengthChecker(PasswordParameter) {
  // We then change the badge's color and text based on the password strength

  if (strongPassword.test(PasswordParameter)) {
    strengthBadge.style.backgroundColor = "green";
    strengthBadge.textContent = "Strong";
    console.log("strong");
  } else if (mediumPassword.test(PasswordParameter)) {
    strengthBadge.style.backgroundColor = "blue";
    strengthBadge.textContent = "Medium";
    console.log("medium");
  } else {
    strengthBadge.style.backgroundColor = "red";
    strengthBadge.textContent = "Weak";
    console.log("weak");
  }
}

// Adding an input event listener when a user types to the  password input
password.addEventListener("input", () => {
  strengthBadge.style.display = "block";
  clearTimeout(timeout);

  timeout = setTimeout(() => StrengthChecker(password.value), 50);

  if (password.value.length !== 0) {
    strengthBadge.style.display != "block";
  } else {
    strengthBadge.style.display = "none";
  }
});




  