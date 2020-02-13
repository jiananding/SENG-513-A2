const expression = document.querySelector("#expression");
const result = document.querySelector("#result");

const left_bracket_button = document.querySelector("#left-bracket");
left_bracket_button.addEventListener("click", () => {
    // no rule for this
    expression.textContent = "(";
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
    expression.textContent = "";
});

const backspace_button = document.querySelector("#backspace");
backspace_button.addEventListener("click", () => {
    // delete the last charactor in expression, no rule applied
    expression.textContent = expression.textContent.slice(0, -1);
});

const divide_button = document.querySelector("#divide");
divide_button.addEventListener("click", () => {
    expression.textContent += "/";
});

const multiply_button = document.querySelector("#multiply");
multiply_button.addEventListener("click", () => {
    expression.textContent += "*";
});

const minus_button = document.querySelector("#minus");
minus_button.addEventListener("click", () => {
    expression.textContent += "-";
});

const dot_button = document.querySelector("#dot");
dot_button.addEventListener("click", () => {
    // if the last charactor is '.', then this not allow user to add another dot
    if (expression.textContent.slice(-1) !== ".") {
        expression.textContent += ".";
    }
});

const equal_button = document.querySelector("#equal");
equal_button.addEventListener("click", () => {
    expression.textContent += ".";
});

const plus_button = document.querySelector("#plus");
plus_button.addEventListener("click", () => {
    expression.textContent += "+";
});

const num_buttons = document.querySelectorAll("#num");
for (const num_button of num_buttons) {
    num_button.addEventListener("click", (e) => {
        expression.textContent += e.target.textContent;
    });
}