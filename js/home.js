let logOutBtn = document.getElementById("logOutBtn");
let welcomeUser = document.getElementById("userName");
let userName = localStorage.getItem("userName");

welcomeUser.innerHTML = "Gaius Julius Caesar says: oaawz://tfdpzoivhyk.jvt/";

logOutBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});
