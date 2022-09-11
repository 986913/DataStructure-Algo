class Node {
  constructor(val, next) {
    this.value = val; //value
    this.next = next; //pointer
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * ---------------------------------- insert a new node to the end （addAtTail）----------------------------------
   */
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /**
   * ---------------------------------- insert a new node to the start （addAtHead）----------------------------------
   */
  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  /**
   * ----------------------------------  get the index-th node, index based 0 (getNode)----------------------------------
   */
  getNode(index) {
    if (index < 0 || index >= this.length) return null;

    /* 创建虚拟头节点 类似于：
        let dummyHead = new ListNode(-1);
        dummyHead.next = this.head;
        let curr = dummyHead;
     */
    let curr = new Node(-1, this.head); // 创建虚拟头节点
    while (index >= 0) {
      curr = curr.next;
      index--;
    }

    return curr;
  }

  /**
   * ----------------------------------  remove the last node (delete the Tail Node)----------------------------------
   */
  pop() {
    if (!this.head) return null;

    if (this.length === 1) {
      let oldTail = this.head;
      this.head = this.tail = null;
      this.length--;
      return oldTail; // return the old tail which has removed.
    }

    /* When linkedList length >=2 : */
    let last2ndNode = this.getNode(this.length - 2);
    let lastNode = last2ndNode.next;
    last2ndNode.next = null; // del tail here
    this.length--;

    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return lastNode; // return the old tail which has removed.
  }

  /**
   * ----------------------------------  remove the start node (delete the Head Node)----------------------------------
   */
  shift() {
    if (!this.head) return null;

    let oldHead = this.head;
    this.head = oldHead.next; // del head here
    this.length--;

    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }

    return oldHead; // return the old head which has removed.
  }

  /**
   * ----------------------------------  set a node based on index (set the n-th node)----------------------------------
   */
  set(index, newVal) {
    let foundNode = this.getNode(index);

    if (foundNode) {
      foundNode.value = newVal;
      return true;
    } else return false;
  }

  /**
   * ---------------------------------- insert a new node based before the n-th node, index is 0 based (addAtIndex) ----------------------------------
   */
  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return this.unshift(val);
    else if (index === this.length) return this.push(val);
    else {
      // 获取目标节点的上一个的节点
      const prevNode = this.getNode(index - 1);
      prevNode.next = new Node(val, prevNode.next);
    }
    this.length++;
    return true;
  }

  /**
   * ---------------------------------- remove the n-th node, index is 0 based (deleteAtIndex)  ----------------------------------
   */
  remove(index) {
    if (index < 0 || index > this.length - 1) return null;

    if (index === 0) return this.shift();

    // 获取目标节点的上一个的节点
    const prevNode = this.getNode(index - 1);
    const removedNode = prevNode.next;
    prevNode.next = prevNode.next.next; // del node here

    // 处理尾节点
    if (index === this.length - 1) this.tail = prevNode;

    this.length--;
    return removedNode; // return the node which has removed.
  }

  /**
   * ---------------------------------- traverse ----------------------------------
   */
  traverse() {
    let dummyHead = new Node(-1, this.head); // created dummyHead;
    let curr = dummyHead.next;
    while (curr) {
      //注意这里是curr 不是curr.next
      console.log(curr.value);
      curr = curr.next;
    }

    console.log(dummyHead.next); // traverse同时不会影响list
  }
  /**
   * ----------------------------------  print all node (head --> trail)  ----------------------------------
   */
  print() {
    let arr = [];
    let dummyHead = new Node(-1, this.head); // created dummyHead;
    let curr = dummyHead.next;
    while (curr) {
      //注意这里是curr 不是curr.next
      arr.push(curr.value);
      curr = curr.next;
    }

    console.log(arr);
  }

  /**
   * ----------------------------------  reverse linked list:  https://www.youtube.com/watch?v=O0By4Zq0OFc&ab_channel=BackToBackSWE ----------------------------------
   */
  reverse() {
    // initial prev, current, next
    let prev = null;
    let current = this.head;
    let next = null;

    this.head = this.tail;
    this.tail = current;

    while (current) {
      next = current.next; // save next
      current.next = prev; // reverse here
      prev = current; // update prev and current
      current = next;
    }

    return prev; //return newest head
  }
}

const test = new SinglyLinkedList();
test.push('ming');
test.push('yue');
test.push('liuu');
console.log(test.reverse());
