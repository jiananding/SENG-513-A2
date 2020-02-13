const expression = document.querySelector("#expression");
const result = document.querySelector("#result");

let started = false;

const left_bracket_button = document.querySelector("#left-bracket");
left_bracket_button.addEventListener("click", () => {
    // if at the beginning, zero is clicked, then click this button will allow and show '0('
    if (expression.textContent === "0") {
        
        expression.textContent = "(";
    } else {
        expression.textContent += "(";
    }
});

const right_bracket_button = document.querySelector("#right-bracket");
right_bracket_button.addEventListener("click", () => {
    // 1. if not left bracket is entered before, then this will not allow user to enter right bracket
    // 2. if the last charactor is left bracket, which mean there will be no value between two bracket, not allow to eneter
    if (expression.textContent.slice(-1) !== "(") {
        expression.textContent += ")";
    }
});

const clear_button = document.querySelector("#clear");
clear_button.addEventListener("click", () => {
    // clear all expression, no rule applied
    expression.textContent = "0";
});

const backspace_button = document.querySelector("#backspace");
backspace_button.addEventListener("click", () => {
    // delete the last charactor in expression, no rule applied
    if (expression.textContent.slice(0, -1).length === 0) {
        expression.textContent = "0";
    } else {
        expression.textContent = expression.textContent.slice(0, -1);
    }
});

const divide_button = document.querySelector("#divide");
divide_button.addEventListener("click", () => {
    if (expression.textContent.slice(-1) === "+" || expression.textContent.slice(-1) === "-" || expression.textContent.slice(-1) === "*" || expression.textContent.slice(-1) === "/") {
        if (expression.textContent.charAt(expression.textContent.length-2) !== "(") {
            expression.textContent = expression.textContent.slice(0, -1) + "/";
        }
    } else if (expression.textContent.slice(-1) !== "(") {
        expression.textContent += "/";
    }
});

const multiply_button = document.querySelector("#multiply");
multiply_button.addEventListener("click", () => {
    if (expression.textContent.slice(-1) === "+" || expression.textContent.slice(-1) === "-" || expression.textContent.slice(-1) === "*" || expression.textContent.slice(-1) === "/") {
        if (expression.textContent.charAt(expression.textContent.length-2) !== "(") {
            expression.textContent = expression.textContent.slice(0, -1) + "*";
        }
    } else if (expression.textContent.slice(-1) !== "(") {
        expression.textContent += "*";
    }});

const minus_button = document.querySelector("#minus");
minus_button.addEventListener("click", () => {
    if (expression.textContent.slice(-1) === "+" || expression.textContent.slice(-1) === "-" || expression.textContent.slice(-1) === "*" || expression.textContent.slice(-1) === "/") {
        if (expression.textContent.charAt(expression.textContent.length-2) !== "(") {
            expression.textContent = expression.textContent.slice(0, -1) + "*";
        }
    } else {
        expression.textContent += "-";
    }
    // case that initial expression is not pressed value "0", user press button replace "0" with "-"
});

const dot_button = document.querySelector("#dot");
dot_button.addEventListener("click", () => {
    // if the last charactor is '.', then this not allow user to add another dot
    if (expression.textContent.slice(-1) !== ".") {
        // if the last charactor is "(", add a "*."
        if (expression.textContent.slice(-1) === ")") {
            expression.textContent += "*.";
        } else {
            expression.textContent += ".";
        }
    }
});

const equal_button = document.querySelector("#equal");
equal_button.addEventListener("click", () => {
    expression.textContent += ".";
});

const plus_button = document.querySelector("#plus");
plus_button.addEventListener("click", () => {
    if (expression.textContent.slice(-1) === "+" || expression.textContent.slice(-1) === "-" || expression.textContent.slice(-1) === "*" || expression.textContent.slice(-1) === "/") {
        expression.textContent = expression.textContent.slice(0, -1) + "+";
    }
    else if (expression.textContent.slice(-1) !== "(") {
        expression.textContent += "+";
    }
});

const num_buttons = document.querySelectorAll("#num");
for (const num_button of num_buttons) {
    num_button.addEventListener("click", (e) => {
        if (!started) {
            started = true;
            expression.textContent = e.target.textContent;
        } else {
            if (expression.textContent.length !== 1 || expression.textContent !== "0") {
                expression.textContent += e.target.textContent;
            } else {
                expression.textContent = e.target.textContent;
            }
        }
    });
}