// https://www.bilibili.com/video/BV1nY4y1w7VC/

// ------------------------------------------------使用2个stack实现queue---------------------------------------------------------------------
var MyQueue = function () {
  this.stackIn = []; // 存储进入队列的元素
  this.stackOut = []; // 存储弹出队列的元素
};

/**
 * @param {number} x
 * @return {void}
 */
// 将元素添加到队列的末尾（在 stackIn 中）
MyQueue.prototype.push = function (x) {
  this.stackIn.push(x);
};

/**
 * @return {number}
 */
// 从队列的开头删除元素（从 stackOut 中弹出）
MyQueue.prototype.pop = function () {
  // stackOut有值时 直接return this.stackOut.pop()
  if (this.stackOut.length) {
    return this.stackOut.pop();
  }

  //stackOut无值时 把stackIn所有元素都要放到stackOut中
  while (this.stackIn.length) {
    this.stackOut.push(this.stackIn.pop());
  }
  // 然后从 stackOut 中弹出元素
  return this.stackOut.pop();
};

/**
 * @return {number}
 */
// 返回队列的开头元素，但不删除它
MyQueue.prototype.peek = function () {
  const x = this.pop(); // 先从队列中弹出元素
  this.stackOut.push(x); // 再将该元素推回队列
  return x; // 返回该元素
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.stackIn.length && !this.stackOut.length;
};

/**
 * @return {number}
 */
// 返回队列中元素的数量
MyQueue.prototype.size = function () {
  return this.stackIn.length + this.stackOut.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
