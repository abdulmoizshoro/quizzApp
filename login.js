var userName = document.getElementById("username");
var password = document.getElementById("password");
localStorage.setItem('userName', "admin");
localStorage.setItem('password', 123456);
var userName1 = localStorage.getItem('userName');
var password1 = localStorage.getItem('password');
function login() {
    if (userName.value === userName1 && password.value === password1) {
        location = 'main.html'
    }
    else {
        alert('Username Or Password Incorect')
    }

}