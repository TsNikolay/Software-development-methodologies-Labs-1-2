const { List } = require("./list.js");
const myList = new List();

console.log('Check the "length" method');
console.log(`List length: ${myList.length()} \n`);

console.log('Checking the "append" method, we add elements to the list');
myList.append("1");
myList.append("7");
myList.append("3");
myList.append("2");
myList.append("3");
myList.append("7");
myList.display();
console.log(`List length after elements appending: ${myList.length()} \n`);

console.log('Checking the "insert" method, insert "4" in the second position');
myList.insert("4", 2);
myList.display();
console.log(`list length after inserting : ${myList.length()} \n`);

console.log('Checking the "delete" method, we delete the element in the second position');
myList.delete("2");
myList.display();
console.log(`List length after element deleted: ${myList.length()} \n`);

console.log('Checking the "deleteAll" method, delete all "3"');
myList.deleteAll("3");
myList.display();
console.log(`List length after elements deleted: ${myList.length()} \n`);

console.log('Checking the "get" method, find the element at index 0');
myList.display();
console.log(`Element at index 0: ${myList.get(0)} \n`); // 1

console.log('Checking the "clone" method, lets clone our list');
const clonedList = myList.clone();
myList.display();
console.log("Our list");
clonedList.display();
console.log("Cloned list \n");

console.log('Checking the "reverse" method, lets reverse our list');
myList.display();
myList.reverse();
myList.display();
console.log("\n");

console.log('Checking the "findFirst" , "findLast" methods, lets find "7"');
myList.display();
console.log(`Index of first occurrence of 7: ${myList.findFirst("7")}`);
console.log(`Index of last occurrence of 7: ${myList.findLast("7")} \n`);

console.log('Checking the "clear" method, lets clear our list');
myList.display();
console.log(`List length before clearing: ${myList.length()}`);
myList.clear();
console.log(`List length after clearing: ${myList.length()} \n`);

console.log('Checking the "extend" method, lets extend our list');
const firstList = new List();
firstList.append("1");
firstList.append("2");
firstList.display();
const secondList = new List();
secondList.append("3");
secondList.append("4");
secondList.display();
firstList.extend(secondList);
firstList.display();
