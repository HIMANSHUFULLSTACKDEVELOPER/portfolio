let currentcount = 1;
let brickarray = ['<div class="brick"></div>'];

function add() {
    if (currentcount < 12) {
        currentcount++;
        brickarray.push('<div class="brick"></div>');
        updateDisplay();
        playSound('add');
    } else {
        alert("Maximum number of boxes reached!");
    }
}

function remove() {
    if (currentcount > 1) {
        currentcount--;
        brickarray.pop();
        updateDisplay();
        playSound('remove');
    }
}

function updateDisplay() {
    document.getElementById("right-container").innerHTML = brickarray.join('');
    document.getElementById("count").innerHTML = currentcount;
    document.getElementById("count").style.color = currentcount <= 1 ? "gold" : "white";
    updateVisualCounter();
}

function updateVisualCounter() {
    let counter = document.getElementById("visual-counter");
    counter.innerHTML = '◼'.repeat(currentcount) + '◻'.repeat(12 - currentcount);
}

function playSound(action) {
    document.getElementById(action + "Sound").play();
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Initialize
updateVisualCounter();