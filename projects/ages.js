       // Function to calculate age category based on input age
       function calculateAge() {
        // Get the value of the age input
        let age = document.getElementById("numberInput").value;
        let display = document.getElementById("display");
        
        // Validate age and set display text and color accordingly
        if (age < 0 || age > 120 || age === "") {
            display.textContent = "Invalid age";
            display.style.backgroundColor = "#ff6b6b";
            display.style.color = "#fff";
        } else if (age <= 17) {
            display.textContent = "Child";
            display.style.backgroundColor = "#4db6ac";
            display.style.color = "#000";
        } else if (age <= 34) {
            display.textContent = "Young Adult";
            display.style.backgroundColor = "#7986cb";
            display.style.color = "#fff";
        } else if (age <= 59) {
            display.textContent = "Middle-aged Adult";
            display.style.backgroundColor = "#ffb74d";
            display.style.color = "#000";
        } else {
            display.textContent = "Senior";
            display.style.backgroundColor = "#ba68c8";
            display.style.color = "#fff";
        }
    }