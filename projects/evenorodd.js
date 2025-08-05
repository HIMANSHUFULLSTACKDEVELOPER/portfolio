// Function to display result in the result div
function displayResult(message) {
    document.getElementById("result").textContent = message;
}

// Function to get input value and convert to integer
function getInputValue(id) {
    return parseInt(document.getElementById(id).value) || 0;
}

// Function to check if a number is even or odd
function evenOrOdd() {
    const num = getInputValue("input-one");
    displayResult(num % 2 === 0 ? "The number is even." : "The number is odd.");
}

// Function to check voting eligibility
function isEligible() {
    const age = getInputValue("input-one");
    displayResult(age >= 18 ? "You are eligible to vote." : "You are not eligible to vote.");
}

// Function to compare two numbers
function isEqualTo() {
    const num1 = getInputValue("input-one");
    const num2 = getInputValue("input-two");
    displayResult(num1 === num2 ? "The numbers are equal." : "The numbers are not equal.");
}

// Function to swap the values of two input fields
function interchange() {
    const input1 = document.getElementById("input-one");
    const input2 = document.getElementById("input-two");
    [input1.value, input2.value] = [input2.value, input1.value];
    displayResult("Numbers swapped successfully.");
}