let lengthRange = document.querySelector("#lengthRange");
let lowercase = document.querySelector("#lowercase");
let uppercase = document.querySelector("#uppercase");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");
let passwordOutput = document.querySelector("#passwordOutput");
let generateBtn = document.querySelector("#generateBtn");
let copyBtn = document.querySelector("#copyBtn");
let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let Numbers = "0123456789";
let speacilsChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/";
generateBtn.addEventListener("click", () => {
    let password = "";
    if (lowercase.checked === true) {
        password = lowerCaseLetters;
    }
    if (uppercase.checked === true) {
        password += upperCaseLetters;
    }
    if (numbers.checked === true) {
        password += Numbers;
    }
    if (symbols.checked === true) {
        password += speacilsChars;
    }
    if (lowercase.checked === false && uppercase.checked === false && numbers.checked === false && symbols.checked === false) {
        alert("Please clicked the one checkbox atleast");
    }
    let leng = Number(lengthRange.value);
    let newPassword = "";
    for (let i = 0; i < leng; i++) {
        const randomPass = password[Math.floor(Math.random() * password.length)];
        newPassword += randomPass;
    }
    passwordOutput.value = newPassword;
});
copyBtn.addEventListener("click", () => {
    if (passwordOutput.value === "") {
        alert("Genrate the password first");
    }
    else {
        navigator.clipboard.writeText(passwordOutput.value);
    }
});
export {};
//# sourceMappingURL=script.js.map