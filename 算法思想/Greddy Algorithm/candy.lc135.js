/**
 * @param {number[]} ratings
 * @return {number}
 */

var candy = function (ratings) {
  let candys = new Array(ratings.length).fill(1);

  //一次是从左到右遍历，只比较右边孩子评分比左边大的情况。
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candys[i] = candys[i - 1] + 1;
    }
  }

  //一次是从右到左遍历，只比较左边孩子评分比右边大的情况。
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candys[i] = Math.max(candys[i], candys[i + 1] + 1);
    }
  }

  let count = candys.reduce((a, b) => a + b);
  return count;
};
