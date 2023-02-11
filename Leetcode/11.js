/**
 * @param {number[]} height
 * @return {number}
 */
/* ----------- Solution1: force brute ---------------------- */
var maxArea = function (height) {
  let maxArea = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let shortHeight = Math.min(height[i], height[j]);
      maxArea = Math.max(maxArea, (j - i) * shortHeight);
    }
  }
  return maxArea;
};

/* ----------- Solution2: 👍 two pointer ---------------------- */
var maxArea = function (height) {
  let maxArea = 0;

  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let shortHeight = Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, (right - left) * shortHeight);

    //重点在这：什么时候移动left和right:
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};
