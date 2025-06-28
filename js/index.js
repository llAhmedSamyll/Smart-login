var usNameInput = document.getElementById("usNameInput");
var usEmailInput = document.getElementById("usEmailInput");
var usPassInput = document.getElementById("usPassInput");
var signUpBtn = document.getElementById("signUpBtn");
var usLoginName = document.getElementById("usLoginName");
var usLoginPass = document.getElementById("usLoginPass");
var loginBtn = document.getElementById("loginBtn");

var loginBox = document.querySelector(".login");

usNameInput.addEventListener("input", usNamevalid);
usEmailInput.addEventListener("input", usEmailvalid);
usPassInput.addEventListener("input", usPassvalid);

signUpBtn.addEventListener("click", signUp);
loginBtn.addEventListener("click", login);

function usNamevalid() {
  var regex = /^[a-zA-Z][a-zA-Z0-9 _\.]{1,18}[a-zA-Z0-9]$/;
  var text = usNameInput.value;
  var msgName = document.getElementById("msgName");
  if (regex.test(text)) {
    usNameInput.classList.remove("is-invalid");
    usNameInput.classList.add("is-valid");
    msgName.classList.add("d-none");
    return true;
  } else {
    usNameInput.classList.remove("is-valid");
    usNameInput.classList.add("is-invalid");
    msgName.classList.remove("d-none");

    return false;
  }
}
function usEmailvalid() {
  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var text = usEmailInput.value;
  var msgEmail = document.getElementById("msgEmail");
  if (regex.test(text)) {
    usEmailInput.classList.remove("is-invalid");
    usEmailInput.classList.add("is-valid");
    msgEmail.classList.add("d-none");
    return true;
  } else {
    usEmailInput.classList.remove("is-valid");
    usEmailInput.classList.add("is-invalid");
    msgEmail.classList.remove("d-none");

    return false;
  }
}
function usPassvalid() {
  var regex = /^.{9,}$/;
  var text = usPassInput.value;
  var msgPass = document.getElementById("msgPass");
  if (regex.test(text)) {
    usPassInput.classList.remove("is-invalid");
    usPassInput.classList.add("is-valid");
    msgPass.classList.add("d-none");
    return true;
  } else {
    usPassInput.classList.remove("is-valid");
    usPassInput.classList.add("is-invalid");
    msgPass.classList.remove("d-none");

    return false;
  }
}
var users = [];

if (localStorage.getItem("userscontainer") !== null) {
  users = JSON.parse(localStorage.getItem("userscontainer"));
}

function signUp() {
  if (usNamevalid() & usEmailvalid() & (usPassvalid() === true)) {
    var userInfo = {
      name: usNameInput.value,
      email: usEmailInput.value,
      pass: usPassInput.value,
    };
    var existingUser = users.find(function (user) {
      return user.email === usEmailInput.value;
    });
    if (existingUser) {
      var msgEmailEx = document.getElementById("msgEmailEx");
      msgEmailEx.classList.remove("d-none");
      return;
    }

    users.push(userInfo);
    localStorage.setItem("userscontainer", JSON.stringify(users));
    clearForm();
    loginside();
  }
}

function clearForm() {
  usNameInput.value = "";
  usEmailInput.value = "";
  usPassInput.value = "";
}
function loginside() {
  if (this.checked) {
    loginBox.style.transform = "translateY(0)";
  } else {
    loginBox.style.transform = "translateY(-700px)";
    document.getElementById("ddd").style.filter = "blur(650px)";
  }
}

function login() {
  var userFound = users.find(function (user) {
    return user.email === usLoginName.value && user.pass === usLoginPass.value;
  });

  if (userFound) {
    localStorage.setItem("currentUser", JSON.stringify(userFound));
    window.location.href = "./home page/home.html";
  } else {
    var loginAlert = document.getElementById("loginAlert");
    loginAlert.classList.remove("d-none");
  }
}
