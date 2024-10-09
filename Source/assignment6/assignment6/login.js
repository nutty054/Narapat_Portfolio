window.onload = loginLoad;
function loginLoad() {
    var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin() {
    var form = document.forms["myLogin"];
    var username = form["username"].value;
    var password = form["password"].value;
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");
    if (username === storedUsername && password === storedPassword) {
        alert("เข้าสู่ระบบสำเร็จ");
        return true;
    } else {
        alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
        return false;
    }
}