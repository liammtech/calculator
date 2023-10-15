var thisNum = new Number()
var prevNum = new Number()

function percentage(num1, num2) {
    // To be completed
}

function clearEntry(num1, num2) {
    // To be completed
}

function clear(num1, num2) {
    // To be completed
}

function backspace(num1, num2) {
    // To be completed
}

function invert(num1) {
    return 1 / num1;
}

function square(num1) {
    return num1 * num1;
}

function squareRoot(num1) {
    return Math.sqrt(num1);
}

function divide(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function add(num1, num2) {
    return num1 + num2;
}

function negate(num1) {
    return -Math.abs(num1);
}

function decimal(num1) {
    // To be completed
}

function equals(num1) {
    // To be completed
}

function number(num1) {
    // To be completed
}

function operate(operator, thisNum, prevNum) {
    switch(operator) {
        case "percentage":
            return percentage();
        case "clear-entry":
            return clearEntry();
        case "clear":
            return clear();
        case "backspace":
            return backspace();
        case "invert":
            return invert(thisNum);
        case "square":
            return square(thisNum);
        case "square-root":
            return squareRoot(thisNum);
        case "divide":
            return divide(thisNum, prevNum);
        case "multiply":
            return multiply(thisNum, prevNum);
        case "subtract":
            return subtract(thisNum, prevNum);
        case "add":
            return add(thisNum, prevNum);
        case "negate":
            return negate(thisNum);
        case "decimal":
            return decimal(thisNum);
        case "equals":
            return equals(thisNum);
        case "zero":
            return number(thisNum);
        case "one":
            return number(thisNum);
        case "two":
            return number(thisNum);
        case "three":
            return number(thisNum);
        case "four":
            return number(thisNum);
        case "five":
            return number(thisNum);
        case "six":
            return number(thisNum);
        case "seven":
            return number(thisNum);
        case "eight":
            return number(thisNum);
        case "nine":
            return number(thisNum);
    }
}

var uiPanel = document.querySelector("#ui-panel");
uiPanel.addEventListener("click", inputResponse, false)

function inputResponse(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        alert(clickedItem);
        return clickedItem;
    }
    e.stopPropagation;
}