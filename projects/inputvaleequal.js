     // JavaScript logic to check input values
     function checkValues() {
        let input1 = parseFloat(document.getElementById("input1").value);
        let input2 = parseFloat(document.getElementById("input2").value);
        let input3 = parseFloat(document.getElementById("input3").value);

        if (isNaN(input1) || isNaN(input2) || isNaN(input3)) {
            alert("Please enter valid numbers in all fields.");
            return;
        }

        if (input1 === input2) {
            if (input2 === input3) {
                alert("All numbers are equal: " + input1);
            } else {
                alert("The first two numbers are equal, but the third one is not.");
            }
        } else {
            alert("The first two numbers are not equal.");
        }
    }