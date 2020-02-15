const bar1 = document.querySelector("#bar1");
const bar2 = document.querySelector("#bar2");

let euqal_cliced = false;
let ans = 0;

const left_bracket_button = document.querySelector("#left-bracket").addEventListener("click", () => {
    bar2.textContent += "(";
    euqal_cliced = false;
});

const right_bracket_button = document.querySelector("#right-bracket").addEventListener("click", () => {
    bar2.textContent += ")";
    euqal_cliced = false;
});

const clear_button = document.querySelector("#clear").addEventListener("click", () => {
    bar2.textContent = "";
    euqal_cliced = false;
});

const backspace_button = document.querySelector("#backspace").addEventListener("click", () => {
    bar2.textContent = bar2.textContent === "Error" ? "" : bar2.textContent.slice(0, -1);
    euqal_cliced = false;
});

const divide_button = document.querySelector("#divide").addEventListener("click", () => {
    bar2.textContent += "/";
    euqal_cliced = false;
});

const multiply_button = document.querySelector("#multiply").addEventListener("click", () => {
    bar2.textContent += "*";
    euqal_cliced = false;
});

const minus_button = document.querySelector("#minus").addEventListener("click", () => {
    bar2.textContent += "-";
    euqal_cliced = false;
});

const dot_button = document.querySelector("#dot").addEventListener("click", () => {
    bar2.textContent += ".";
    euqal_cliced = false;
});

const plus_button = document.querySelector("#plus").addEventListener("click", () => {
    bar2.textContent += "+";
    euqal_cliced = false;
});

const equal_button = document.querySelector("#equal").addEventListener("click", () => {
    euqal_cliced = true;
    try {
        ans = eval(bar2.textContent);
        bar1.textContent = `${bar2.textContent}=${ans}`;
        bar2.textContent = ans;
    } catch (e) {
        ans = 0;
        bar1.textContent = `${bar2.textContent}=Error`;
        bar2.textContent = "Error";
    }
});

const num_buttons = document.querySelectorAll("#num");
for (const num_button of num_buttons) {
    num_button.addEventListener("click", (e) => {
        bar1.textContent = `Ans = ${ans}`;
        if (!euqal_cliced) {
            bar2.textContent += e.target.textContent;
        } else {
            bar2.textContent = e.target.textContent;
        }
        euqal_cliced = false;
    });
}