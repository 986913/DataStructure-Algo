/*************** Solution : 实现 Cicular Array Technique / 实现 Cicular Queues/ 实现Ring Buffer *********************/

/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.queue = Array.from({ length: k }, () => undefined);
  this.size = k;
  this.count = 0; // 当前元素个数

  this.frontIdx = 0; // 指向当前队头
  this.rearIdx = k - 1; // 指向当前队尾
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false;

  // 先移动 rearIdx, (核心：通过 % 运算形成环)
  this.rearIdx = (this.rearIdx + 1) % this.size;
  // 后更新
  this.queue[this.rearIdx] = value;
  this.count++;
  return true;
};

/**
 * 出队：移动头指针
 * @return {boolean}
 * deQueue操作通过更新frontIdx指针而不是实际删除数组中的元素来实现
 *  实际上，数组中的元素并没有被物理删除，只是通过更新frontIdx指针来“忽略”已经出队的元素。
 *  这种方法有助于提高操作的效率，因为物理删除元素会涉及到数组的重排，而更新指针则是常数O(1)时间操作
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false;

  // 删除 frontIdx, (核心：通过 % 运算形成环)
  this.frontIdx = (this.frontIdx + 1) % this.size;
  this.count--;
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.frontIdx = function () {
  return this.isEmpty() ? -1 : this.queue[this.frontIdx];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.rearIdx = function () {
  return this.isEmpty() ? -1 : this.queue[this.rearIdx];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.count === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.count === this.size;
};
