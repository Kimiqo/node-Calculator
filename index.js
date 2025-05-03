import readline from 'readline';
import chalk from 'chalk';

import { add, subtract } from './operations.js';
import { multiply, divide } from './advancedOperations.mjs';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate() {
  rl.question(chalk.blue('Enter first number: '), (num1) => {
    rl.question(chalk.blue('Enter second number: '), (num2) => {
      rl.question(chalk.blue('Enter operation (+, -, *, /): '), (operation) => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if (isNaN(n1) || isNaN(n2)) {
          console.log(chalk.red('Error: Please enter valid numbers!'));
          rl.close();
          return;
        }

        let result;
        switch (operation) {
          case '+':
            result = add(n1, n2);
            console.log(chalk.green(`Result: ${n1} + ${n2} = ${result}`));
            break;
          case '-':
            result = subtract(n1, n2);
            console.log(chalk.green(`Result: ${n1} - ${n2} = ${result}`));
            break;
          case '*':
            result = multiply(n1, n2);
            console.log(chalk.green(`Result: ${n1} * ${n2} = ${result}`));
            break;
          case '/':
            if (n2 === 0) {
              console.log(chalk.red('Error: Cannot divide by zero!'));
            } else {
              result = divide(n1, n2);
              console.log(chalk.green(`Result: ${n1} / ${n2} = ${result}`));
            }
            break;
          default:
            console.log(chalk.red('Error: Invalid operation! Use +, -, *, or /.'));
        }
        rl.close();
      });
    });
  });
}

console.log(chalk.blue('Welcome to the Node.js Calculator!'));
calculate();