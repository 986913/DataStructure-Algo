/*********************************** Solution 1: 使用Queue **********************************************/
var RecentCounter = function () {
  this.queue = [];
};
/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t);

  // t 是递增的，所以可以从队头删除 3000 毫秒之前的请求
  while (t - this.queue[0] > 3000) {
    this.queue.shift();
  }

  return this.queue.length;
};

/*********************************** Solution 2: 使用Queue + Binary search **********************************************/
var RecentCounter = function () {
  this.queue = [];
};
/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t);

  let left = 0;
  let right = this.queue.length;
  // t 是递增的，所以可以从队头删除 3000 毫秒之前的请求
  let target = t - 3000;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (this.queue[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return this.queue.length - left;
};
