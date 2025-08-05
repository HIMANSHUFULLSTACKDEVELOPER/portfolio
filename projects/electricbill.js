// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const unitsInput = document.getElementById('units');
    const calculateBtn = document.getElementById('calculateBtn');
    const result = document.getElementById('result');

    // Add click event listener to the calculate button
    calculateBtn.addEventListener('click', calculateBill);

    // Add keypress event listener to the input for Enter key
    unitsInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            calculateBill();
        }
    });

    // Function to calculate the electric bill
    function calculateBill() {
        // Get the input value
        const units = parseFloat(unitsInput.value);

        // Check if the input is valid
        if (isNaN(units) || units < 0) {
            showResult('Please enter a valid number of units.', 'error');
            return;
        }

        // Calculate the bill based on the given rates
        let bill = 0;
        if (units <= 50) {
            bill = units * 0.50;
        } else if (units <= 150) {
            bill = 25 + (units - 50) * 0.75;
        } else if (units <= 250) {
            bill = 100 + (units - 150) * 1.20;
        } else {
            bill = 220 + (units - 250) * 1.50;
        }

        // Add 20% surcharge
        bill *= 1.20;

        // Show the result
        showResult(`Your electric bill is ₹${bill.toFixed(2)}`, 'success');
    }

    // Function to display the result
    function showResult(message, type) {
        result.textContent = message;
        result.className = type; // This will be used for styling in CSS
        result.classList.remove('hidden');

        // Add animation effect
        result.style.opacity = '0';
        result.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            result.style.opacity = '1';
            result.style.transform = 'translateY(0)';
        }, 10);
    }
});