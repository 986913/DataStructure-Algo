/**
 * Initialize your data structure here.
 * 单链表 储存头尾节点 和 节点数量
 */
var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

var ListNode = function (val, next) {
  this.value = val;
  this.next = next;
};
/* Es6 写法：
class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
} */

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index >= this.length) return -1;

  /* 创建虚拟头节点 类似于：
      let dummyHead = new ListNode(-1);
      dummyHead.next = this.head;
      let curr = dummyHead;
   */
  let curr = new ListNode(-1, this.head); // 创建虚拟头节点
  while (index >= 0) {
    curr = curr.next;
    index--;
  }

  return curr;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.length) return -1;
  return this.getNode(index).value;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new ListNode(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }

  this.length++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new ListNode(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }

  this.length++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.length) return;
  if (index === 0) {
    this.addAtHead(val);
    return;
  }
  if (index === this.length) {
    this.addAtTail(val);
    return;
  }

  // 获取目标节点的上一个的节点
  const node = this.getNode(index - 1);
  node.next = new ListNode(val, node.next);

  this.length++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index > this.length - 1) return;
  if (index === 0) {
    this.head = this.head.next;
    this.length -= 1;
    return;
  }

  // 获取目标节点的上一个的节点
  const node = this.getNode(index - 1);
  node.next = node.next.next;

  // 处理尾节点
  if (index === this.length - 1) this.tail = node;

  this.length--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
