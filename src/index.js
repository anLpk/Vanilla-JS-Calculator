// console.log("Hello from inside");

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function divide(x, y) {
  return x / y;
}

function multiply(x, y) {
  return x * y;
}

function operate(operator, x, y) {
  if (operator === "+") {
    return add(x, y);
  } else if (operator === "-") {
    return subtract(x, y);
  } else if (operator === "/") {
    return divide(x, y);
  } else if (operator === "*") {
    return multiply(x, y);
  } else {
    return null;
  }
}

// console.log(operate("/", 0, 5));
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const cleanTheDisplay = document.querySelector(".clear");

function clearDisplay() {
  display.innerText = "";
}

numbers.forEach((number) => {
  //   console.log(number);
  number.addEventListener("click", (event) => {
    display.innerText += event.currentTarget.value;
  });
});

operators.forEach((operator) => {
  //   console.log(operator);
  operator.addEventListener("click", (event) => {
    // console.log(event.currentTarget.value);
  });
});

cleanTheDisplay.addEventListener("click", (event) => {
  clearDisplay();
});
