window.onload = function() {

    document.getElementById("top").innerHTML = "Welcome to the Forum";
}

var postCount = 0; 

function postMessage() {
    const message = document.getElementById("message").value;

    if (message.trim() === "") {
        alert("กรุณาพิมพ์ข้อความก่อนโพสต์");
        return;
    }

    postCount++;

    if (postCount === 1) {
        document.getElementById("topic").innerHTML = message;
    } else if (postCount === 2) {
        document.getElementById("reply1").innerHTML = message;
    } else if (postCount === 3) {
        document.getElementById("reply2").innerHTML = message;
        postCount = 0; 
    }

    document.getElementById("message").value = "";
}

function clearMessages() {

    document.getElementById("topic").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";
    postCount = 0;
}