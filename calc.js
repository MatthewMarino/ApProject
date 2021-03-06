/* TODO: 1. Add these new functions: percentage, inverse, factorial, square and square root
2. Bootstrap it to make it pretty! 3. User can only type numbers in the display (30 max!), and the numbers are right aligned.
4. Fix divide by 0 errors! 5. Add the ability to clear the current input, but not memory.
6. Challenge: Add trig functions (in radian AND degree mode) 7. Extra Challenge: Add mc, m+, m-, mr butons that work!
8. Super Challenge: Add ( and ) buttons that work! 9. Super Duper Challenge: Add exponents (negatives too!)
*/
var currentInput = "0";
var memory = "0";
var operator = 0;
var I = 1;
var V = 5;
var L = 50;
var X = 10;
var C = 100;
var D = 500;
var M = 1000;

// Helper function for displaying the current input
function inputlimit() {
    if (inputlength > 11) {
        return "Error"
    }
    else {
        displayCurrentInput();
    }
}

function displayCurrentInput() {
    document.getElementById('screen').value = currentInput;
}
// Adds a digit to the current input
function addDigit(dig) {
    if (currentInput.length < 10) {
        if ((eval(currentInput) == 0) && (currentInput.indexOf(".") == -1)) {
            currentInput = dig;
        }
        else {
            currentInput = currentInput + dig;
        }
    }
    displayCurrentInput();
}
// Adds a decimal to the current input
function addDecimal() {
    if (currentInput.length == 0) {
        //no leading ".", use "0."
        currentInput = "0.";
    }
    else {
        // First make sure one doesn't exist
        if (currentInput.indexOf(".") == -1) {
            currentInput = currentInput + ".";
        }
    }
    displayCurrentInput();
}
// Clears everything.
function allClear() {
    currentInput = "0";
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}
// Stores the last operator pushed for multiply, divide, add, or subtract.
function storeOperator(op) {
    if (op.indexOf("*") > -1) {
        operator = 1;
    }; //codes for
    if (op.indexOf("/") > -1) {
        operator = 2;
    }; // slash (divide)
    if (op.indexOf("+") > -1) {
        operator = 3;
    }; // sum
    if (op.indexOf("-") > -1) {
        operator = 4;
    }; // difference
    if (op.indexOf("^") > -1) {
        operator = 5;
    }; // exponents
    memory = currentInput; //store value
    currentInput = "0";
    currentInput = convertToRoman(currentInput);
    displayCurrentInput();
}
// Calculate using operator, the memory and what is current
function calculate() {
    if (operator == 1) {
        currentInput = eval(memory) * eval(currentInput);
    };
    if (operator == 2) {
        currentInput = eval(memory) / eval(currentInput);
        var initialvalue = currentInput.toString();
        if (initialvalue == "Infinity") {
            currentInput = "ERROR"
        };
    };
    if (operator == 3) {
        currentInput = eval(memory) + eval(currentInput);
    };
    if (operator == 4) {
        currentInput = eval(memory) - eval(currentInput);
    };
    if (operator == 5) {
        currentInput = Math.pow(eval(memory), eval(currentInput));
    };
    operator = 0; //clear operator
    memory = "0"; //clear memory
    currentInput = convertToRoman(currentInput);
    displayCurrentInput();
}
// Change the sign of the current input
function changeSign() {
    currentInput = currentInput - 1
    currentInput = convertToRoman(currentInput);
    displayCurrentInput();
}
// Clear the current input back to 0
function clearcurrent() {
    currentInput = "0";
    currentInput = convertToRoman(currentInput);
    displayCurrentInput();
}
// Change the current input to a percentage
function percentage() {
    currentInput = currentInput / 100
    currentInput = convertToRoman(currentInput);
    displayCurrentInput();
}
// Calculate the factorial of the current input
function factorial(num) {
    for (var i = currentInput - 1; i >= 1; i--) {
        currentInput *= i;
    }
    currentInput = convertToRoman(currentInput);
    displayCurrentInput();
}
// Calculate the square of the current input
function square() {
    currentInput = currentInput * currentInput
    currentInput = convertToRoman(currentInput);
    displayCurrentInput();
}
// Calculate the square root of the current input
function squareRoot() {
    currentInput = Math.sqrt(currentInput);
    currentInput = convertToRoman(currentInput);
    displayCurrentInput();
}
// Calculate the inverse of the current input
function inverse() {
    currentInput = 1 / currentInput
    currentInput = convertToRoman(currentInput);
    displayCurrentInput();
}

function convertToRoman() {

  var decimal = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var done = '';

  for (var i = 0; i < decimal.length; i++) {
    while (decimal[i] <= currentInput) {
      done += romanNumeral[i];
      currentInput -= decimal[i];
    }
  }

  return done;

}
