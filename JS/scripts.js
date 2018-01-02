/* JAVASCRIPT */

loginButton = document.getElementById("login");
registerButton = document.getElementById("register");

loginForm = document.getElementById("login-form");
registerForm = document.getElementById("register-form");

/* Listen to register button. */
registerButton.addEventListener("click", function(e) {
  e.preventDefault;
  loginForm.classList.remove("login"); // -> removing the class
  void registerForm.offsetWidth; // -> triggering reflow /* The actual magic */ without this it wouldn't work.
  registerForm.classList.add("register"); // -> and re-adding the class
}, false);

/* Listen to login button. */
loginButton.addEventListener("click", function(e) {
  e.preventDefault;
  registerForm.classList.remove("register"); // -> removing the class
  void loginForm.offsetWidth; // -> triggering reflow /* The actual magic */ without this it wouldn't work.
  loginForm.classList.add("login"); // -> and re-adding the class
}, false);

function validateRegisterForm() {
    for (var input in registerForm) {
      if (input.value == "") {  return false; }
    }
    var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (pattern.test(registerForm["email"].value) == false)  {
        alert('Correo Electrónico inválido');
        return false;
    }
    return true;
}

function validateLoginForm() {
  for (var input in loginForm) {
    if (input.value == "") {  return false; }
  }
  var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (pattern.test(loginForm["email"].value) == false)  {
      alert('Correo Electrónico inválido');
      return false;
  }
  return true;
}
