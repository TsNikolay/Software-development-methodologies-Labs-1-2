const assert = require("assert").strict;
const { List } = require("./list.js");

const myList = new List();

{
  //Clear method test
  const myList = new List();
  myList.append("Mykola");
  myList.append("Olena");
  myList.clear();
  assert.strictEqual(myList.length(), 0);
}

{
  //Append method test
  myList.clear();
  try {
    myList.append(100);
    assert.fail("An error was expected");
  } catch (error) {
    assert.strictEqual(error.message, "Invalid element type. Please use Character(string)");
  }
  myList.append("Mykola");
  myList.append("Olena");
  myList.append("Igor"); //["Mykola","Olena","Igor"]
  assert.strictEqual(myList.length(), 3);
  assert.strictEqual(myList.get(0), "Mykola");
  assert.strictEqual(myList.get(1), "Olena");
  assert.strictEqual(myList.get(2), "Igor");
}

{
  //Insert method test
  myList.clear();
  try {
    myList.insert(100, 0);
    assert.fail("An error was expected");
  } catch (error) {
    assert.strictEqual(error.message, "Invalid element type. Please use Character(string)");
  }
  try {
    myList.insert("Mykola", -1);
    assert.fail("An error was expected");
  } catch (error) {
    assert.strictEqual(
      error.message,
      "Invalid index. Value less than zero or more than array length"
    );
  }
  try {
    myList.insert("e", 10);
    assert.fail("An error was expected");
  } catch (error) {
    assert.strictEqual(
      error.message,
      "Invalid index. Value less than zero or more than array length"
    );
  }
  myList.insert("Mykola", 0);
  myList.insert("Olena", 1); // ["Mykola", "Olena"]
  myList.insert("Igor", 1); // ["Mykola", "Igor", "Olena"]
  assert.strictEqual(myList.length(), 3);
  assert.strictEqual(myList.get(0), "Mykola");
  assert.strictEqual(myList.get(1), "Igor");
  assert.strictEqual(myList.get(2), "Olena");
}

{
  //Delete method test
  myList.clear();
  try {
    myList.delete(-3);
    assert.fail("An error was expected");
  } catch (error) {
    assert.strictEqual(
      error.message,
      "Invalid index. Value less than zero or more than array length"
    );
  }
  try {
    myList.delete(7);
    assert.fail("An error was expected");
  } catch (error) {
    assert.strictEqual(
      error.message,
      "Invalid index. Value less than zero or more than array length"
    );
  }

  myList.append("Mykola");
  myList.append("Olena");
  myList.append("Igor");
  myList.append("Oleksandr"); //["Mykola","Olena","Igor","Oleksandr"]
  myList.delete(1); //["Mykola","Igor","Oleksandr"]
  myList.delete(0); //["Igor","Oleksandr"]
  assert.strictEqual(myList.length(), 2);
  assert.strictEqual(myList.get(0), "Igor");
  assert.strictEqual(myList.get(1), "Oleksandr");
  myList.delete(0); //["Oleksandr"]
  myList.delete(0); //[]
  assert.strictEqual(myList.length(), 0);
}

{
  //DeleteAll method test
  myList.clear();
  try {
    myList.deleteAll(1);
    assert.fail("An error was expected");
  } catch (error) {
    assert.strictEqual(error.message, "Invalid element type. Please use Character(string)");
  }
  myList.insert("Mykola", 0);
  myList.insert("Igor", 1);
  myList.insert("Mykola", 2);
  myList.insert("Igor", 3);
  myList.insert("Oleksandr", 4);
  myList.insert("Mykola", 5);
  assert.strictEqual(myList.length(), 6);
  assert.strictEqual(myList.get(0), "Mykola");
  assert.strictEqual(myList.get(2), "Mykola");
  assert.strictEqual(myList.get(5), "Mykola");
  myList.deleteAll("Mykola"); //["Igor","Igor","Oleksandr"]
  assert.strictEqual(myList.length(), 3);
  assert.strictEqual(myList.get(0), "Igor");
  assert.strictEqual(myList.get(1), "Igor");
  myList.deleteAll("Igor"); //["Oleksandr"]
  assert.strictEqual(myList.length(), 1);
  assert.strictEqual(myList.get(0), "Oleksandr");
}

{
  //Get method test
  myList.clear();
  try {
    myList.get(-3);
    assert.fail("An error was expected");
  } catch (error) {
    assert.strictEqual(
      error.message,
      "Invalid index. Value less than zero or more than array length"
    );
  }
  try {
    myList.get(5);
    assert.fail("An error was expected");
  } catch (error) {
    assert.strictEqual(
      error.message,
      "Invalid index. Value less than zero or more than array length"
    );
  }
  myList.append("Mykola");
  myList.append("Olena");
  assert.strictEqual(myList.get(0), "Mykola");
  assert.strictEqual(myList.get(1), "Olena");
}

{
  //Clone method test
  myList.clear();
  myList.append("Mykola");
  myList.append("Olena"); // ["Mykola", "Olena"]
  let clonedList = myList.clone();
  assert.strictEqual(clonedList.length(), 2);
  assert.strictEqual(clonedList.get(0), "Mykola");
  assert.strictEqual(clonedList.get(1), "Olena");
  clonedList.delete(1); // ["Mykola"}
  assert.strictEqual(myList.length(), 2);
  assert.strictEqual(clonedList.length(), 1);
}

{
  //Reverse method test
  myList.clear();
  myList.insert("Mykola", 0);
  myList.insert("Igor", 1);
  myList.insert("Olena", 2);
  myList.reverse(); //["Olena","Igor","Mykola"]
  assert.strictEqual(myList.length(), 3);
  assert.strictEqual(myList.get(0), "Olena");
  assert.strictEqual(myList.get(1), "Igor");
  assert.strictEqual(myList.get(2), "Mykola");
}

{
  //FindFirst method test
  myList.clear();
  myList.append("Mykola");
  myList.append("Igor");
  myList.append("Mykola");
  myList.append("Olena");
  assert.strictEqual(myList.findFirst("Mykola"), 0);
  assert.strictEqual(myList.findFirst("Olena"), 3);
}

{
  //FindLast method test
  myList.clear();
  myList.append("Mykola");
  myList.append("Igor");
  myList.append("Mykola");
  myList.append("Olena");
  assert.strictEqual(myList.findLast("Mykola"), 2);
  assert.strictEqual(myList.findLast("Olena"), 3);
}

{
  //Extend method test
  myList.clear();
  const mySecondList = new List();
  myList.append("Mykola");
  myList.append("Olena");
  myList.append("Igor"); //["Mykola","Olena","Igor"]
  mySecondList.append("100");
  mySecondList.append("200");
  mySecondList.append("300"); //["100","200","300"]
  myList.extend(mySecondList);

  assert.strictEqual(myList.length(), 6);
  assert.strictEqual(myList.get(0), "Mikola");
  assert.strictEqual(myList.get(1), "Olena");
  assert.strictEqual(myList.get(2), "Igor");
  assert.strictEqual(myList.get(3), "100");
  assert.strictEqual(myList.get(4), "200");
  assert.strictEqual(myList.get(5), "300");
}
console.log("All tests passed successfully");
