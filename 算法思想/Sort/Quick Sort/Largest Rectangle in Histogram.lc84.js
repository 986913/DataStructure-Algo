/**
 * @param {number[]} heights
 * @return {number}
 */

/**************************** Solution 1: Brute Force - O(n^3) ******************************************/
var largestRectangleArea = function (heights) {
  let maxArea = -Infinity;

  for (let i = 0; i < heights.length; i++) {
    for (let j = i; j < heights.length; j++) {
      let min_height = Infinity;
      for (let k = i; k <= j; k++) {
        min_height = Math.min(min_height, heights[k]);
      }
      maxArea = Math.max(maxArea, min_height * (j - i + 1));
    }
  }

  return maxArea;
};

/************************ Solution 2: Brute Force 略优化版 - O(n^2) ******************************************/
var largestRectangleArea = function (heights) {
  let maxArea = -Infinity;

  for (let i = 0; i < heights.length; i++) {
    let min_height = Infinity;
    for (let j = i; j < heights.length; j++) {
      min_height = Math.min(min_height, heights[j]);
      maxArea = Math.max(maxArea, min_height * (j - i + 1));
    }
  }

  return maxArea;
};

/************************ Solution 3: Divide and Conquer- O(nlogn) - 类似quickSort ************************/
var largestRectangleArea = function (heights) {
  const calculateArea = (heights, left, right) => {
    if (left > right) return 0;

    let minIdx = left; //<--- pivot index
    for (let i = left; i <= right; i++) {
      if (heights[i] < heights[minIdx]) minIdx = i;
    }

    return Math.max(
      heights[minIdx] * (right - left + 1),
      Math.max(
        calculateArea(heights, left, minIdx - 1),
        calculateArea(heights, minIdx + 1, right)
      )
    );
  };

  return calculateArea(heights, 0, heights.length - 1);
};

/************************************ Solution 4: Mono递增Stack - O(n) - 没看懂过程需要回顾 ***********************************************/
var largestRectangleArea = function (heights) {
  let stack = [-1];
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    while (
      stack[stack.length - 1] !== -1 &&
      heights[stack[stack.length - 1]] >= heights[i]
    ) {
      let curHeight = heights[stack.pop()];
      let curWidth = i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, curHeight * curWidth);
    }
    stack.push(i);
  }

  while (stack[stack.length - 1] != -1) {
    let curHeight = heights[stack.pop()];
    let curWidth = heights.length - stack[stack.length - 1] - 1;
    maxArea = Math.max(maxArea, curHeight * curWidth);
  }

  return maxArea;
};
