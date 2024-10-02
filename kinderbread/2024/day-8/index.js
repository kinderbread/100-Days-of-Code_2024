let num1 = 8
let num2 = 2
let answerEl = document.getElementById("answer-el")
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add() {
    let sum = num1 + num2
    answerEl.textContent = "Sum: " + sum
    console.log("sum")
}

function subtract() {
    let difference = num1 - num2
    answerEl.textContent = "Difference: " + difference
    console.log("difference")
}

function divide() {
    let quotient = num1 / num2
    answerEl.textContent = "Quotient: " + quotient
    console.log("quotient")
}

function multiply() {
    let product = num1 + num2
    answerEl.textContent = "Product: " + product
    console.log("product")
}