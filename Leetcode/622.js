/***************************************** Solution : Queues ***************************************************/

/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.queue = new Array(k); // <--- 注意数组定长, 后续不能通过push无线扩容数组
  this.currSize = 0;

  // 依靠frontIdx, rearIdx来定位
  this.frontIdx = 0;
  this.rearIdx = -1;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false;

  this.rearIdx = (this.rearIdx + 1) % this.queue.length; // % 保证了当指针到达数组末端时，会回到数组的起始位置，从而实现了循环。
  this.queue[this.rearIdx] = value;
  this.currSize++;
  return true;
};

/**
 * @return {boolean}
 * deQueue操作通过更新frontIdx指针而不是实际删除数组中的元素来实现。
 *  实际上，数组中的元素并没有被物理删除，只是通过更新frontIdx指针来“忽略”已经出队的元素。
 *  这种方法有助于提高操作的效率，因为物理删除元素会涉及到数组的重排，而更新指针则是常数时间操作
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false;

  this.frontIdx = (this.frontIdx + 1) % this.queue.length; // % 保证了当指针到达数组末端时，会回到数组的起始位置，从而实现了循环。
  this.currSize--;
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.isEmpty() ? -1 : this.queue[this.frontIdx];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  return this.isEmpty() ? -1 : this.queue[this.rearIdx];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.currSize === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.currSize === this.queue.length;
};
