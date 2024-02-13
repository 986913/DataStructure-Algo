/*
  ************************** Solution: 类似于L54 螺旋数组变形题 **************************
    解题的核心思路是按照右、下、左、上的顺序遍历数组，
    并使用四个变量圈定未遍历元素的边界, 
    随着螺旋遍历，相应的边界会收缩，直到螺旋遍历完整个数组
 */
/**
 * @param {number} n
 * @return {number[][]}
 */

var generateMatrix = function (n) {
  /* initial result array */
  let twoD_arr = Array(n)
    .fill(0)
    .map((num) => Array(n).fill(0));

  /* initial 4 variable for each border's started position */
  let top = 0; // 0   -> n;
  let bottom = n - 1; // n-1 -> 0;
  let left = 0; // 0   -> n;
  let right = n - 1; // n-1 -> 0

  let curr = 1; //初始值是1奥
  while (curr <= n * n) {
    //forloop topBorder (left -> right) then update topBorder
    if (top <= bottom) {
      for (let i = left; i <= right; i++) {
        twoD_arr[top][i] = curr;
        curr++; // 💡 update curr after assign value each time
      }
      top++;
    }
    //forloop rightBorder (top -> down) then update rightBorder
    if (left <= right) {
      for (let i = top; i <= bottom; i++) {
        twoD_arr[i][right] = curr;
        curr++; // 💡 update curr after assign value each time
      }
      right--;
    }
    //forloop bottomBorder (right -> left) then update bottomBorder
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        twoD_arr[bottom][i] = curr;
        curr++; // 💡 update curr after assign value each time
      }
      bottom--;
    }
    //forloop leftBorder  (down -> top) then update leftBorder
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        twoD_arr[i][left] = curr;
        curr++; // 💡 update curr after assign value each time
      }
      left++;
    }
  }

  return twoD_arr;
};
