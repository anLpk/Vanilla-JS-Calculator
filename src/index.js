// // console.log("Hello from inside");
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

const calculator = document.getElementById("calculator");
const keys = calculator.querySelector(".main-container");
const display = document.querySelector(".display");

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    // console.log("It is working! Nice!");
    const key = e.target;
    const action = key.dataset.action;
    // console.log(action);
    const keyContent = key.textContent;
    const displayNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action) {
      if (displayNum === "0" || previousKeyType === "operator") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayNum + keyContent;
      }
    }

    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.firstValue = displayNum;
      calculator.dataset.operator = action;
    }

    if (action === "decimal") {
      display.textContent = displayNum + ".";
    }

    if (action === "clear") {
      display.textContent = "0";
    }

    if (action === "sign") {
      display.textContent = -display.textContent;
    }

    if (action === "calculate") {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayNum;

      display.textContent = operate(firstValue, operator, secondValue);
    }
  }
});
