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
  number.addEventListener("click", () => displayNumber(number.textContent));
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
  if (display.textContent === "0") {
    display.textContent = number;
  } else {
    display.textContent += number;
  }
}

function displayDecimal() {
  if (!display.textContent.includes(".")) {
    display.textContent += ".";
  }
}

function deleteNumber() {
  if (display.textContent !== "0") {
    display.textContent = display.textContent.toString().slice(0, -1);
  }
  if (display.textContent === "") {
    display.textContent = "0";
  }
}

function clearScreen() {
  display.textContent = "0";
  firstNum = "";
  secondNum = "";
  operation = null;
}

function displaySign() {
  display.textContent = -display.textContent;
}
