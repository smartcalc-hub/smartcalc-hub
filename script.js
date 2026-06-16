function calculatePercentage() {

    let value = parseFloat(
        document.getElementById("value").value
    );

    let total = parseFloat(
        document.getElementById("total").value
    );

    if (isNaN(value) || isNaN(total)) {
        document.getElementById("result").innerHTML =
            "Please enter both numbers";
        return;
    }

    if (total === 0) {
        document.getElementById("result").innerHTML =
            "Total cannot be zero";
        return;
    }

    let percentage = (value / total) * 100;

    document.getElementById("result").innerHTML =

    `<div class="result-card">
        <div class="result-title">
            Percentage
        </div>
        <div class="result-value">
            ${percentage.toFixed(2)}%
        </div>
    </div>

    <div class="result-card">

        <div class="result-title">
            Calculated On
        </div>

        <div class="result-value">
            ${getTimestamp()}
        </div>

    </div>

    <button
        class="copy-btn"
        onclick="copyResult()">
        📋 Copy Result
    </button>

    <button
        class="share-btn"
        onclick="shareResult()">
        📤 Share Result
    </button>

    <button
        class="pdf-btn"
        onclick="downloadPDF()">
        📄 Download PDF
    </button>`;

    saveHistory(
    `Percentage Calculator

    Result: ${percentage.toFixed(2)}%

    ${getTimestamp()}`
    );
}


function calculateGST() {

    let amount = parseFloat(
        document.getElementById("amount").value
    );

    let gst = parseFloat(
        document.getElementById("gst").value
    );

    if (isNaN(amount) || isNaN(gst)) {
        document.getElementById("result").innerHTML =
            "Please enter all values";
        return;
    }

    let gstAmount = (amount * gst) / 100;
    let totalAmount = amount + gstAmount;

    document.getElementById("result").innerHTML =

    `<div class="result-card">
        <div class="result-title">
            GST Amount
        </div>
        <div class="result-value">
            ₹${gstAmount.toFixed(2)}
        </div>
    </div>

    <div class="result-card">
        <div class="result-title">
            Total Amount
        </div>
        <div class="result-value">
            ₹${totalAmount.toFixed(2)}
        </div>
    </div>

    <div class="result-card">

        <div class="result-title">
            Calculated On
        </div>

        <div class="result-value">
            ${getTimestamp()}
        </div>

    </div>

    <button
        class="copy-btn"
        onclick="copyResult()">
        📋 Copy Result
    </button>

    <button
        class="share-btn"
        onclick="shareResult()">
        📤 Share Result
    </button>

    <button
        class="pdf-btn"
        onclick="downloadPDF()">
        📄 Download PDF
    </button>`;

    saveHistory(
    `GST Calculator

    GST Amount: ₹${gstAmount.toFixed(2)}
    Total Amount: ₹${totalAmount.toFixed(2)}
    
    ${getTimestamp()}`
    );

}

function calculateAge() {

    let dob = document.getElementById("dob").value;

    if (!dob) {
        document.getElementById("result").innerHTML =
            "Please select your date of birth";
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    let monthDifference =
        today.getMonth() - birthDate.getMonth();

    if (
        monthDifference < 0 ||
        (monthDifference === 0 &&
            today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    document.getElementById("result").innerHTML =

    `<div class="result-card">
        <div class="result-title">
            Your Age
        </div>
        <div class="result-value">
            ${age} Years
        </div>
    </div>

    <div class="result-card">

        <div class="result-title">
            Calculated On
        </div>

        <div class="result-value">
            ${getTimestamp()}
        </div>

    </div>

    <button
        class="copy-btn"
        onclick="copyResult()">
        📋 Copy Result
    </button>

    <button
        class="share-btn"
        onclick="shareResult()">
        📤 Share Result
    </button>

    <button
        class="pdf-btn"
        onclick="downloadPDF()">
        📄 Download PDF
    </button>`;

    saveHistory(
    `Age Calculator

    Age: ${age} Years

    ${getTimestamp()}`
    );

}


function calculateEMI() {

    let principal = parseFloat(
        document.getElementById("loanAmount").value
    );

    let annualRate = parseFloat(
        document.getElementById("interestRate").value
    );

    let years = parseFloat(
        document.getElementById("loanTenure").value
    );

    if (
        isNaN(principal) ||
        isNaN(annualRate) ||
        isNaN(years)
    ) {
        document.getElementById("result").innerHTML =
        "Please enter All values";
        return;
    }

    let monthlyRate = annualRate / 12 / 100;
    let months = years * 12;

    let emi =
        principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, months) /
        (Math.pow(1 + monthlyRate, months) - 1);

    let yearlyPayment = emi * 12;
    let totalPayment = emi * months;
    let totalInterest = totalPayment - principal;

    document.getElementById("result").innerHTML =

    `<div class="result-card">
        <div class="result-title">
            Monthly EMI
        </div>
        <div class="result-value">
            ₹${emi.toFixed(2)}
        </div>
    </div>

    <div class="result-card">
        <div class="result-title">
            Yearly Payment
        </div>
        <div class="result-value">
            ₹${yearlyPayment.toFixed(2)}
        </div>
    </div>

    <div class="result-card">
        <div class="result-title">
            Total Payment
        </div>
        <div class="result-value">
            ₹${totalPayment.toFixed(2)}
        </div>
    </div>

    <div class="result-card">
        <div class="result-title">
            Total Interest
        </div>
        <div class="result-value">
            ₹${totalInterest.toFixed(2)}
        </div>
    </div>

    <div class="result-card">

        <div class="result-title">
            Calculated On
        </div>

        <div class="result-value">
            ${getTimestamp()}
        </div>

    </div>

    <button
        class="copy-btn"
        onclick="copyResult()">
        📋 Copy Result
    </button>

    <button
        class="share-btn"
        onclick="shareResult()">
        📤 Share Result
    </button>

    <button
        class="pdf-btn"
        onclick="downloadPDF()">
        📄 Download PDF
    </button>`;

    saveHistory(
    `EMI Calculator

    Monthly EMI: ₹${emi.toFixed(2)}
    Total Payment: ₹${totalPayment.toFixed(2)}

    ${getTimestamp()}`
    );

}

function calculateBMI() {

    let age = parseInt(
        document.getElementById("age").value
    );

    let gender =
        document.getElementById("gender").value;

    let weight = parseFloat(
        document.getElementById("weight").value
    );

    let height = parseFloat(
        document.getElementById("height").value
    );

    if (
        isNaN(age) ||
        !gender ||
        isNaN(weight) ||
        isNaN(height)
    ) {
        document.getElementById("result").innerHTML =
            "Please fill all fields";
        return;
    }

    if (age < 2) {
        document.getElementById("result").innerHTML =
            "BMI is generally not used for children under 2 years.";
        return;
    }

    let heightInMeter = height / 100;

    let bmi =
        weight /
        (heightInMeter * heightInMeter);

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight ⚠️";
    }
    else if (bmi < 25) {
        category = "Normal Weight ✅";
    }
    else if (bmi < 30) {
        category = "Overweight ⚠️";
    }
    else {
        category = "Obese ❌";
    }

    let minWeight =
        18.5 * (heightInMeter * heightInMeter);

    let maxWeight =
        24.9 * (heightInMeter * heightInMeter);

    document.getElementById("result").innerHTML =

    `<div class="result-card">
        <div class="result-title">
            BMI Score
        </div>
        <div class="result-value">
            ${bmi.toFixed(2)}
        </div>
    </div>

    <div class="result-card">
        <div class="result-title">
            Category
        </div>
        <div class="result-value">
            ${category}
        </div>
    </div>

    <div class="result-card">
        <div class="result-title">
            Healthy Weight Range
        </div>
        <div class="result-value">
            ${minWeight.toFixed(1)} kg - ${maxWeight.toFixed(1)} kg
        </div>
    </div>

    <div class="result-card">

        <div class="result-title">
            Calculated On
        </div>

        <div class="result-value">
            ${getTimestamp()}
        </div>

    </div>

    <button
        class="copy-btn"
        onclick="copyResult()">
        📋 Copy Result
    </button>

    <button
        class="share-btn"
        onclick="shareResult()">
        📤 Share Result
    </button>

    <button
        class="pdf-btn"
        onclick="downloadPDF()">
        📄 Download PDF
    </button>`;

    saveHistory(
    `BMI Calculator

    BMI: ${bmi.toFixed(2)}
    Category: ${category}

    ${getTimestamp()}`
    );

}

function calculateDiscount() {

    let originalPrice = parseFloat(
        document.getElementById("originalPrice").value
    );

    let discountPercent = parseFloat(
        document.getElementById("discountPercent").value
    );

    if (
        isNaN(originalPrice) ||
        isNaN(discountPercent)
    ) {
        document.getElementById("result").innerHTML =
            "Please enter all values";
        return;
    }

    let discountAmount =
        (originalPrice * discountPercent) / 100;

    let finalPrice =
        originalPrice - discountAmount;

    document.getElementById("result").innerHTML =

    `<div class="result-card">
        <div class="result-title">
            You Save
        </div>
        <div class="result-value">
            ₹${discountAmount.toFixed(2)}
        </div>
    </div>

    <div class="result-card">
        <div class="result-title">
            Final Price
        </div>
        <div class="result-value">
            ₹${finalPrice.toFixed(2)}
        </div>
    </div>

    <div class="result-card">

        <div class="result-title">
            Calculated On
        </div>

        <div class="result-value">
            ${getTimestamp()}
        </div>

    </div>

    <button
        class="copy-btn"
        onclick="copyResult()">
        📋 Copy Result
    </button>

    <button
        class="share-btn"
        onclick="shareResult()">
        📤 Share Result
    </button>

    <button
        class="pdf-btn"
        onclick="downloadPDF()">
        📄 Download PDF
    </button>`;

    saveHistory(
    `Discount Calculator

    You Save: ₹${discountAmount.toFixed(2)}
    Final Price: ₹${finalPrice.toFixed(2)}

    ${getTimestamp()}`
    );

}

function calculateSIP() {

    let monthlyInvestment = parseFloat(
        document.getElementById("monthlyInvestment").value
    );

    let annualReturn = parseFloat(
        document.getElementById("annualReturn").value
    );

    let years = parseFloat(
        document.getElementById("years").value
    );

    if (
        isNaN(monthlyInvestment) ||
        isNaN(annualReturn) ||
        isNaN(years)
    ) {
        document.getElementById("result").innerHTML =
        "Please enter All values";
        return;
    }

    let monthlyRate =
        annualReturn / 12 / 100;

    let months =
        years * 12;

    let futureValue =
        monthlyInvestment *
        (
            (Math.pow(1 + monthlyRate, months) - 1)
            / monthlyRate
        ) *
        (1 + monthlyRate);

    let investedAmount =
        monthlyInvestment * months;

    let estimatedReturns =
        futureValue - investedAmount;

    document.getElementById("result").innerHTML =

    `<div class="result-card">
        <div class="result-title">
            Invested Amount
        </div>
        <div class="result-value">
            ₹${investedAmount.toFixed(2)}
        </div>
    </div>

    <div class="result-card">
        <div class="result-title">
            Estimated Returns
        </div>
        <div class="result-value">
            ₹${estimatedReturns.toFixed(2)}
        </div>
    </div>

    <div class="result-card">
        <div class="result-title">
            Total Value
        </div>
        <div class="result-value">
            ₹${futureValue.toFixed(2)}
        </div>
    </div>

    <div class="result-card">

        <div class="result-title">
            Calculated On
        </div>

        <div class="result-value">
            ${getTimestamp()}
        </div>
    
    </div>

    <button
        class="copy-btn"
        onclick="copyResult()">
        📋 Copy Result
    </button>

    <button
        class="share-btn"
        onclick="shareResult()">
        📤 Share Result
    </button>

    <button
        class="pdf-btn"
        onclick="downloadPDF()">
        📄 Download PDF
    </button>`;

    saveHistory(
    `SIP Calculator

    Invested Amount: ₹${investedAmount.toFixed(2)}
    Total Value: ₹${futureValue.toFixed(2)}

    ${getTimestamp()}`
    );

}

function calculateFD() {

    let principal = parseFloat(
        document.getElementById("principal").value
    );

    let rate = parseFloat(
        document.getElementById("rate").value
    );

    let time = parseFloat(
        document.getElementById("time").value
    );

    if (
        isNaN(principal) ||
        isNaN(rate) ||
        isNaN(time)
    ) {
        document.getElementById("result").innerHTML =
            "Please enter all values";
        return;
    }

    let maturityAmount =
        principal *
        Math.pow(
            (1 + rate / 100),
            time
        );

    let interestEarned =
        maturityAmount - principal;

     document.getElementById("result").innerHTML =

    `<div class="result-card">
        <div class="result-title">
            Deposit Amount
        </div>
        <div class="result-value">
            ₹${principal.toFixed(2)}
        </div>
    </div>

    <div class="result-card">
        <div class="result-title">
            Interest Earned
        </div>
        <div class="result-value">
            ₹${interestEarned.toFixed(2)}
        </div>
    </div>

    <div class="result-card">
        <div class="result-title">
            Maturity Amount
        </div>
        <div class="result-value">
            ₹${maturityAmount.toFixed(2)}
        </div>
    </div>

    <div class="result-card">

        <div class="result-title">
            Calculated On
        </div>

        <div class="result-value">
            ${getTimestamp()}
        </div>

    </div>

    <button
        class="copy-btn"
        onclick="copyResult()">
        📋 Copy Result
    </button>

    <button
        class="share-btn"
        onclick="shareResult()">
        📤 Share Result
    </button>

    <button
        class="pdf-btn"
        onclick="downloadPDF()">
        📄 Download PDF
    </button>`;

    saveHistory(
    `FD Calculator
    Deposit Amount: ₹${principal.toFixed(2)}
    Maturity Amount: ₹${maturityAmount.toFixed(2)}
    
    ${getTimestamp()}`
    );

}

document.addEventListener("DOMContentLoaded", function () {

    // Accordion
    const buttons =
        document.querySelectorAll(".accordion-btn");

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            const content =
                this.nextElementSibling;

            if (content.style.maxHeight) {

                content.style.maxHeight = null;

            } else {

                content.style.maxHeight =
                    content.scrollHeight + "px";

            }

        });

    });

    // Search
    const searchInput =
        document.getElementById("searchInput");

    if (searchInput) {

        searchInput.addEventListener("input", function () {

            let filter =
                this.value.toLowerCase();

            let accordions =
                document.querySelectorAll(".accordion");

            accordions.forEach(accordion => {

                let content =
                    accordion.querySelector(
                        ".accordion-content"
                    );

                let links =
                    content.querySelectorAll("a");

                let found = false;

                links.forEach(link => {

                    let text =
                        link.textContent.toLowerCase();

                    if (text.includes(filter)) {

                        link.style.display = "block";

                        found = true;

                    } else {

                        link.style.display = "none";

                    }

                });

                if (filter !== "") {

                    if (found) {

                        accordion.style.display =
                            "block";

                        content.style.maxHeight =
                            content.scrollHeight + "px";

                    } else {

                        accordion.style.display =
                            "none";

                    }

                } else {

                    accordion.style.display =
                        "block";

                    content.style.maxHeight =
                        null;

                    links.forEach(link => {

                        link.style.display =
                            "block";

                    });

                }

            });

        });

    }

    // Load Saved Theme
    let savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-mode"
        );

    }

    //Load Calculation History
    loadHistory();

    });

function shareResult() {

    let result =
        document.getElementById("result")
        .innerText;

    if (!result.trim()) {
        alert("Please calculate first");
        return;
    }

    let shareText =
`Result from SmartCalc Hub

${result}

Calculator Link:
${window.location.href}`;

    if (navigator.share) {

        navigator.share({
            title: document.title,
            text: shareText,
            url: window.location.href
        });

    } else {

        navigator.clipboard.writeText(
            shareText
        );

        alert(
            "Sharing not supported. Result copied."
        );
    }

}

function copyResult() {

    let result =
        document.getElementById("result")
        .innerText;

    navigator.clipboard.writeText(result);

    alert("✅ Result Copied Successfully");

}

function toggleDarkMode() {

    document.body.classList.toggle(
        "dark-mode"
    );

    if (
        document.body.classList.contains(
            "dark-mode"
        )
    ) {

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        localStorage.setItem(
            "theme",
            "light"
        );

    }

}

function downloadPDF() {

    let result =
        document.getElementById("result")
        .innerText;

    if (!result.trim()) {
        alert("Please calculate first");
        return;
    }

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("SmartCalc Hub", 20, 20);

    doc.setFontSize(12);

    let lines =
        doc.splitTextToSize(result, 170);

    doc.text(lines, 20, 40);

    doc.save("SmartCalcHub-Result.pdf");
}

function getTimestamp() {

    return new Date().toLocaleString();

}

function saveHistory(result) {

    let history =
        JSON.parse(
            localStorage.getItem(
                "calcHistory"
            )
        ) || [];

    history.unshift(result);

    history = history.slice(0, 10);

    localStorage.setItem(
        "calcHistory",
        JSON.stringify(history)
    );

}

function loadHistory() {

    let history =
        JSON.parse(
            localStorage.getItem(
                "calcHistory"
            )
        ) || [];

    let box =
        document.getElementById(
            "history"
        );

    if (!box) return;

    if (history.length === 0) {

        box.innerHTML =
            "<p>No calculations yet.</p>";

        return;
    }

    box.innerHTML = "";

    history.forEach(item => {

        box.innerHTML +=
        `<div class="history-item">
            ${item}
        </div>`;

    });

}

function clearHistory() {

    localStorage.removeItem(
        "calcHistory"
    );

    loadHistory();

}