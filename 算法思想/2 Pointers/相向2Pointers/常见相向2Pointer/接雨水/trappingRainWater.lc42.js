/**
 * @param {number[]} height
 * @return {number}
 */
/******************************** Solution 1: DP ********************************************** */
var trap = function (height) {
  let leftMax = new Array(height);
  let rightMax = new Array(height);

  //初始化leftMax,rightMax数组
  leftMax[0] = height[0];
  rightMax[height.length - 1] = height[height.length - 1];

  // DP to calculate leftMax: 从左到右过一遍
  for (let i = 1; i < height.length; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }
  // DP to calculate rightMax: 从右到左过一遍
  for (let j = height.length - 2; j >= 0; j--) {
    rightMax[j] = Math.max(rightMax[j + 1], height[j]);
  }

  /*根据leftMax数组和rightMax数组, 计算每一个点的积水量: 找这个点的左右两边的最高点, 取较小的一个, 再减去这个点的高度*/
  let area = 0;
  for (let i = 0; i < leftMax.length; i++) {
    area += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return area;
};

/******************************** Solution 2: Two pointer ********************************************** */
var trap = function (height) {
  // leftMax 和 rightMax 都是单调的
  let leftMax = 0;
  let rightMax = 0;
  let result = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      result += leftMax - height[left];

      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      result += rightMax - height[right];

      right--;
    }
  }

  return result;
};

// https://leetcode.cn/problems/trapping-rain-water/solutions/692342/jie-yu-shui-by-leetcode-solution-tuvc/
