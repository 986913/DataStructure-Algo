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
    return this.items[0];
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

/* 2. build Stacks by using Singly linked List */
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queues {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;

    return this.size;
  }

  dequeue() {
    if (!this.size) return null;

    const oldFirst = this.first;
    this.first = oldFirst.next;
    this.size--;

    return oldFirst.value;
  }
  peek() {
    return this.first.value;
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
    let res = "";
    let current = this.first;
    while (current) {
      res += current.value;
      current = current.next;
    }
    return res;
  }
}

let q = new Queues();
q.enqueue("ming");
q.enqueue("yue");
q.enqueue("liu");
console.log(q.print());
// console.log(q.dequeue()); // ming
// console.log(q.dequeue()); //yue
// console.log(q.dequeue()); //liu
