/****************************************** Solution 1: ES5 ******************************************************/
/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.history = [homepage || ''];
  this.currIdx = 0;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  //重点: 截断历史记录数组。这样做可以确保只保留当前页面及之前的历史记录，
  if (this.currIdx !== this.history.length - 1) {
    this.history = this.history.slice(0, this.currIdx + 1); // 因为slice(start, end) 截出来的不包括end
  }

  this.history.push(url);
  this.currIdx++;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  this.currIdx = Math.max(0, this.currIdx - steps); // currIdx最小值应该是0
  return this.history[this.currIdx];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  this.currIdx = Math.min(this.history.length - 1, this.currIdx + steps); // currIdx最大值应该是history.length - 1
  return this.history[this.currIdx];
};

/*************************************** Solution 2: ES6 - class ***************************************************/
class BrowserHistory {
  constructor(homepage) {
    this.history = [homepage || ''];
    this.curIdx = 0;
  }

  /**
   * @param {string} url
   * @return {void}
   */
  visit(url) {
    //重点: 截断历史记录数组。这样做可以确保只保留当前页面及之前的历史记录，
    if (this.curIdx !== this.history.length - 1) {
      this.history = this.history.slice(0, this.curIdx + 1);
    }
    this.history.push(url);
    this.curIdx += 1;
  }

  /**
   * @param {number} steps
   * @return {string}
   */
  back(steps) {
    this.curIdx = Math.max(0, this.curIdx - steps);
    return this.history[this.curIdx];
  }

  /**
   * @param {number} steps
   * @return {string}
   */
  forward(steps) {
    this.curIdx = Math.min(this.history.length - 1, this.curIdx + steps);
    return this.history[this.curIdx];
  }
}
