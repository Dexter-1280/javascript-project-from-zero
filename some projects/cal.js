let expression = '';

function appendNumber(number) {
    expression += number;
    displaycal();
}

function appendOperator(operator) {
   
    expression += operator;
   
    displaycal();
}

function displaycal() {
    let calculation = document.querySelector('.calculator input');
    calculation.value = expression;
}

function deleteall() {
  if (expression === "") return;
    displaycal();
}

function deleteone() {
    expression = expression.slice(0, -1);
    displaycal();
}
function appendDot() {
    let lastNumber = experssion.split(/[\+\-\*\/]/).pop();

    if (!lastNumber.includes(".")) {
        if (lastNumber === "") {
            experssion += "0.";
        } else {
            experssion += ".";
        }
        displaycal();
    }
}

function calculation() {
    try {
        expression = eval(expression).toString();
    } catch {
        expression = "Error";
    }
    displaycal();
}