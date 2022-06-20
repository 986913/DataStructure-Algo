class MyCircularQueue {
  constructor(k) {
    this.list = new Array(k);
    this.head = 0;
    this.tail = -1;
    this.size = 0;
  }

  enQueue(val) {
    if (this.isFull()) return false;
    this.tail = (this.tail + 1) % this.list.length;
    this.list[this.tail] = val;
    this.size++;
    return true;
  }

  deQueue() {
    if (this.isEmpty()) return false;
    this.head = (this.head + 1) % this.list.length;
    this.size--;
    return true;
  }

  Front() {
    return this.isEmpty() ? -1 : this.list[this.head];
  }

  Rear() {
    return this.isEmpty() ? -1 : this.list[this.tail];
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.list.length;
  }
}
