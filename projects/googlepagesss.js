document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const clearButton = document.querySelector('.clear-button');
    const voiceButton = document.querySelector('.voice-button');
    const luckyButton = document.querySelector('.lucky-button');
    const searchResults = document.getElementById('search-results');

    // List of student names
    const studentNames = [
        "ayush lolusare", "himanshu", "yash", "ayush nakade", "nikhil",
        "ratnesh", "soundary", "lucky", "shubham dada", "artharv",
        "achal", "yogesh sir"
    ];

    // Event listener for form submission
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        performSearch();
    });

    // Event listener for clear button
    clearButton.addEventListener('click', () => {
        searchInput.value = '';
        searchInput.focus();
        searchResults.textContent = '';
        clearButton.style.display = 'none';
    });

    // Event listener for voice button
    voiceButton.addEventListener('click', () => {
        // Implement voice search functionality here
        alert('Voice search is not implemented in this demo.');
    });

    // Event listener for "I'm Feeling Lucky" button
    luckyButton.addEventListener('click', () => {
        // Implement "I'm Feeling Lucky" functionality here
        alert('I\'m Feeling Lucky feature is not implemented in this demo.');
    });

    // Function to perform search
    function performSearch() {
        const input = searchInput.value.toLowerCase();
        const foundStudent = studentNames.some(name => input.includes(name));
        const foundTeacher = input.includes('yogesh sir');

        let result = '';
        let color = '';

        if (foundStudent) {
            if (foundTeacher) {
                result = "This sir is teaching in Enjoy Programming.";
                color = "var(--text-color)";
            } else {
                result = "This student is a student of Enjoy Programming.";
                color = "green";
            }
        } else {
            result = "This student is not a student of Enjoy Programming.";
            color = "red";
        }

        searchResults.textContent = result;
        searchResults.style.color = color;
    }

    // Show/hide clear button based on input
    searchInput.addEventListener('input', () => {
        clearButton.style.display = searchInput.value ? 'block' : 'none';
    });

    // Initialize clear button visibility
    clearButton.style.display = 'none';
});