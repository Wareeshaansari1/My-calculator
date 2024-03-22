
console.log ("---------------------------Welcome to Wareesha Ansari's Calculator----------------------------------")

import * as promptSync from 'prompt-sync';
const prompt = promptSync();
let loopcal = true;
while (loopcal) {
    const select = prompt("Do you want to perform a simple calculation (like addition or subtraction) on multiple numbers, or a more complex calculation with several steps?\nEnter option (1 or 2): ");

    if (select !== "1" && select !== "2") 
    {
        console.log("Invalid selection. Please enter either 1 or 2.");
        continue; 
    }

    if (select === "1") {
        const operation = prompt("Enter operation: ");
        const numbers = prompt("Enter numbers separated by commas: ").split(',').map(num => parseFloat(num.trim()));

        if (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/") {
            console.log("Invalid operation.");
            continue; 
        }
        if (numbers.some(isNaN)) {
            console.log("Invalid number(s). Please enter valid numbers.");
            continue; 
        }

        let result: number | undefined;

        if (operation === "+")
         {
            result = numbers.reduce((inum, fnum) => inum + fnum, 0);
        } 
        else if (operation === "-") 
        {
            result = numbers.reduce((inum, fnum) => inum - fnum);
        } else if (operation === "*") 
        {
            result = numbers.reduce((inum, fnum) => inum * fnum, 1);
        } else if (operation === "/")
         {
            if (numbers.slice(1).includes(0)) {
                console.log("Error! Division by zero.");
                continue; 
            }
            result = numbers.reduce((acc, curr) => acc / curr);
        }

        console.log("Your Answer:", result);
    } 
    else {
        const numOperations = parseInt(prompt("Enter the number of operations: "));

        if (isNaN(numOperations) || numOperations < 1) {
            console.log("Invalid number of operations. Please enter a positive integer.");
            continue; 
        }

        for (let i = 1; i <= numOperations; i++) {
            console.log(`Operation ${i}:`);

            const expression = prompt(`Specify the formula or equation you want to use ${i} : `);
            const parts = expression.split(/(\+|\-|\*|\/)/);
            let result = parseFloat(parts[0]);

            for (let j = 1; j < parts.length; j += 2) 
            {
                const operator = parts[j];
                const num = parseFloat(parts[j + 1]);

                if (isNaN(num)) {
                    console.log("Invalid expression. Please enter a valid expression.");
                    continue;
                }

                if (operator === "+")
                 {
                    result += num;
                } 
                else if (operator === "-") 
                {
                    result -= num;
                } else if (operator === "*") 
                {
                    result *= num;
                } else if (operator === "/") 
                {
                    if (num === 0) {
                        console.log("Error! Division by zero.");
                        continue; 
                    }
                    result /= num;
                }
            }

            console.log(`Result of operation ${i}:`, result);
        }
    }

    const userInput = prompt("Would you like to perform another calculation?"+"/t"+ "yes Or no: ");
    if (userInput.toLowerCase() !== "yes") {
        loopcal = false; 
    }
}

console.log("Thank you for using the calculator, Glad I could help! What's next?");
