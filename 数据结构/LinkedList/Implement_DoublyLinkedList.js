class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * ---------------------------------- insert a new node to the end （addAtTail）----------------------------------
   */
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

  /**
   * ---------------------------------- insert a new node to the start （addAtHead）----------------------------------
   */
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

  /**
   * ----------------------------------  get the index-th node's value, index based 0 (get)----------------------------------
   */
  get(index) {
    if (index < 0 || index >= this.length) return null;
    return this.getNode(index).value;
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

  /**
   * ----------------------------------  remove the start node (delete the Head Node)----------------------------------
   */
  shift() {
    if (!this.head) return null;

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

  // get a node based on index(index based 0)
  // get(index) {
  //   if (index < 0 || index >= this.length) return null;
  //   if (index <= this.length / 2) {
  //     console.log('working from begin');
  //     let count = 0;
  //     let current = this.head;
  //     while (count !== index) {
  //       current = current.next;
  //       count++;
  //     }
  //     return current;
  //   } else {
  //     console.log('working from end');
  //     let count = this.length - 1;
  //     let current = this.tail;
  //     while (count !== index) {
  //       current = current.prev;
  //       count--;
  //     }
  //     return current;
  //   }
  // }

  /**
   * ----------------------------------  set a node based on index (set the n-th node)----------------------------------
   */
  set(index, val) {
    let foundNode = this.getNode(index);
    if (foundNode != null) {
      foundNode.value = val;
      return true;
    } else {
      return false;
    }
  }

  /**
   * ---------------------------------- insert a new node based before the n-th node, index is 0 based (addAtIndex) ----------------------------------
   */
  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return this.unshift(val);
    else if (index === this.length) return this.push(val);
    else {
      // 获取目标节点的上一个的节点: prevNode,  targetNode是目标节点
      const prevNode = this.getNode(index - 1);
      const targetNode = prevNode.next;

      let newNode = new Node(val, targetNode, prevNode);
      prevNode.next = newNode;
      targetNode.prev = newNode;
    }
    this.length++;
  }

  /**
   * ---------------------------------- remove the n-th node, index is 0 based (deleteAtIndex)  ----------------------------------
   */
  remove(index) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    // 获取目标节点的上一个的节点
    let prevNode = this.getNode(index - 1);
    let targetNode = prevNode.next;

    prevNode.next = prevNode.next.next;
    targetNode.next.prev = prevNode;

    // 处理尾节点
    if (index === this.length - 1) this.tail = prevNode;

    this.length--;
    return targetNode; // return the node which has removed.
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
   * ---------------------------------- reverse Doubly Linked List  ----------------------------------
   */
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
