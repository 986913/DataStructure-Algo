// https://www.bilibili.com/video/BV1nY4y1w7VC/

/* ------------------------------------------- 使用2个stack实现queue--------------------------------------- */
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
  //case 1: stackOut中有值时 直接return this.stackOut.pop()
  if (this.stackOut.length) {
    return this.stackOut.pop();
  }

  //case 2: stackOut中无值时 把stackIn所有元素都要放到stackOut中
  while (this.stackIn.length) {
    this.stackOut.push(this.stackIn.pop());
  }
  //然后从 stackOut 中弹出元素
  return this.stackOut.pop();
};

/**
 * @return {number}
 */
// 返回队列的开头元素，但不删除它
MyQueue.prototype.peek = function () {
  //case 1: stackOut中有值时 返回stackOut中最后一项
  if (this.stackOut.length) return this.stackOut[this.stackOut.length - 1];

  //case 2: stackOut中无值时 返回stackIn的第一项
  return this.stackIn[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stackOut.length === 0 && this.stackIn.length === 0;
};

/**
 * @return {number}
 */
// 返回队列中元素的数量
MyQueue.prototype.size = function () {
  return this.stackIn.length + this.stackOut.length;
};
