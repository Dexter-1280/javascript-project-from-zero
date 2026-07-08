
let currentInput = '0';
let previousInput = '';
let activeOperator = null;
let shouldResetScreen = false;

const displayElement = document.getElementById('display');
const historyElement = document.getElementById('history');


function appendNumber(number) {
    if (currentInput === '0' || shouldResetScreen) {
        resetCurrentDisplay();
    }
    currentInput += number;
    updateDisplay();
}

// Controls safe placement of single floating decimal points
function appendDecimal(dot) {
    if (shouldResetScreen) {
        resetCurrentDisplay();
    }
    if (!currentInput.includes(dot)) {
        currentInput += dot;
    }
    updateDisplay();
}

function resetCurrentDisplay() {
    currentInput = '';
    shouldResetScreen = false;
}


function appendOperator(operator) {
    if (activeOperator !== null && !shouldResetScreen) {
        calculate();
    }
    previousInput = currentInput;
    activeOperator = operator;
    historyElement.innerText = `${previousInput} ${getOperatorSymbol(operator)}`;
    shouldResetScreen = true;
}


function getOperatorSymbol(op) {
    if (op === '*') return '×';
    if (op === '/') return '÷';
    return op;
}


function calculate() {
    if (activeOperator === null || shouldResetScreen) return;

    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    let computation;
    switch (activeOperator) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero");
                clearAll();
                return;
            }
            computation = prev / current;
            break;
        case '%':
            computation = (prev / 100) * current;
            break;
        default:
            return;
    }

    currentInput = parseFloat(computation.toFixed(10)).toString();
    historyElement.innerText = '';
    activeOperator = null;
    shouldResetScreen = true;
    updateDisplay();
}

// Erases current state back to zero configuration
function clearAll() {
    currentInput = '0';
    previousInput = '';
    activeOperator = null;
    historyElement.innerText = '';
    updateDisplay();
}


function deleteLast() {
    if (shouldResetScreen) return;
    currentInput = currentInput.toString().slice(0, -1);
    if (currentInput === '') {
        currentInput = '0';
    }
    updateDisplay();
}


function updateDisplay() {
    displayElement.innerText = currentInput;
}
