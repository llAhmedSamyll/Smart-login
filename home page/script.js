var logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener("click", logout);

var currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (!currentUser) {
  window.location.href = "../index.html";
} else {
  document.getElementById(
    "welcome"
  ).innerHTML = `<marquee scrollamount="18"> Welcome ${currentUser.name} </marquee> `;
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "../index.html";
}
