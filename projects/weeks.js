// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const inputNumber = document.getElementById('inputNumber');
    const checkBtn = document.getElementById('checkBtn');
    const result = document.getElementById('result');

    // Add click event listener to the check button
    checkBtn.addEventListener('click', showDay);

    // Add keypress event listener to the input for Enter key
    inputNumber.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            showDay();
        }
    });

    // Function to show the day of the week
    function showDay() {
        // Get the input value
        const dayNumber = parseInt(inputNumber.value);

        // Check if the input is valid
        if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7) {
            showResult('Please enter a number between 1 and 7.', 'error');
            return;
        }

        // Array of days
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        // Get the day name
        const dayName = days[dayNumber - 1];

        // Show the result
        showResult(`Day ${dayNumber} is ${dayName}.`, 'success');
    }

    // Function to display the result
    function showResult(message, type) {
        result.textContent = message;
        result.className = type; // This will be used for styling in CSS
        result.classList.remove('hidden');
    }
});