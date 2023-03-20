const { arrayBasedList } = require("./list.js");
const myList = new arrayBasedList();

console.log('Check the "length" method');
console.log(`List length: ${myList.length()} \n`);

console.log('Checking the "append" method, we add elements to the list');
myList.append(1);
myList.append(7);
myList.append(3);
myList.append(2);
myList.append(3);
myList.append(7);
console.log(`List length after elements appending: ${myList.length()}`);
console.log(`List after elements appending: ${myList.elementsArray} \n`);

console.log('Checking the "insert" method, insert "4" in the second position');
myList.insert(4, 2);
console.log(`list length after inserting : ${myList.length()}`);
console.log(`List after inserting: ${myList.elementsArray} \n`);

console.log('Checking the "delete" method, we delete the element in the second position');
myList.delete(2);
console.log(`List length after element deleted: ${myList.length()}`);
console.log(`List after element deleted: ${myList.elementsArray} \n`);

console.log('Checking the "deleteAll" method, delete all "3"');
myList.deleteAll(3);
console.log(`List length after elements deleted: ${myList.length()}`);
console.log(`List after elements deleted: ${myList.elementsArray} \n`);

console.log('Checking the "get" method, find the element at index 0');
console.log(`Element at index 0: ${myList.get(0)} \n`); // 1

console.log('Checking the "clone" method, lets clone our list');
const clonedList = myList.clone();
console.log(`Our list: ${myList.elementsArray}`);
console.log(`Cloned list: ${clonedList.elementsArray} \n`);

console.log('Checking the "reverse" method, lets reverse our list');
myList.reverse();
console.log(`Reversed list: ${myList.elementsArray} \n`);

console.log('Checking the "findFirst" , "findLast" methods, lets find "7"');
console.log(`Index of first occurrence of 7: ${myList.findFirst(7)}`);
console.log(`Index of last occurrence of 7: ${myList.findLast(7)} \n`);

console.log('Checking the "clear" method, lets clear our list');
console.log(`List length before clearing: ${myList.length()}`);
myList.clear();
console.log(`List length after clearing: ${myList.length()} \n`);

console.log('Checking the "extend" method, lets extend our list');
const firstList = new arrayBasedList();
firstList.append(1);
firstList.append(2);
console.log(`First list: ${firstList.elementsArray}`);
const secondList = new arrayBasedList();
secondList.append(3);
secondList.append(4);
console.log(`Second list: ${secondList.elementsArray}`);
const concatenatedList = firstList.extend(secondList);
console.log(`Concatenated list: ${concatenatedList}`);
