let a = 0;
function add() {

    if (a <= 9) {
        a++;
        document.getElementById("output").innerHTML = a;
    }
}
function sub() {
    if (a > 0) {
        a--;
        document.getElementById("output").innerHTML = a;
    }
}
