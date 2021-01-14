// console.log("Hello from inside");
function add(x, y) {
  return parseFloat(x) + parseFloat(y);
}

function subtract(x, y) {
  return parseFloat(x) - parseFloat(y);
}

function divide(x, y) {
  return parseFloat(x) / parseFloat(y);
}

function multiply(x, y) {
  return parseFloat(x) * parseFloat(y);
}

function operate(x, operator, y) {
  if (operator === "add") {
    return add(x, y);
  } else if (operator === "subtract") {
    return subtract(x, y);
  } else if (operator === "divide") {
    return divide(x, y);
  } else if (operator === "multiply") {
    return multiply(x, y);
  } else {
    return null;
  }
}

const numbers = document.querySelectorAll("[data-action=number]");
const operators = document.querySelectorAll("[data-action=operator]");
const calculate = document.querySelector("[data-action=equal]");
const deleteNum = document.querySelector("[data-action=delete]");
const clear = document.querySelector("[data-action=clear]");
const decimal = document.querySelector("[data-action=decimal]");
const sign = document.querySelector("[data-action=sign]");
const display = document.querySelector(".display");

let firstNum = "";
let secondNum = "";
let operation = null;

window.addEventListener("keydown", setKey);
deleteNum.addEventListener("click", deleteNumber);
clear.addEventListener("click", clearScreen);
decimal.addEventListener("click", displayDecimal);
sign.addEventListener("click", displaySign);

numbers.forEach((number) => {
  number.addEventListener("click", () => displayNumber(number.innerText));
});

function setKey(e) {
  if (e.key >= 0 && e.key <= 9) displayNumber(e.key);
  if (e.key === ".") displayDecimal(e.key);
  if (e.key === "=" || e.key === "Enter") calculateNumber(e.key);
  if (e.key === "Backspace") deleteNumber(e.key);
  if (e.key === "Delete") clearScreen(e.key);
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/")
    setOperation(e.key);
}

function displayNumber(number) {
  if (display.innerText === "0") {
    display.innerText = number;
  } else {
    display.innerText += number;
  }
}

function displayDecimal() {
  if (!display.innerText.includes(".")) {
    display.innerText += ".";
  }
}

function deleteNumber() {
  if (display.innerText !== "0") {
    display.innerText = display.innerText.toString().slice(0, -1);
  }
  if (display.innerText === "") {
    display.innerText = "0";
  }
}

function clearScreen() {
  display.innerText = "0";
  firstNum = "";
  secondNum = "";
  operation = null;
}

function displaySign() {
  display.innerText = -display.innerText;
}
