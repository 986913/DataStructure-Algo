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

/* ----------- Solution2: 👍 two pointer : 相向双指针 ---------------------- */
var maxArea = function (height) {
  let max = -Infinity;

  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let leftHeight = height[left];
    let rightHeight = height[right];

    max = Math.max(max, (right - left) * Math.min(leftHeight, rightHeight));
    //重点在这：什么时候移动left和right (Always move the pointer that points to the lower line.)
    if (leftHeight < rightHeight) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};
