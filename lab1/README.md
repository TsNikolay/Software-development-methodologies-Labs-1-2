# Quadratic Equation Solver
## Description

This console application is designed to solve quadratic equations in the format of "ax^2 + bx + c = 0",
where a ≠ 0 and "a", "b", and "c" are real numbers.
Depending on the values of "a", "b", and "c", the equation can have between 0 to 2 real roots or solutions, 
which are values of "x" that make the equation true. 
More information about quadratic equations and various methods for finding their solutions 
can be found on this website: https://en.wikipedia.org/wiki/Quadratic_equation.

The application offers two modes of operation: interactive and non-interactive (file) modes.

## How to run the project

1. Clone the repository to your local machine
2. Using your terminal or command prompt, go to the project directory
3. To use the interactive mode, enter the command
```bash
$ node lab1.js
``` 
4. To use the non-interactive (file) mode, enter the command
 ```bash
$ node lab1.js coefficients.txt
``` 

## Interactive Mode

When no arguments are passed to the application, it runs in interactive mode. 
In this mode, the application prompts the user to enter 3 coefficients: a, b, and c, displays the resulting equation on the screen, and finds the roots.
If the equation does not have any real roots, the program displays a message indicating this.
If the user inputs an incorrect value, the program outputs an error message to standard output (stdout) and allow the user to enter the number again.


## Non-interactive (File) Mode

In non-interactive mode, the program accepts one argument - the path to a file containing the coefficients of the quadratic equation.
The file must have three numbers (a, b, and c) separated by a single space. 
The program reads the file, displays the equation and its roots on standard output (stdout). 
If the file does not follow the specified format, the program outputs an error message to standard output (stdout) and terminates with a non-zero exit code.

## Input file format for non-interactive mode

The input file should contain three real numbers separated by a space:
a, which is the coefficient of x^2
b, which is the coefficient of x
c, which is the constant 

Here's an example of what the input file should look like:
1 23.45 -67

## Output of application

Interactive mode:

 ```bash
a: hello
Error. Expected a valid real number, got hello instead
a: 1
b: @
Error. Expected a valid real number, got @ instead
b: 23.45
c: \*_*/
Error. Expected a valid real number, got \*_*/ instead
c: -67
Equation is: (1) x^2 + (23.45) x + (-67) = 0
There are 2 roots
x1 = 2.574497368788876, x2 = -26.024497368788875
``` 

Non-interactive mode:
coefficients.txt: 3 6.125 -10
 ```bash
Equation is: (3) x^2 + (6.125) x + (-10) = 0
There are 2 roots
x1 = 1.070920482912206, x2 = -3.112587149578873
``` 

## Revert Commit

[The revert commit for this project](https://github.com/TsNikolay/Software-development-methodologies-Labs/commit/303a675087fc97bbf781c099fbafbfd1f1d9d5fb)
