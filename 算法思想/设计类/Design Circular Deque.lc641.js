/************* Solution: 实现 Circular Array Technique / 实现 Circular Double-Ended Queue / 实现 Ring Buffer（Double-end queue 版本） ***************/

/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.queue = new Array(k);
  this.size = k;
  this.count = 0; // 当前元素个数

  this.frontIdx = 0; // 指向当前队头
  this.rearIdx = k - 1; // 指向当前队尾
};

/**
 * 尾部插入
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) return false;

  // 核心：rearIdx 向右移动，% 保证形成环
  this.rearIdx = (this.rearIdx + 1) % this.size;
  this.queue[this.rearIdx] = value;
  this.count++;
  return true;
};

/**
 * 删除尾部
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) return false;

  // 核心：rearIdx 向左移动
  this.rearIdx = (this.rearIdx - 1 + this.size) % this.size;
  this.count--;
  return true;
};

/**
 * 头部插入
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false;

  // 核心：frontIdx 向左移动
  this.frontIdx = (this.frontIdx - 1 + this.size) % this.size;
  this.queue[this.frontIdx] = value;
  this.count++;
  return true;
};

/**
 * 删除头部
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) return false;

  // 核心：frontIdx 向右移动
  this.frontIdx = (this.frontIdx + 1) % this.size;
  this.count--;
  return true;
};

MyCircularDeque.prototype.getFront = function () {
  return this.isEmpty() ? -1 : this.queue[this.frontIdx];
};

MyCircularDeque.prototype.getRear = function () {
  return this.isEmpty() ? -1 : this.queue[this.rearIdx];
};

MyCircularDeque.prototype.isEmpty = function () {
  return this.count === 0;
};

MyCircularDeque.prototype.isFull = function () {
  return this.count === this.size;
};
