/**
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.queue = [];
  this.size = size;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  this.queue.push(val);
  if (this.queue.length > this.size) this.queue.shift();
  return sum(this.queue) / this.queue.length;
};

const sum = (arr) => arr.reduce((cur, acc) => cur + acc);
