"use strict";

class Element {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.listLength = 0;
  }

  length() {
    return this.listLength;
  }

  append(element) {
    if (typeof element !== "string") {
      throw new Error("Invalid element type. Please use Character(string)");
    }
    const newElement = new Element(element);
    if (this.listLength === 0) {
      this.head = newElement;
      this.tail = newElement;
      newElement.next = newElement;
    } else {
      this.tail.next = newElement;
      this.tail = newElement;
      newElement.next = this.head;
    }
    this.listLength++;
  }

  insert(element, index) {
    if (typeof element !== "string") {
      throw new Error("Invalid element type. Please use Character(string)");
    }
    if (index > this.listLength || index < 0) {
      throw new Error("Invalid index. Value less than zero or more than array length");
    }
    if (index === 0) {
      const newElement = new Element(element);
      if (this.listLength === 0) {
        this.head = newElement;
        this.tail = newElement;
        newElement.next = newElement;
      } else {
        newElement.next = this.head;
        this.head = newElement;
        this.tail.next = this.head;
      }
      this.listLength++;
    } else if (index === this.listLength && this.listLength != 0) {
      this.append(element);
    } else {
      const newElement = new Element(element);
      let currentElement = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentElement = currentElement.next;
      }
      newElement.next = currentElement.next;
      currentElement.next = newElement;
      this.listLength++;
    }
  }

  delete(index) {
    if (index >= this.listLength || index < 0) {
      throw new Error("Invalid index. Value less than zero or more than array length");
    }
    let elementForDeleting = null;
    if (this.listLength === 1) {
      elementForDeleting = this.head.value;
      this.head = null;
      this.tail = null;
    } else if (index === 0) {
      elementForDeleting = this.head.value;
      this.head = this.head.next;
      this.tail.next = this.head;
    } else if (index === this.listLength - 1) {
      let currentElement = this.head;
      while (currentElement.next !== this.tail) {
        currentElement = currentElement.next;
      }
      elementForDeleting = this.tail.value;
      currentElement.next = this.head;
      this.tail = currentElement;
    } else {
      let currentElement = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentElement = currentElement.next;
      }
      elementForDeleting = currentElement.next.value;
      currentElement.next = currentElement.next.next;
    }
    this.listLength--;
    return elementForDeleting;
  }

  deleteAll(element) {
    if (typeof element !== "string") {
      throw new Error("Invalid element type. Please use Character(string)");
    }
    if (this.listLength === 0) {
      return;
    }
    let currentElement = this.head;
    let previousElement = this.tail;
    let elementsAmount = 0;
    let startLength = this.listLength;

    do {
      if (currentElement.value === element) {
        if (this.listLength === 1) {
          this.head = null;
          this.tail = null;
        } else if (currentElement === this.head) {
          this.head = currentElement.next;
          this.tail.next = this.head;
        } else if (currentElement === this.tail) {
          previousElement.next = this.head;
          this.tail = previousElement;
        } else {
          previousElement.next = currentElement.next;
        }
        this.listLength--;
      } else {
        previousElement = currentElement;
      }

      elementsAmount++;
      currentElement = currentElement.next;
    } while (elementsAmount !== startLength);
  }

  get(index) {
    if (index >= this.listLength || index < 0) {
      throw new Error("Invalid index. Value less than zero or more than array length");
    }

    let currentElement = this.head;

    for (let i = 0; i < index; i++) {
      currentElement = currentElement.next;
    }
    return currentElement.value;
  }

  clone() {
    const newList = new List();
    let currentElement = this.head;

    for (let i = 0; i < this.listLength; i++) {
      newList.append(currentElement.value);
      currentElement = currentElement.next;
    }
    return newList;
  }

  reverse() {
    let currentElement = this.head;
    let previousElement = null;
    let nextElement = null;
    this.tail = currentElement;

    do {
      nextElement = currentElement.next;
      currentElement.next = previousElement;
      previousElement = currentElement;
      currentElement = nextElement;
    } while (currentElement !== this.head);

    this.head = previousElement;
    this.tail.next = this.head;
  }

  findFirst(element) {
    let currentElement = this.head;
    let index = 0;
    while (currentElement) {
      if (currentElement.value === element) {
        return index;
      }
      currentElement = currentElement.next;
      index++;
    }
    return;
  }

  findLast(element) {
    let index = this.listLength - 1;
    while (index !== 0) {
      let currentElement = this.head;
      for (let i = 0; i < index; i++) {
        currentElement = currentElement.next;
      }
      if (currentElement.value === element) {
        return index;
      }
      index--;
    }
    return;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.listLength = 0;
  }

  extend(secondList) {
    let listHead = secondList.head;
    do {
      this.append(listHead.value);
      listHead = listHead.next;
    } while (listHead !== secondList.head);
  }

  display() {
    let currentElement = this.head;
    let finalArray = [];
    if (currentElement === null) {
      console.log(currentElement);
      return;
    }
    do {
      finalArray.push(currentElement.value);
      currentElement = currentElement.next;
    } while (currentElement !== this.head);

    console.log("List:", finalArray.join(" --> "));
  }
}

module.exports = { List };
