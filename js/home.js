let logOutBtn = document.getElementById("logOutBtn");
let welcomeUser = document.getElementById("userName");
let userName = localStorage.getItem("userName");

welcomeUser.innerHTML = "Добро пожаловать!";

logOutBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});
