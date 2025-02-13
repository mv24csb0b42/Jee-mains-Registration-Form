function generateCaptcha() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("captchaText").innerText = captcha;
}

function validateForm() {
    var stateOfEligibility = document.forms["jeeForm"]["stateOfEligibility"].value;
    var schoolState = document.forms["jeeForm"]["schoolState"].value;
    var stateId = document.forms["jeeForm"]["stateId"].value;
    var candidateName = document.forms["jeeForm"]["candidateName"].value;
    var dobDay = document.forms["jeeForm"]["dobDay"].value;
    var dobMonth = document.forms["jeeForm"]["dobMonth"].value;
    var dobYear = document.forms["jeeForm"]["dobYear"].value;
    var gender = document.forms["jeeForm"]["gender"].value;
    var securityPin = document.forms["jeeForm"]["securityPin"].value;
    var enteredCaptcha = document.getElementById("captchaInput").value;
    var actualCaptcha = document.getElementById("captchaText").innerText;

    if (schoolState == "") {
        alert("Please enter the state where your class 12th school/NIOS study centre is located.");
        return false;
    }

    if (stateId == "") {
        alert("State Identification ID is required.");
        return false;
    }

    if (candidateName == "") {
        alert("Candidate's name is required.");
        return false;
    }

    if (dobDay == "" || dobMonth == "" || dobYear == "") {
        alert("Please enter your complete date of birth.");
        return false;
    }

    if (gender == "") {
        alert("Please select your gender.");
        return false;
    }

    if (securityPin == "") {
        alert("Please enter your security pin.");
        return false;
    }

    if (enteredCaptcha !== actualCaptcha) {
        alert("Incorrect CAPTCHA. Please try again.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

window.onload = generateCaptcha;
