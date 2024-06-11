/*********************************** Solution: 使用Queue **********************************************/
/**
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.size = size;
  this.queue = []; //维护定长队列
};
/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  this.queue.push(val);

  // 维护定长队列
  if (this.queue.length > this.size) {
    this.queue.shift();
  }

  const sum = this.queue.reduce((acc, cur) => acc + cur);
  return sum / this.queue.length;
};
