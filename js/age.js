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