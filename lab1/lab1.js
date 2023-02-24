const readline = require("readline");
const path = require("path");
const fs = require("fs");

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INTERACTIVE_MODE = 0;
const NON_INTERACTIVE_MODE = 1;

const numberOfArguments = process.argv.length - 2;

(function () {
  if (numberOfArguments === INTERACTIVE_MODE) {
    interactiveMode();
  } else if (numberOfArguments === NON_INTERACTIVE_MODE) {
    nonInteractiveMode();
  }
})();

function nonInteractiveMode() {
  //The program reads a file in which there are three numbers separated by a space.
  //If the file does not match the format, you need to display an error.
  //If everything is in order, solve the quadratic equation
}

async function interactiveMode() {
  const a = await getCoefficient("a");
  const b = await getCoefficient("b");
  const c = await getCoefficient("c");
  solveQuadraticEquation(a, b, c);
  readlineInterface.close();
}

function getCoefficient(coefficient) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(`${coefficient}:`, (answer) => {
      const number = Number(answer);
      let errorMessage;

      if (isNaN(number)) {
        errorMessage = `Error. Expected a valid real number, got ${answer} instead`;
        console.log(errorMessage);
        resolve(getCoefficient(coefficient));
      } else if (number === 0 && coefficient === "a") {
        errorMessage = `Error. "a" cannot be 0`;
        console.log(errorMessage);
        resolve(getCoefficient(coefficient));
      } else {
        resolve(number);
      }
    });
  });
}

function solveQuadraticEquation(a, b, c) {
  const equationInfo = `Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`;
  const discriminant = b * b - 4 * a * c;
  let solutionInfo;
  let x1;
  let x2;

  if (discriminant < 0) {
    solutionInfo = "There are 0 roots";
  } else if (discriminant === 0) {
    x1 = -b / (2 * a);
    solutionInfo = `There are 1 root\nx1 = ${x1}`;
  } else {
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    solutionInfo = `There are 2 roots\nx1 = ${x1}, x2 = ${x2}`;
  }

  console.log(equationInfo);
  console.log(solutionInfo);
}
