function add(a, b) {
    a = Number(a)
    b = Number(b)
    return a+b;
};

function subtract(a, b) {
    a = Number(a)
    b = Number(b)
    return a-b;
}

function multiply(a, b) {
    a = Number(a)
    b = Number(b)
    return a*b;
}

function divide(a, b) {
    a = Number(a)
    b = Number(b)
    if (b === 0) {
        alert("Divide by zero is forbidden");
    }
    return a/b;
}

function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b)
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
}

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let inputA;
let inputB;
let inputOperator;
let first = true;
let opCheck = false;
buttons.forEach((button) => {
    if (button.textContent === "Clear") {
        button.addEventListener("click", clearF)
        function clearF() {
            display.textContent = "";
            inputA = null;
            inputB = null;
            inputOperator = null;
            first = true;
            opCheck = false;
        }
    } else if (button.textContent === "+" || button.textContent === "-" || button.textContent === "*" || button.textContent === "/") {
        button.addEventListener("click", opFunction)
        function opFunction() {
            if (first) {
                inputA = display.textContent;
                inputOperator = button.textContent;
                display.textContent = ""
                first = false;
                opCheck = true;
            } else {
                inputB = display.textContent;
                display.textContent = operate(inputOperator, inputA, inputB);
                inputA = display.textContent;
                inputOperator = button.textContent;
                display.textContent = inputA;
                opCheck = true;
                //first = true;
            }

        };
    } else if (button.textContent === "=") {
        button.addEventListener("click", calculateFunction);
        function calculateFunction () {
            inputB = display.textContent;
            display.textContent = operate(inputOperator, inputA, inputB);

        }
    } else {
        button.addEventListener("click", addDisplay);
        function addDisplay() {
            if (opCheck) {
                display.textContent = ""
                display.textContent += button.textContent;
                opCheck = false;
            } else {
                display.textContent += button.textContent;
            }

            
    }

};

});