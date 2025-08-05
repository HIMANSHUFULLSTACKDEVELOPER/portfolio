// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const alphabetInput = document.getElementById('alphabet');
    const checkBtn = document.getElementById('checkBtn');
    const result = document.getElementById('result');

    // Add click event listener to the check button
    checkBtn.addEventListener('click', checkVowel);

    // Add keypress event listener to the input for Enter key
    alphabetInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkVowel();
        }
    });

    // Function to check if the input is a vowel
    function checkVowel() {
        // Get the input value and convert to lowercase
        const char = alphabetInput.value.toLowerCase();

        // Check if the input is valid
        if (char.length === 0) {
            showResult('Please enter an alphabet.', 'error');
            return;
        }

        if (char.length > 1 || !char.match(/[a-z]/i)) {
            showResult('Please enter a single alphabet.', 'error');
            return;
        }

        // Check if the character is a vowel
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        if (vowels.includes(char)) {
            showResult(`${char.toUpperCase()} is a vowel!`, 'success');
        } else {
            showResult(`${char.toUpperCase()} is not a vowel.`, 'info');
        }
    }

    // Function to display the result
    function showResult(message, type) {
        result.textContent = message;
        result.className = type; // This will be used for styling in CSS
        result.classList.remove('hidden');
    }
});