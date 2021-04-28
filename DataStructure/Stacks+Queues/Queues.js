/*
an array-like data structure whose elements follow the FIFO rule: First In, First Out
- the following are a queue's standard operations and their time complexities:
    - Enqueuing an element into the queue —> O(1)
    - Dequeuing an element out of the queue ——> O(1)
    - peeking at the element on the front of the queue —→O(1)
    - searching for an element in the queue ——→ O(n)
A stack is typically implemented with a doubly linked list 
*/

/* 1. build Stacks by using Array */
class Queues {
  constructor() {
    this.items = [];
  }
  enqueue(val) {
    this.items.push(val);
  }
  dequeue() {
    return this.items.shift();
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
    let res = "";
    this.items.forEach((i) => (res += i));
    return res;
  }
}
// let q = new Queues();
// q.enqueue("ming");
// q.enqueue("yue");
// q.enqueue("liu");
// q.dequeue();
