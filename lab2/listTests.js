const assert = require("assert").strict;
const { arrayBasedList } = require("./list.js");

const myList = new arrayBasedList();

//Append method test
myList.append(10);
myList.append(20);
myList.append(30); //[10,20,30]
assert.strictEqual(myList.length(), 3);

//Insert method test
myList.insert(25, 2); //[10,20,25,30]
assert.strictEqual(myList.length(), 4);
assert.strictEqual(myList.get(2), 25);

//Delete method test
myList.delete(3); //[10,20,25]
assert.strictEqual(myList.length(), 3);
assert.strictEqual(myList.get(0), 10);
assert.strictEqual(myList.get(1), 21);
assert.strictEqual(myList.get(2), 25);
assert.strictEqual(myList.get(3), undefined);

//DeleteAll method test
myList.insert(50, 2);
myList.insert(50, 3); // [10,20,50,50,25]
assert.strictEqual(myList.get(2), 50);
assert.strictEqual(myList.get(3), 50);
myList.deleteAll(50); // [10,20,25]
assert.strictEqual(myList.length(), 3);
assert.strictEqual(myList.get(2), 25);
assert.strictEqual(myList.get(3), undefined);

//Get method test
assert.strictEqual(myList.get(0), 10);
assert.strictEqual(myList.get(1), 20);
assert.strictEqual(myList.get(2), 25);

//Clone method test
const clonedList = myList.clone(); //[10,20,25]
assert.strictEqual(clonedList.length(), 3);
assert.deepStrictEqual(clonedList.elementsArray, [10, 20, 25]);
clonedList.delete(1); // [10,25]
assert.strictEqual(myList.length(), 3);
assert.strictEqual(clonedList.length(), 2);

//Reverse method test
myList.insert(30, 3); //[10,20,25,30]
myList.reverse(); //[30,25,20,10]
assert.strictEqual(myList.length(), 4);
assert.deepStrictEqual(myList.elementsArray, [30, 25, 20, 10]);

//FindFirst method test
myList.append(25); //[30,25,20,10,25]
assert.strictEqual(myList.findFirst(25), 1);

//FindLast method test
myList.append(15); //[30,25,20,10,25,15]
assert.strictEqual(myList.findLast(25), 4);

//Clear method test
myList.clear();
assert.strictEqual(myList.length(), 0);

//Extend method test
const mySecondList = new arrayBasedList();
myList.append(1);
myList.append(2);
myList.append(3); //[1,2,3]
mySecondList.append(100);
mySecondList.append(200);
mySecondList.append(300); //[100,200,300]
const concatenatedList = myList.extend(mySecondList);
assert.deepStrictEqual(concatenatedList, [1, 2, 3, 100, 200, 300]);

console.log("All tests passed successfully");
