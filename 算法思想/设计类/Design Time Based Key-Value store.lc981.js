/**********************************Solution 1: Hashmap + Linear Search ****************************************/
var TimeMap = function () {
  this.map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  let obj = { value, timestamp };

  if (!this.map.has(key)) {
    this.map.set(key, []);
  }
  // 直接将新对象推入到现有数组中
  this.map.set(key, [...this.map.get(key), obj]);
};

/**
 * @param {string} key
 * @param {number} timestampInput
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestampInput) {
  let values = this.map.get(key);
  if (!values) return '';

  // 按照时间戳 从大到小排序
  values.sort((a, b) => b.timestamp - a.timestamp);

  let result = '';
  for (let i = 0; i < values.length; i++) {
    const { value, timestamp } = values[i];
    // 如果输入的时间戳大于等于当前对象的时间戳
    if (timestampInput >= timestamp) {
      result = value; // 设置 result 为当前对象的值
      break; //找到符合条件的值后跳出循环
    }
  }

  return result;
};

/**********************************Solution 2: Binary Search ****************************************/
var TimeMap = function () {
  this.map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  let obj = { value, timestamp };

  if (!this.map.has(key)) {
    this.map.set(key, []);
  }
  // 直接将新对象推入到现有数组中
  this.map.set(key, [...this.map.get(key), obj]);
};

/**
 * @param {string} key
 * @param {number} timestampInput
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestampInput) {
  let values = this.map.get(key);
  if (!values) return '';

  // 按照时间戳 从大到小排序
  values.sort((a, b) => b.timestamp - a.timestamp);

  let result = '';
  // Binary search here
  let left = 0;
  let right = values.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    const { value, timestamp } = values[mid];
    if (timestampInput >= timestamp) {
      result = value;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
};
