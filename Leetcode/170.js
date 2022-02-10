var TwoSum = function (operationArr, valueArr) {
  this.array = [];
};

/**
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {
  this.array.push(number);
};

/**
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function (value) {
  if (this.array.length === 0) return false;

  //two sum
  this.array.sort((a, b) => a - b);
  let low = 0;
  let high = this.array.length - 1;

  while (low < high) {
    let sum = this.array[low] + this.array[high];
    if (sum === value) {
      return true;
      low++;
      high--;
    } else if (sum < value) {
      low++;
    } else {
      high--;
    }
  }

  if (low === high) return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
