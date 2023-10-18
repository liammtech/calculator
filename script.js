var thisNum = 0;
var prevNum = null;
var thisOp = null;
var numSwitch = false

function percentage() {
    // To be completed
}

function clearEntry() {
    thisNum = "";
}

function clear() {
    thisNum = 0;
    prevNum = null;
    thisOp = null;
    console.clear();
}

function backspace() {
    thisNum = thisNum.slice(0, -1);
    console.log(thisNum);
}

function invert() {
    thisNum = Number(thisNum);
    return 1 / thisNum;
}

function square() {
    thisNum = Number(thisNum);
    result = thisNum * thisNum;
    prevNum = thisNum;
    thisNum = result;
    return result;
}

function squareRoot() {
    thisNum = Number(thisNum);
    return Math.sqrt(thisNum);
}

function divide() {
    // return num1 / num2;
    numSwitch = true;
    thisOp = "divide-sign";
    console.log(thisNum);
}

function multiply() {
    // return num1 * num2;
    numSwitch = true;
    thisOp = "multiply-sign"
    console.log(thisNum);
}

function subtract() {
    // return num1 - num2;
    numSwitch = true;
    thisOp = "subtract-sign";
    console.log(thisNum);
}

function add() {
    // return num1 + num2;
    numSwitch = true;
    thisOp = "plus-sign";
    console.log(thisNum);
}

function negate(num1) {
    thisNum = -Math.abs(num1);
    console.log(thisNum);
}

function equals() {
    // To be completed
    let result = null;
    thisNum = Number(thisNum);
    prevNum = Number(prevNum);
    switch(thisOp) {
        case "divide-sign":
            result = prevNum / thisNum;
            prevNum = thisNum;
            thisNum = result;
            return result;
        case "multiply-sign":
            result = prevNum * thisNum;
            prevNum = thisNum;
            thisNum = result;
            return result;
        case "subtract-sign":
            result = prevNum - thisNum;
            prevNum = thisNum;
            thisNum = result;
            return result;
        case "plus-sign":
            result = prevNum + thisNum;
            prevNum = thisNum;
            thisNum = result;
            return result;
    }
}

function numInput(num1) {
    if (thisNum === 0) {
        thisNum = "";
    }
    if (numSwitch) {
        numSwitch = false;
        prevNum = thisNum;
        thisNum = "" + num1;
        console.log(thisNum);
    } else {
        thisNum = "" + thisNum + num1;
        console.log(thisNum);
    }
}

function operate(operator) {
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
            if (thisNum === 0) {
                console.log(thisNum);
                return;
            }
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
        result = operate(clickedItem);

        console.log(result);
    }
    e.stopPropagation;
}