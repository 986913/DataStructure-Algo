/********************************* Solution : Stack ***************************************************/
class MyCircularQueue {
  constructor(k) {
    this.queue = new Array(k);
    this.headIdx = 0;
    this.tailIdx = -1;
    this.size = 0;
  }

  enQueue(val) {
    if (this.isFull()) return false;

    this.tailIdx = (this.tailIdx + 1) % this.queue.length;
    this.queue[this.tailIdx] = val;
    this.size++;
    return true;
  }

  deQueue() {
    if (this.isEmpty()) return false;

    this.headIdx = (this.headIdx + 1) % this.queue.length;
    this.size--;
    return true;
  }

  Front() {
    return this.isEmpty() ? -1 : this.queue[this.headIdx];
  }

  Rear() {
    return this.isEmpty() ? -1 : this.queue[this.tailIdx];
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.queue.length;
  }
}
