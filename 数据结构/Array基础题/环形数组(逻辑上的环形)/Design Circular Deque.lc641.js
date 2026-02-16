/***************************************** Solution : Queue  LC622变形题 ***************************************************/
/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.queue = new Array(k);
  this.currSize = 0;
  this.frontIdx = 0;
  this.rearIdx = k - 1;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false;

  this.frontIdx = (this.frontIdx - 1 + this.queue.length) % this.queue.length; // diff is here
  this.queue[this.frontIdx] = value;
  this.currSize++;
  return true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) return false;

  this.rearIdx = (this.rearIdx + 1) % this.queue.length; // diff is here
  this.queue[this.rearIdx] = value;
  this.currSize++;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) return false;

  this.frontIdx = (this.frontIdx + 1) % this.queue.length; // diff is here
  this.currSize--;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) return false;

  this.rearIdx = (this.rearIdx - 1 + this.queue.length) % this.queue.length; // diff is here
  this.currSize--;
  return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  return this.isEmpty() ? -1 : this.queue[this.frontIdx];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  return this.isEmpty() ? -1 : this.queue[this.rearIdx];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.currSize === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.currSize === this.queue.length;
};
