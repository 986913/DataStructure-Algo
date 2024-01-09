/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*********************  Solution1: Double For-Loop **********************/
var smallerNumbersThanCurrent = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (j !== i && nums[j] < nums[i]) count++;
    }
    result.push(count);
  }

  return result;
};

/*********************  Solution2: Hash-Table **********************/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  let map = new Map();

  /**
    为什么要从后向前遍历？
      为了这种case: 数组1 2 3 4 4 4 ，第一个数值4的下标是3，第二个数值4的下标是4了。
      在构造数组hash的时候< 这样hash里存放的就是相同元素最左面的数值和下标了
 */
  for (let i = sorted.length - 1; i >= 0; i--) {
    map.set(sorted[i], i);
  }

  let result = [];
  for (let n of nums) {
    result.push(map.get(n));
  }

  return result;
};
