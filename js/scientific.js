const display = document.getElementById("display");

let angleMode = "DEG";

// Add values
function appendValue(val) {
    display.value += val;
}

// Add functions like Math.sqrt(
function appendFunction(func) {
    display.value += func;
}

// Add sin, cos, tan
function appendTrig(func) {
    display.value += func + "(";
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Toggle DEG / RAD
function toggleAngleMode() {

    angleMode =
        angleMode === "DEG"
        ? "RAD"
        : "DEG";

    document.getElementById(
        "angleMode"
    ).innerText = angleMode;
}

// Factorial
function factorial(n) {

    n = parseInt(n);

    if (n < 0) return NaN;

    if (n === 0 || n === 1)
        return 1;

    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

// Calculate
function calculateResult() {

    let exp = display.value;

    // Factorial
    exp = exp.replace(
        /(\d+)!/g,
        "factorial($1)"
    );

    // sin
    exp = exp.replace(
        /sin\((.*?)\)/g,
        (_, n) => {

            let value = Number(n);

            if (angleMode === "DEG") {
                value = value * Math.PI / 180;
            }

            return Math.sin(value);
        }
    );

    // cos
    exp = exp.replace(
        /cos\((.*?)\)/g,
        (_, n) => {

            let value = Number(n);

            if (angleMode === "DEG") {
                value = value * Math.PI / 180;
            }

            return Math.cos(value);
        }
    );

    // tan
    exp = exp.replace(
        /tan\((.*?)\)/g,
        (_, n) => {

            let value = Number(n);

            if (angleMode === "DEG") {
                value = value * Math.PI / 180;
            }

            return Math.tan(value);
        }
    );

    // Constants
    exp = exp.replace(
        /Math\.PI/g,
        Math.PI
    );

    exp = exp.replace(
        /Math\.E/g,
        Math.E
    );

    // Percentage
    exp = exp.replace(/%/g, "/100");

    try {

        let result = eval(exp);

        result = Number(
            result.toFixed(10)
        );

        display.value = result;

    }

    catch {

        display.value = "Error";

    }
}
