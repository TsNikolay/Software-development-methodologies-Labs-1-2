const readline = require("readline");
const path = require("path");

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const INTERACTIVE_MODE = 0;
const NON_INTERACTIVE_MODE = 1;

const numberOfArguments = process.argv.length - 2;

(function () {
  if (numberOfArguments === INTERACTIVE_MODE) {
    console.log("INTERACTIVE_MODE");
  } else if (numberOfArguments === NON_INTERACTIVE_MODE) {
    console.log("NON_INTERACTIVE_MODE");
  }
})();

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
