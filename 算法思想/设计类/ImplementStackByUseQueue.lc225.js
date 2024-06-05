// ----------------------------------------------推荐！： 使用1个queue实现stack---------------------------------------------------------------------
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.queue = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let size = this.queue.length; // 这个size是相当于this.queue.length的定格

  // 之所以while(size>1) 是因为要保留queue最后一个元素 将来要成为第一个元素 （要被弹出去）
  while (size > 1) {
    this.queue.push(this.queue.shift()); //把queue的最前面元素放到queue最后头
    size--; //基于之前定格的length--
  }

  return this.queue.shift(); // 最后再把queue中第一个元素弹出去
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  const x = this.pop();
  this.queue.push(x);
  return x;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.length === 0;
};
