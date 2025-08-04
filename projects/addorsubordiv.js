
//  add number
function add() {
    let firstNumber = document.getElementById("number-one").value;
    let secondNumber = document.getElementById("number-two").value;
    let total = Number(firstNumber) + Number(secondNumber)
    document.getElementById("display").innerHTML = "ADDITION IS " + total; document.getElementById("display").innerHTML = "the result is:" + total;
}
// sub number
function sub() {
    let firstNumber = document.getElementById("number-one").value;
    let secondNumber = document.getElementById("number-two").value;
    let total = Number(firstNumber) - Number(secondNumber)
    document.getElementById("display").innerHTML = "ADDITION IS " + total; document.getElementById("display").innerHTML = "the result is:" + total;
}
// mul number
function mul() {
    let firstNumber = document.getElementById("number-one").value;
    let secondNumber = document.getElementById("number-two").value;
    let total = Number(firstNumber) * Number(secondNumber)
    document.getElementById("display").innerHTML = "ADDITION IS " + total; document.getElementById("display").innerHTML = "the result is:" + total;
}
// div number
function div() {
    let firstNumber = document.getElementById("number-one").value;
    let secondNumber = document.getElementById("number-two").value;
    let total = Number(firstNumber) / Number(secondNumber)
    document.getElementById("display").innerHTML = "ADDITION IS " + total; document.getElementById("display").innerHTML = "the result is:" + total;
}
