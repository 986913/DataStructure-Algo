/** 需要根据最新的Singly Linked List的规格来更新， */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // insert a new node to the end
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  // remove the last node (tail)
  pop() {
    if (!this.head) return undefined;
    const oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }

  // remove the start node(head)
  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  // insert a new node to the start
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  // get a node based on index(index based 0)
  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      console.log('working from begin');
      let count = 0;
      let current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      console.log('working from end');
      let count = this.length - 1;
      let current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }

  // set a node based on index
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode != null) foundNode.value = val;
  }

  // insert a new node based on index (index is 0 based)
  inset(index, val) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    const newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
  }

  // remove a node based on index
  remove(index) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let beforeNode = this.get(index - 1);
    let foundNode = beforeNode.next;
    beforeNode.next = foundNode.next;
    foundNode.next.prev = beforeNode;
    this.length--;
  }

  reverse() {
    if (this.head === null) return null;
    let currentNode = this.head;
    this.tail = currentNode;

    while (currentNode !== null) {
      let prev = currentNode.prev;
      currentNode.prev = currentNode.next;
      currentNode.next = prev;

      if (currentNode.prev) {
        currentNode = currentNode.prev;
      } else {
        this.head = currentNode;
        break;
      }
    }
  }
}

let list = new DoublyLinkedList();
list.push('ming');
list.push('yue');
list.push('liu');
list.reverse();
console.log(list);
