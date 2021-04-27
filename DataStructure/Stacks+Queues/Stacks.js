/* an array-like data structure whose elements follow the LIFO rule: Last In, First Out
  the following are a stack's standard operations and their time complexities:
    - pushing an element onto the stack —> O(1)
    - popping an element off the stack ——> O(1)
    - peeking at the element on the top of the stack —→O(1)
    - searching for an element in the stack ——→ O(n)
- A stack is typically implemented with a dynamic array  or with a singly linked list
*/



/* 1. build Stacks by using Array */
class Stack {
  constructor() {
    this.items = [];
  }
  push(val) {
    this.items.push(val);
  }
  pop() {
    this.items.shift();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  search(val) {
    return this.items.indexOf(val);
  }
  isEmpty() {
    return this.items.length === 0;
  }
  print() {
    let result = "";
    this.items.forEach((item) => {
      result += item;
    });
    return result;
  }
}
let s = new Stack();
s.push("ming");
s.push("yue");
s.push("liu");
console.log(s.print());



/* 2. build Stacks by using Single Linked List */
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class Stack {
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
    const currentFirst = this.first;
    this.first = currentFirst.next;
    this.size--;
    if (this.size === 0) this.last = null;

    return currentFirst.value;
  }

  peek() {
    if (!this.size) return null;

    let current = this.first;
    while (current.next) {
      current = current.next;
    }
    return current.value;
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
    let result = "";
    let current = this.first;
    while (current) {
      result += current.value;
      current = current.next;
    }
    return result;
  }
}

const s = new Stack();
s.push("ming");
s.push("ming2");
s.push("ming3");
s.push("liu");
console.log(s.peek());
console.log(s.search("hh"));
console.log(s.print());
