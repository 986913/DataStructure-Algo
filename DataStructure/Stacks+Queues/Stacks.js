/* an array-like data structure whose elements follow the LIFO rule: Last In, First Out
  the following are a stack's standard operations and their time complexities:
    - pushing an element onto the stack —> O(1)
    - popping an element off the stack ——> O(1)
    - peeking at the element on the top of the stack —→O(1)
    - searching for an element in the stack ——→ O(n)
- A stack is typically implemented with a dynamic array  or with a singly linked list
*/

/* 1. ---------------------------- build Stacks by using Array ---------------------------- */
class Stack {
  constructor() {
    this.stack = [];
  }

  /**
   * Pushes an item onto the top of the stack.
   * @param {*} item The item to be pushed onto the stack.
   * @return {number} The new length of the stack.
   */
  push(item) {
    this.stack.push(item);
    return this.stack.length;
  }

  /**
   * Remove an item at the top of the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  pop() {
    if (!this.stack.length) return undefined;

    let top = this.stack.pop();
    return top;
  }

  /**
   * Determines if the stack is empty.
   * @return {boolean} `true` if the stack has no items, `false` otherwise.
   */
  isEmpty() {
    return this.stack.length === 0;
  }

  /**
   * Returns the item at the top of the stack without removing it from the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  peek() {
    if (!this.stack) return undefined;

    return this.stack[this.stack.length - 1];
  }

  /**
   * Returns the number of items in the stack.
   * @return {number} The number of items in the stack.
   */
  length() {
    return this.stack.length;
  }
}

// let s = new Stack();
// s.push('ming');
// s.push('yue');
// s.push('liu');
// s.pop();
// console.log(s.print());

/* 2. ---------------------------- build Stacks by using Single Linked List ---------------------------- */
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class Stack2 {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  pop() {
    if (!this.size) return null;

    let current = this.first;
    let newLast = current; // notice here

    while (current.next) {
      newLast = current; // update newLast
      current = current.next;
    }
    this.last = newLast; // update last here
    this.last.next = null;
    this.size--;

    if (this.size === 0) {
      this.first = null;
      this.last = null;
    }
    return current.value;
  }

  peek() {
    return this.last.value;
  }

  search(val) {
    if (!this.size) return null;
    let count = 0;
    let current = this.first;
    while (current) {
      if (current.value === val) return count;
      current = current.next;
      count++;
    }
    return -1;
  }
  isEmpty() {
    return this.size === 0;
  }
  print() {
    let result = '';
    let current = this.first;
    while (current) {
      result += current.value;
      current = current.next;
    }
    return result;
  }
}

// const s1 = new Stack2();
// s1.push('ming');
// s1.push('yue');
// s1.push('liu');
// console.log(s1.pop()); // liu
// console.log(s1.pop()); // yue
// console.log(s1.pop()); // ming
// console.log(s1.peek());
// console.log(s1.search("hh"));
// console.log(s1.print());
