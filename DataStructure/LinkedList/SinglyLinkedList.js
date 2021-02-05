class Node {
  constructor(value) {
    this.value = value; // value
    this.next = null; // pointer
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // traverse() {
  //   let current = this.head;
  //   while (current) {
  //     console.log(current.value);
  //     current = current.next;
  //   }
  // }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current; // notice here
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  get(index) {
    // index is 0 based
    if (index < 0 || index > this.length) return null;
    let count = 0;
    let current = this.head;
    while (index !== count) {
      current = current.next;
      count++;
    }
    return current;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = val;
      return true;
    } else return false;
  }

  insert(index, val) {
    // index is 0 based
    if (index < 0 || index > this.length) return false;

    if (index === 0) return this.unshift(val);
    else if (index === this.length) return this.push(val);
    else {
      let newNode = new Node(val);
      let accessNode = this.get(index - 1);
      let prevNextNode = accessNode.next;
      accessNode.next = newNode;
      newNode.next = prevNextNode;
    }

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let prevNode = this.get(index - 1);
    let removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      //注意点：while条件是current，而不是current.next
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }

  reverse() {
    // 原理：
    //https://www.youtube.com/watch?v=O0By4Zq0OFc&ab_channel=BackToBackSWE

    let prev = null;
    let current = this.head;
    let next = null;

    this.head = this.tail;
    this.tail = current;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return prev; //return newest head
  }
}

let list = new SinglyLinkedList();
list.push("ming");
list.push("yue");
list.push("liu");
list.push("jessica");
console.log(list);
