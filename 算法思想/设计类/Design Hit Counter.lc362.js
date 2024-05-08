/*********************************** Solution 1: 使用Queue **********************************************/
var HitCounter = function () {
  this.queue = []; // queue中存储timestamp
};
/**
 * @param {number} timestamp
 * @return {void}
 * O(1)
 */
HitCounter.prototype.hit = function (timestamp) {
  this.queue.push(timestamp);
};
/**
 * @param {number} timestamp
 * @return {number}
 * O(N)
 */
HitCounter.prototype.getHits = function (timestamp) {
  /* 因为题目要求valid range是[timestamp-300, timestamp]， 所以queue中就要挪出过期的timestamp： */
  while (this.queue.length && timestamp - this.queue[0] >= 300) {
    this.queue.shift();
  }
  //因为queue中存储没过期的timestamp,所以直接return queue的长度就好
  return this.queue.length;
};

/************************** Solution 2: 优化版 - 使用Queue + Binary Search **********************************/
var HitCounter = function () {
  this.queue = [];
};
/**
 * @param {number} timestamp
 * @return {void}
 * O(1)
 */
HitCounter.prototype.hit = function (timestamp) {
  this.queue.push(timestamp);
};
/**
 * @param {number} timestamp
 * @return {number}
 * O(log N) <s---- improve here!
 */
HitCounter.prototype.getHits = function (timestamp) {
  let left = 0;
  let right = this.queue.length - 1;

  let target = timestamp - 300; //valid range: [timestamp-300, timestamp]， 在queue中找target的位置

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (this.queue[mid] <= target) {
      //过期的timestamp
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return this.queue.length - left; // 不维持queue，但是使用二分法找到target位置，然后做减法运算就好
};
