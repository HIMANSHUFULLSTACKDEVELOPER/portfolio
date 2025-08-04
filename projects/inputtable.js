  /* Function to update the display area with a message */
  function updateDisplay(message) {
    const display = document.getElementById("display");
    display.textContent = message;
    display.style.animation = 'none';
    display.offsetHeight; // Trigger reflow
    display.style.animation = 'fadeIn 0.3s';
}

/* Function to prompt the user for input and update the display */
function promptInput() {
    let input = prompt("Please enter a value:");
    if (input !== null) {
        updateDisplay("Prompt Input: " + input);
    }
}

/* Function to get the value from the HTML input field and update the display */
function getHtmlInput() {
    let input = document.getElementById("input").value.trim();
    if (input === "") {
        updateDisplay("Please enter some text");
    } else {
        updateDisplay("HTML Input: " + input);
    }
}

/* Function to assign a predefined value and update the display */
function assignValue() {
    let value = "HIMANSHU";
    updateDisplay("Assigned Value: " + value);
}

/* Event listener to trigger getHtmlInput function when Enter key is pressed */
document.getElementById("input").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        getHtmlInput();
    }
});