// Display
const display = document.querySelector("#display") as HTMLInputElement;

// Top row
const btnAC = document.querySelector("#btn-ac") as HTMLButtonElement;
const btnDel = document.querySelector("#btn-del") as HTMLButtonElement;
const btnPercent = document.querySelector("#btn-percent") as HTMLButtonElement;
const btnDivide = document.querySelector("#btn-divide") as HTMLButtonElement;

// Number buttons
const btn7 = document.querySelector("#btn-7") as HTMLButtonElement;
const btn8 = document.querySelector("#btn-8") as HTMLButtonElement;
const btn9 = document.querySelector("#btn-9") as HTMLButtonElement;
const btn4 = document.querySelector("#btn-4") as HTMLButtonElement;
const btn5 = document.querySelector("#btn-5") as HTMLButtonElement;
const btn6 = document.querySelector("#btn-6") as HTMLButtonElement;
const btn1 = document.querySelector("#btn-1") as HTMLButtonElement;
const btn2 = document.querySelector("#btn-2") as HTMLButtonElement;
const btn3 = document.querySelector("#btn-3") as HTMLButtonElement;
const btn0 = document.querySelector("#btn-0") as HTMLButtonElement;

// Operators
const btnMultiply = document.querySelector(
  "#btn-multiply"
) as HTMLButtonElement;
const btnMinus = document.querySelector("#btn-minus") as HTMLButtonElement;
const btnPlus = document.querySelector("#btn-plus") as HTMLButtonElement;
const btnDot = document.querySelector("#btn-dot") as HTMLButtonElement;
const btnEqual = document.querySelector("#btn-equal") as HTMLButtonElement;

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
    operator ="minus"
  }
});
btnMultiply.addEventListener("click", () => {
  if (display.value !== "") {
    firstNumber = display.value;
    display.value = "";
    operator="mul";
  }
});

btnDivide.addEventListener("click", () => {
  if (display.value !== "") {
    firstNumber = display.value;
    display.value = "";
    operator="divi"
  }
});
btnPercent.addEventListener("click", () => {
  if (display.value !== "") {
    firstNumber = display.value;
    display.value = "";
    operator = "pere"
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
