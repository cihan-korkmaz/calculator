function add(a, b) {
    return Number(a)+Number(b);
};

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
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
buttons.forEach((button) => {
    if (button.textContent === "Clear") {
        button.addEventListener("click", () => display.textContent = "");
    } else if (button.textContent === "+" || button.textContent === "-" || button.textContent === "*" || button.textContent === "/") {
        button.addEventListener("click", opFunction)
        function opFunction() {
            inputA = display.textContent;
            inputOperator = button.textContent;
            display.textContent = ""
        };
    } else if (button.textContent === "=") {
        button.addEventListener("click", calculateFunction);
        function calculateFunction () {
            let inputB = display.textContent;
            display.textContent = operate(inputOperator, inputA, inputB);
        }
    } else {
        button.addEventListener("click", addDisplay);
        function addDisplay() {
            display.textContent += button.textContent;
    }

};

});