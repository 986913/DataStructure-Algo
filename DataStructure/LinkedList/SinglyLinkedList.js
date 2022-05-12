class Node {
  constructor(val) {
    this.value = val; //value
    this.next = null; //pointer
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // insert a new node to the end
  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  // remove the last node (tail)
  pop() {
    if (!this.head) return undefined;

    let curr = this.head;
    let newTail = curr;
    while (curr.next) {
      newTail = curr;
      curr = curr.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return curr; // return the old tail which has removed
  }

  // insert a new node to the start
  unshift(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
  }

  // remove the start node(head)
  shift() {
    if (!this.head) return undefined;

    let oldHead = this.head;
    this.head = oldHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return oldHead;
  }

  // get a node based on index(index based 0)
  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let count = 0;
    let curr = this.head;

    while (count !== index) {
      curr = curr.next;
      count++;
    }

    return curr;
  }

  // set a node based on index
  set(index, newVal) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = newVal;
      return true;
    } else return false;
  }

  // insert a new node based on index (index is 0 based)
  insert(index, val) {
    // index is 0 based
    if (index < 0 || index > this.length) return false;

    if (index === 0) return this.unshift(val);
    else if (index === this.length) return this.push(val);
    else {
      let newNode = new Node(val);
      let prevNode = this.get(index - 1);
      let prevNextNode = prevNode.next;
      prevNode.next = newNode;
      newNode.next = prevNextNode;
    }
    this.length++;
    return true;
  }

  // remove a node based on index
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

  // traverse() {
  //   let current = this.head;
  //   while (current) {
  //     console.log(current.value);
  //     current = current.next;
  //   }
  // }

  // print all node (head --> trail)
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

  /* reverse linked list: 
    https://www.youtube.com/watch?v=O0By4Zq0OFc&ab_channel=BackToBackSWE
  */
  reverse() {
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

const test = new SinglyLinkedList();
test.push("ming");
test.push("yue");
test.push("liuu");
console.log(test.reverse());
