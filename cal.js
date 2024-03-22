"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("---------------------------Welcome to Wareesha Ansari's Calculator----------------------------------");
var promptSync = require("prompt-sync");
var prompt = promptSync();
var loopcal = true;
while (loopcal) {
    var select = prompt("Do you want to perform a simple calculation (like addition or subtraction) on multiple numbers, or a more complex calculation with several steps?\nEnter option (1 or 2): ");
    if (select !== "1" && select !== "2") {
        console.log("Invalid selection. Please enter either 1 or 2.");
        continue;
    }
    if (select === "1") {
        var operation = prompt("Enter operation: ");
        var numbers = prompt("Enter numbers separated by commas: ").split(',').map(function (num) { return parseFloat(num.trim()); });
        if (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/") {
            console.log("Invalid operation.");
            continue;
        }
        if (numbers.some(isNaN)) {
            console.log("Invalid number(s). Please enter valid numbers.");
            continue;
        }
        var result = void 0;
        if (operation === "+") {
            result = numbers.reduce(function (inum, fnum) { return inum + fnum; }, 0);
        }
        else if (operation === "-") {
            result = numbers.reduce(function (inum, fnum) { return inum - fnum; });
        }
        else if (operation === "*") {
            result = numbers.reduce(function (inum, fnum) { return inum * fnum; }, 1);
        }
        else if (operation === "/") {
            if (numbers.slice(1).includes(0)) {
                console.log("Error! Division by zero.");
                continue;
            }
            result = numbers.reduce(function (acc, curr) { return acc / curr; });
        }
        console.log("Your Answer:", result);
    }
    else {
        var numOperations = parseInt(prompt("Enter the number of operations: "));
        if (isNaN(numOperations) || numOperations < 1) {
            console.log("Invalid number of operations. Please enter a positive integer.");
            continue;
        }
        for (var i = 1; i <= numOperations; i++) {
            console.log("Operation ".concat(i, ":"));
            var expression = prompt("Specify the formula or equation you want to use ".concat(i, " : "));
            var parts = expression.split(/(\+|\-|\*|\/)/);
            var result = parseFloat(parts[0]);
            for (var j = 1; j < parts.length; j += 2) {
                var operator = parts[j];
                var num = parseFloat(parts[j + 1]);
                if (isNaN(num)) {
                    console.log("Invalid expression. Please enter a valid expression.");
                    continue;
                }
                if (operator === "+") {
                    result += num;
                }
                else if (operator === "-") {
                    result -= num;
                }
                else if (operator === "*") {
                    result *= num;
                }
                else if (operator === "/") {
                    if (num === 0) {
                        console.log("Error! Division by zero.");
                        continue;
                    }
                    result /= num;
                }
            }
            console.log("Result of operation ".concat(i, ":"), result);
        }
    }
    var userInput = prompt("Would you like to perform another calculation?" + "/t" + "yes Or no: ");
    if (userInput.toLowerCase() !== "yes") {
        loopcal = false;
    }
}
console.log("Thank you for using the calculator, Glad I could help! What's next?");
