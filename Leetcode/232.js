// https://www.bilibili.com/video/BV1nY4y1w7VC/

var MyQueue = function () {
  this.stackIn = [];
  this.stackOut = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stackIn.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  const size = this.stackOut.length;

  if (size) return this.stackOut.pop();

  //把stackIn所有元素都要放到stackOut中
  while (this.stackIn.length) {
    this.stackOut.push(this.stackIn.pop());
  }
  return this.stackOut.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  const x = this.pop();
  this.stackOut.push(x);
  return x;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.stackIn.length && !this.stackOut.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
