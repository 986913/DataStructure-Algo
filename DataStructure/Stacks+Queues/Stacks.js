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
