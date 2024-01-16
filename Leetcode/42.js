/**
 * @param {number[]} height
 * @return {number}
 */
/******************************** Solution 1: DP ********************************************** */
var trap = function (height) {
  const len = height.length;

  // DP to calculate leftMax: 从左到右过一遍
  let leftMax = Array(len).fill(0);
  leftMax[0] = height[0];
  for (let i = 1; i < len; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }
  // console.log(leftMax)

  // DP to calculate rightMax: 从右到左过一遍
  let rightMax = Array(len).fill(0);
  rightMax[len - 1] = height[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }
  // console.log(rightMax)

  //根据leftMax数组和rightMax数组, 计算每一个点的积水量: 找这个点的左右两边的最高点, 取较小的一个, 再减去这个点的高度
  let res = 0;
  for (let i = 0; i < len; i++) {
    res += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return res;
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
