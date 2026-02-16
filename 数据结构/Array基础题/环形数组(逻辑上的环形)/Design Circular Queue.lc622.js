/**************************** Solution : Cicular Array Technique / Queues ***********************************/

/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.queue = Array.from({ length: k }, () => undefined);
  this.size = k;
  this.count = 0; // 当前有效元素个数

  this.startIdx = 0; // 指向队头元素
  this.endIdx = -1; // 指向队尾元素
};

/**
 * 入队：移动尾指针
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false;

  // 核心：通过 % 运算形成环
  this.endIdx = (this.endIdx + 1) % this.size; // % 保证了当指针到达数组末端时，会回到数组的起始位置，从而实现了循环。
  this.queue[this.endIdx] = value;
  this.count++;
  return true;
};

/**
 * 出队：移动头指针
 * @return {boolean}
 * deQueue操作通过更新startIdx指针而不是实际删除数组中的元素来实现
 *  实际上，数组中的元素并没有被物理删除，只是通过更新startIdx指针来“忽略”已经出队的元素。
 *  这种方法有助于提高操作的效率，因为物理删除元素会涉及到数组的重排，而更新指针则是常数O(1)时间操作
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false;

  // 注意：数组元素不删除！，只移动逻辑窗口
  this.startIdx = (this.startIdx + 1) % this.size; // % 保证了当指针到达数组末端时，会回到数组的起始位置，从而实现了循环。
  this.count--;
  return true;
};

MyCircularQueue.prototype.Front = function () {
  return this.isEmpty() ? -1 : this.queue[this.startIdx];
};

MyCircularQueue.prototype.Rear = function () {
  return this.isEmpty() ? -1 : this.queue[this.endIdx];
};

MyCircularQueue.prototype.isEmpty = function () {
  return this.count === 0;
};

MyCircularQueue.prototype.isFull = function () {
  return this.count === this.size;
};
