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
        case "add":
            return add(thisNum, prevNum);
        case "subtract":
            return subtract(thisNum, prevNum);
        case "multiply":
            return multiply(thisNum, prevNum);
        case "divide":
            return divide(thisNum, prevNum);
        case "invert":
            return invert(thisNum);
        case "square":
            return square(thisNum);
        case "square-root":
            return squareRoot(thisNum);
        case "negate":
            return negate(thisNum);
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