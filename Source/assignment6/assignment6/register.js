window.onload = pageLoad;
function pageLoad() {
    var form = document.getElementById("myRegister");
    form.onsubmit = validateForm;
}

function validateForm() {
    var form = document.forms["myRegister"];
    var fname = form["firstname"].value;
    var lname = form["lastname"].value;
    var gender = form["gender"].value;
    var bday = form["bday"].value;
    var email = form["email"].value;
    var username = form["username"].value;
    var passwords = form["password"];
    var password = passwords[0].value;
    var retype_password = passwords[1].value;

    var errorMgElement = document.getElementById("errormsg");
    errorMgElement.textContent = "";

    if (fname == "" || lname == "" || gender == "" || bday == "" || email == "" || username == "" || password == "" || retype_password == ""){
        errorMgElement.style.color = "red";
        errorMgElement.textContent = "Please complete the information";
        alert("Please complete the information");
        return false;
    }
    if (password != retype_password){
        errorMgElement.style.color = "red"
        errorMgElement.textContent = "Passwords do not match.";
        alert("Passwords do not match.");
        return false;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    return true;}