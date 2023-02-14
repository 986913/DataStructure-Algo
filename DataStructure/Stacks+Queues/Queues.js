/*
an array-like data structure whose elements follow the FIFO rule: First In, First Out
- the following are a queue's standard operations and their time complexities:
    - Enqueuing an element into the queue —> O(1)
    - Dequeuing an element out of the queue ——> O(1)
    - peeking at the element on the front of the queue —→O(1)
    - searching for an element in the queue ——→ O(n)
A stack is typically implemented with a doubly linked list 
*/

/* 1. ---------------------------- build Queue by using Array ---------------------------- */
class Queue {
  constructor() {
    this.queue = [];
  }

  /**
   * Adds an item to the back of the queue.
   * @param {*} item The item to be pushed onto the queue.
   * @return {number} The new length of the queue.
   */
  enqueue(item) {
    this.queue.push(item);
    return this.queue.length;
  }

  /**
   * Remove an item from the front of the queue.
   * @return {*} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  dequeue() {
    if (this.isEmpty()) return undefined;
    return this.queue.shift();
  }

  /**
   * Determines if the queue is empty.
   * @return {boolean} `true` if the queue has no items, `false` otherwise.
   */
  isEmpty() {
    return this.queue.length === 0;
  }

  /**
   * Returns the item at the front of the queue without removing it from the queue.
   * @return {*} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  front() {
    if (this.isEmpty()) return undefined;
    return this.queue[0];
  }

  /**
   * Returns the item at the back of the queue without removing it from the queue it.
   * @return {*} The item at the back of the queue if it is not empty, `undefined` otherwise.
   */
  back() {
    if (this.isEmpty()) return undefined;
    return this.queue[this.queue.length - 1];
  }

  /**
   * Returns the number of items in the queue.
   * @return {number} The number of items in the queue.
   */
  length() {
    return this.queue.length;
  }
}
// let q = new Queues();
// q.enqueue("ming");
// q.enqueue("yue");
// q.enqueue("liu");
// q.dequeue();

/* 2. ---------------------------- build Queues by using Single Linked List ---------------------------- */
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
    let res = '';
    let current = this.first;
    while (current) {
      res += current.value;
      current = current.next;
    }
    return res;
  }
}

let q = new Queues();
q.enqueue('ming');
q.enqueue('yue');
q.enqueue('liu');
console.log(q.print());
// console.log(q.dequeue()); // ming
// console.log(q.dequeue()); //yue
// console.log(q.dequeue()); //liu
