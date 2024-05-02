/**
 * @param {number[]} nums
 * @return {number}
 */

var jump = function (nums) {
  let curIndex = 0; // 当前覆盖的最远距离下标
  let nextIndex = 0; //下一步覆盖的最远距离下标
  let steps = 0; // 记录走的最大步数

  // 注意这里是小于nums.size() - 1，这是关键所在
  for (let i = 0; i < nums.length - 1; i++) {
    nextIndex = Math.max(nums[i] + i, nextIndex);
    //如果移动下标达到了当前这一步的最大覆盖最远距离了，还没有到终点的话，那么就必须再走一步来增加覆盖范围，直到覆盖范围覆盖了终点。
    if (i === curIndex) {
      curIndex = nextIndex;
      steps++;
    }
  }

  return steps;
};
