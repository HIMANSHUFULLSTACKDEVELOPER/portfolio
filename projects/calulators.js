// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const display = document.getElementById('inputbox');
    const calculator = document.querySelector('.calculator');
    
    // Initialize variables
    let currentInput = '0';
    let previousInput = '';
    let operation = null;

    // Function to update the display
    function updateDisplay() {
        display.value = currentInput;
    }

    // Function to handle number input
    function handleNumberInput(number) {
        if (currentInput === '0' || currentInput === '-0') {
            currentInput = number;
        } else {
            currentInput += number;
        }
        updateDisplay();
    }

    // Function to handle operation input
    function handleOperationInput(op) {
        if (operation !== null) {
            calculate();
        }
        previousInput = currentInput;
        currentInput = '0';
        operation = op;
    }

    // Function to perform calculation
    function calculate() {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        
        switch (operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                if (current === 0) {
                    result = 'Error';
                } else {
                    result = prev / current;
                }
                break;
            default:
                return;
        }
        
        currentInput = result.toString();
        operation = null;
        updateDisplay();
    }

    // Event listener for button clicks
    calculator.addEventListener('click', (event) => {
        if (event.target.matches('button')) {
            const button = event.target;
            const buttonText = button.textContent;

            // Handle different button types
            if (buttonText.match(/[0-9]/)) {
                handleNumberInput(buttonText);
            } else if (['+', '-', '*', '/'].includes(buttonText)) {
                handleOperationInput(buttonText);
            } else if (buttonText === '=') {
                calculate();
            } else if (buttonText === 'AC') {
                // Clear all inputs and reset calculator
                currentInput = '0';
                previousInput = '';
                operation = null;
                updateDisplay();
            }
            // Add more button handlers here for other operations (%, +/-, etc.)
        }
    });

    // Add keyboard support
    document.addEventListener('keydown', (event) => {
        if (event.key.match(/[0-9]/)) {
            handleNumberInput(event.key);
        } else if (['+', '-', '*', '/'].includes(event.key)) {
            handleOperationInput(event.key);
        } else if (event.key === 'Enter') {
            calculate();
        }
        // Add more keyboard handlers here for other keys (Backspace, Escape, etc.)
    });
});