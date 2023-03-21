# Lab2 (Unit tests, CI)

## Description

This application demonstrates typed list and how it can be used to contain and manipulate data. You can add, insert, delete, get, clone, reverse and clear data.The first implementation of the list uses built-in arrays/lists to store the data, while the refactored implementation uses a singly linked circular list. You can also see tests that confirm the correct operation of the implemented list.

## Variant

The variant is determined by taking the remainder of the student ID number divided by 4  
My ID number — 1122  
1122 % 4 = 2  
First list implementation: list based on built-in arrays/lists  
Second implementation: singly linked circular list

## How to run
1. Install Node.js.
2. Clone the repository to your local machine
3. Navigate to the project directory in your terminal or command prompt
4. To run the demonstration of using of all methods

```bash
$ node showListMethods.js
````
5. To run tests

```bash
$ node listTests.js
```
## Reference to the commit, where CI tests failed

[Tests failed](https://github.com/TsNikolay/Software-development-methodologies-Labs/commit/380a95e13fed62cef1596db975bffbac3879ad90)

## Conclusion

Unit tests proved to be an invaluable tool for ensuring the correctness and reliability of my application. Through testing, I was able to quickly identify and fix bugs, as well as verify the application's health after code refactoring. Although it takes time to write and run tests, it is worth it, because in the future it will allow Save time by identifying and fixing problems early.
