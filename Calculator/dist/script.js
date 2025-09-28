// Display
const display = document.querySelector("#display");
// Top row
const btnAC = document.querySelector("#btn-ac");
const btnDel = document.querySelector("#btn-del");
const btnPercent = document.querySelector("#btn-percent");
const btnDivide = document.querySelector("#btn-divide");
// Number buttons
const btn7 = document.querySelector("#btn-7");
const btn8 = document.querySelector("#btn-8");
const btn9 = document.querySelector("#btn-9");
const btn4 = document.querySelector("#btn-4");
const btn5 = document.querySelector("#btn-5");
const btn6 = document.querySelector("#btn-6");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const btn0 = document.querySelector("#btn-0");
// Operators
const btnMultiply = document.querySelector("#btn-multiply");
const btnMinus = document.querySelector("#btn-minus");
const btnPlus = document.querySelector("#btn-plus");
const btnDot = document.querySelector("#btn-dot");
const btnEqual = document.querySelector("#btn-equal");
let firstNumber = "";
let secondNumber = "";
let operator = "add";
btnPlus.addEventListener("click", () => {
    if (display.value !== "") {
        firstNumber = display.value;
        display.value = "";
        operator = "add";
    }
});
btnMinus.addEventListener("click", () => {
    if (display.value !== "") {
        firstNumber = display.value;
        display.value = "";
        operator = "minus";
    }
});
btnMultiply.addEventListener("click", () => {
    if (display.value !== "") {
        firstNumber = display.value;
        display.value = "";
        operator = "mul";
    }
});
btnDivide.addEventListener("click", () => {
    if (display.value !== "") {
        firstNumber = display.value;
        display.value = "";
        operator = "divi";
    }
});
btnPercent.addEventListener("click", () => {
    if (display.value !== "") {
        firstNumber = display.value;
        display.value = "";
        operator = "pere";
    }
});
let grandTotal;
btnEqual.addEventListener("click", () => {
    secondNumber = display.value;
    switch (operator) {
        case "add":
            grandTotal = Number(firstNumber) + Number(secondNumber);
            display.value = grandTotal;
            break;
        case "minus":
            grandTotal = Number(firstNumber) - Number(secondNumber);
            display.value = grandTotal;
            break;
        case "mul":
            grandTotal = Number(firstNumber) * Number(secondNumber);
            display.value = grandTotal;
            break;
        case "divi":
            grandTotal = Number(firstNumber) / Number(secondNumber);
            display.value = grandTotal;
            break;
        case "pere":
            grandTotal = Number(firstNumber) % Number(secondNumber);
            display.value = grandTotal;
            break;
    }
});
btnAC.addEventListener("click", () => {
    display.value = "";
});
btnDel.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});
btn0.addEventListener("click", () => {
    display.value += "0";
});
btn1.addEventListener("click", () => {
    display.value += "1";
});
btn2.addEventListener("click", () => {
    display.value += "2";
});
btn3.addEventListener("click", () => {
    display.value += "3";
});
btn4.addEventListener("click", () => {
    display.value += "4";
});
btn5.addEventListener("click", () => {
    display.value += "5";
});
btn6.addEventListener("click", () => {
    display.value += "6";
});
btn7.addEventListener("click", () => {
    display.value += "7";
});
btn8.addEventListener("click", () => {
    display.value += "8";
});
btn9.addEventListener("click", () => {
    display.value += "9";
});
export {};
//# sourceMappingURL=script.js.map