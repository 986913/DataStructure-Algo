/***************************************** Solution : Queue ***************************************************/

var FrontMiddleBackQueue = function () {
  this.queue = [];
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
  this.queue.unshift(val);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  let mid = Math.floor(this.queue.length / 2);
  this.queue.splice(mid, 0, val);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  this.queue.push(val);
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  if (this.queue.length) return this.queue.shift();
  return -1;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
  if (this.queue.length) {
    let mid = Math.floor((this.queue.length - 1) / 2);
    let popedVal = this.queue[mid]; //记得保留住mid idx的val
    this.queue.splice(mid, 1);
    return popedVal;
  }
  return -1;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
  if (this.queue.length) return this.queue.pop();
  return -1;
};
