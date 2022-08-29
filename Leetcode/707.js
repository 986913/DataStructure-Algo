var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

MyLinkedList.prototype.createNode = function (val) {
  return {
    val,
    next: null,
  };
};

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index > this.length - 1) return -1;
  if (index === 0) return this.head.val;

  let count = 0;
  let current = this.head;

  while (count !== index) {
    current = current.next;
    count++;
  }

  return current.val;
};

MyLinkedList.prototype.addAtHead = function (val) {
  const node = this.createNode(val);

  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    node.next = this.head;
    this.head = node;
  }

  this.length++;
};

MyLinkedList.prototype.addAtTail = function (val) {
  const node = this.createNode(val);

  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
  this.length++;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  // index is 0 based
  if (index < 0 || index > this.length) return;

  if (index === 0) {
    this.addAtHead(val);
    return;
  }
  if (index === this.length) {
    this.addAtTail(val);
    return;
  }

  const node = this.createNode(val);

  let current = this.head;
  let previous = null;

  for (let i = 0; i < index; i++) {
    previous = current;
    current = current.next;
  }

  node.next = current;
  previous.next = node;

  this.length++;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index > this.length - 1) return;

  if (index === 0) {
    this.head = this.head.next;
    this.length -= 1;
    return;
  }

  let current = this.head;
  let previous = null;

  for (let i = 0; i < index; i++) {
    previous = current;
    current = current.next;
  }

  previous.next = current.next;

  if (previous.next === null) {
    this.tail = previous;
  }

  this.length--;
};
