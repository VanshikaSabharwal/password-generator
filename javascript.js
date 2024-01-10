let passwordBox = document.getElementById("password");
let length = 8;


let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number = "0123456789";
let allChar = upperCase + number;

function createPassword() {
    let password = " ";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += number[Math.floor(Math.random() * number.length)];


    while (length > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passwordBox.value = password;

}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
