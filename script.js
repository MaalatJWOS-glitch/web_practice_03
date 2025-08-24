let display = document.getElementById('display');
let currentInput = "";
let operator = "";
let firstNumber = "";
let expression = "";

function appendNumber(num) {
    currentInput += num;
    expression += num;
    display.value = expression;
}

function setOperation(op) {
    if (currentInput === "") return;

    if (firstNumber !== "") {
        calculateResult();
    }

    operator = op;
    firstNumber = currentInput;
    currentInput = "";

    expression += " " + op + " ";
    display.value = expression;
}

function calculateResult() {
    if (firstNumber === "" || currentInput === "") return;

    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(currentInput);
    let result = 0;

    if (operator === "+") result = num1 + num2;
    if (operator === "-") result = num1 - num2;
    if (operator === "*") result = num1 * num2;
    if (operator === "/") result = num2 !== 0 ? num1 / num2 : "Error";

    display.value = expression + " = " + result;
    
    currentInput = result.toString();
    firstNumber = "";
    operator = "";
    expression = result.toString();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        expression += '.';
        display.value = expression;
    }
}

function clearDisplay() {
    currentInput = "";
    firstNumber = "";
    operator = "";
    expression = "";
    display.value = "";
}
