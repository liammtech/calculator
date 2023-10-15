function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
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

function negate(num1) {
    return -Math.abs(num1);
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
            return zero(thisNum);
        case "one":
            return one(thisNum);
        case "two":
            return two(thisNum);
        case "three":
            return three(thisNum);
        case "four":
            return four(thisNum);
        case "five":
            return five(thisNum);
        case "six":
            return six(thisNum);
        case "seven":
            return seven(thisNum);
        case "eight":
            return eight(thisNum);
        case "nine":
            return nine(thisNum);
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