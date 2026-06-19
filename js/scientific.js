const display =
document.getElementById("display");

function appendValue(value) {

    display.value += value;

}

function appendFunction(func) {

    display.value += func;

}

function clearDisplay() {

    display.value = "";

}

function deleteLast() {

    display.value =
    display.value.slice(0, -1);

}

function calculateResult() {

    try {

        let expression =
        display.value;

        expression =
        expression.replace(
            /sin\(/g,
            "Math.sin("
        );

        expression =
        expression.replace(
            /cos\(/g,
            "Math.cos("
        );

        expression =
        expression.replace(
            /tan\(/g,
            "Math.tan("
        );

        let result =
        eval(expression);

        display.value = result;

        saveHistory(
        `Scientific Calculator

Result: ${result}

${getTimestamp()}`
        );

    }

    catch {

        display.value = "Error";

    }

}

document.addEventListener(
"keydown",
function(event) {

    const key =
    event.key;

    if (
        "0123456789+-*/().%"
        .includes(key)
    ) {

        display.value += key;

    }

    else if (
        key === "Enter"
    ) {

        calculateResult();

    }

    else if (
        key === "Backspace"
    ) {

        deleteLast();

    }

});