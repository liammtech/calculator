var thisNum = "";
var prevNum = "";
var thisOp = "";
var numSwitch = false

function percentage(num1, num2) {
    // To be completed
}

function clearEntry(num1, num2) {
    thisNum = "";
}

function clear(num1, num2) {
    thisNum = "";
    prevNum = "";
    thisOp = "";
}

function backspace(num1, num2) {
    thisNum = thisNum.slice(0, -1);
    console.log(thisNum);
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

function equals(num1, num2) {
    // To be completed
}

function numInput(num1) {
    if (numSwitch) {
        numSwitch = false;
        prevNum = thisNum;
        thisNum = "" + num1;
    } else {
        thisNum = "" + thisNum + num1;
        console.log(thisNum);
    }
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
            return numInput(".");
        case "equals":
            return equals(thisNum);
        case "zero":
            return numInput(0);
        case "one":
            return numInput(1);
        case "two":
            return numInput(2);
        case "three":
            return numInput(3);
        case "four":
            return numInput(4);
        case "five":
            return numInput(5);
        case "six":
            return numInput(6);
        case "seven":
            return numInput(7);
        case "eight":
            return numInput(8);
        case "nine":
            return numInput(9);
    }
}

var uiPanel = document.querySelector("#ui-panel");
uiPanel.addEventListener("click", inputResponse, false)

function inputResponse(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        operate(clickedItem);
    }
    e.stopPropagation;
}