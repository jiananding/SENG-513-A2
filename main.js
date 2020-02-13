const left_bracket_button = document.querySelector("#left-bracket");
left_bracket_button.addEventListener("click", () => {
    if (document.querySelector("#expression").textContent ==="0") {
        document.querySelector("#expression").textContent = "(";
    } else {
        document.querySelector("#expression").textContent += "(";
    }
});

const right_bracket_button = document.querySelector("#right-bracket");
right_bracket_button.addEventListener("click", () => {
    document.querySelector("#expression").textContent += ")";
});

// clear button: clear expression and set to initial value "0"
const clear_button = document.querySelector("#clear");
clear_button.addEventListener("click", () => {
    document.querySelector("#expression").textContent = "0";
});

const backspace_button = document.querySelector("#backspace");
backspace_button.addEventListener("click", () => {
    document.querySelector("#expression").textContent = document.querySelector("#expression").textContent.slice(0, -1);
});

const divide_button = document.querySelector("#divide");
divide_button.addEventListener("click", () => {
    document.querySelector("#expression").textContent += "/";
});

const multiply_button = document.querySelector("#multiply");
multiply_button.addEventListener("click", () => {
    document.querySelector("#expression").textContent += "*";
});

const minus_button = document.querySelector("#minus");
minus_button.addEventListener("click", () => {
    document.querySelector("#expression").textContent += "-";
});

const dot_button = document.querySelector("#dot");
dot_button.addEventListener("click", () => {
    if (document.querySelector("#expression").textContent.slice(-1) !== ".") {
        document.querySelector("#expression").textContent += ".";
    }
});

const equal_button = document.querySelector("#euqal");
equal_button.addEventListener("click", () => {

});

const plus_button = document.querySelector("#plus");
plus_button.addEventListener("click", () => {
    document.querySelector("#expression").textContent += "+";
});