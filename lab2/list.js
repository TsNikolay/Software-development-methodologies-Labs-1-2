class List {
  constructor() {
    this.elementsArray = [];
  }

  length() {
    return this.elementsArray.length;
  }

  append(element) {
    if (typeof element !== "string") {
      throw new Error("Invalid element type. Please use Character(string)");
    }
    this.elementsArray.push(element);
  }

  insert(element, index) {
    if (typeof element !== "string") {
      throw new Error("Invalid element type. Please use Character(string)");
    } else if (index > this.length() || index < 0) {
      throw new Error("Invalid index. Value less than zero or more than array length");
    }
    this.elementsArray.splice(index, 0, element);
  }

  delete(index) {
    if (index > this.length() || index < 0) {
      throw new Error("Invalid index. Value less than zero or more than array length");
    }
    return this.elementsArray.splice(index, 1)[0];
  }

  deleteAll(element) {
    if (typeof element !== "string") {
      throw new Error("Invalid element type. Please use Character(string)");
    }
    this.elementsArray = this.elementsArray.filter((currentElement) => currentElement !== element);
  }

  get(index) {
    if (index > this.length() || index < 0) {
      throw new Error("Invalid index. Value less than zero or more than array length");
    }
    return this.elementsArray[index];
  }

  clone() {
    const additionalList = new List();
    this.elementsArray.forEach((e) => additionalList.append(e));
    return additionalList;
  }

  reverse() {
    this.elementsArray.reverse();
  }

  findFirst(element) {
    return this.elementsArray.indexOf(element);
  }

  findLast(element) {
    return this.elementsArray.lastIndexOf(element);
  }

  clear() {
    this.elementsArray = [];
  }

  extend(additionalList) {
    const concatenatedArray = this.elementsArray.concat(additionalList.elementsArray);
    return concatenatedArray;
  }
}

module.exports = { List };
