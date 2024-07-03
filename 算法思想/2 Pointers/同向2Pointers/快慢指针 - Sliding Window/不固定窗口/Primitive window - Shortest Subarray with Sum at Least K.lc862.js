/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/*************************** Solution: Mono quque单调队列 + Sliding window *******************************
  单调队列 - 是一个递增或递减的队列，可以用来维护窗口区间的最值，即RMQ问题
  https://www.bilibili.com/video/BV1XS4y1p7qj/?vd_source=8b5297d974f6a5e72c60ec8ea33f2ff6
*/
var shortestSubarray = function (nums, k) {
  // 计算preSum数组
  let preSumArr = new Array(nums.length + 1).fill(0);
  for (let i = 1; i <= nums.length; i++) {
    preSumArr[i] = preSumArr[i - 1] + nums[i - 1];
  }

  // 在前缀和数组上使用sliding window
  let window = [];
  let minLen = Infinity;

  for (let fast = 0; fast < preSumArr.length; fast++) {
    while (window.length && preSumArr[fast] - preSumArr[window[0]] >= k) {
      minLen = Math.min(minLen, fast - window.shift());
    }
    while (
      window.length &&
      preSumArr[fast] <= preSumArr[window[window.length - 1]]
    ) {
      window.pop();
    }
    window.push(fast);
  }

  return minLen === Infinity ? -1 : minLen;
};
