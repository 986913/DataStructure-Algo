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
function generateMatrix(n: number): number[][] {
  let matrix = Array.from({ length: n }, () => {
    return Array.from({ length: n }, () => 0);
  });

  // fill up matrix
  let cur = 1;

  // 【核心不变量 (Invariant) / logic contract】
  // 在任何时刻，[top, bottom] 和 [left, right] 共同圈定的矩形区域，
  // 必须严格代表“绝对存在且尚未被填入数字的内部 Cell 集合”。
  // 只要 top <= bottom 且 left <= right 成立，这层契约就有效，内部就必定有等待被赋值的空位。
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;

  while (top <= bottom && left <= right) {
    // 走一圈，依次填入递增的 cur

    // 上：left -> right
    for (let j = left; j <= right; j++) {
      matrix[top][j] = cur;
      cur++;
    }
    top++;

    // 右：top -> bottom
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = cur;
      cur++;
    }
    right--;

    // 下：right -> left
    // 【捍卫契约】：前面的 top++ 可能已经彻底摧毁了上下边界的契约
    // （防范向中心收缩到最后一行时，发生逆向越界覆盖）
    if (top <= bottom) {
      for (let j = right; j >= left; j--) {
        matrix[bottom][j] = cur;
        cur++;
      }
      bottom--;
    }

    // 左：bottom --> top
    // 【捍卫契约】：前面的 right-- 可能已经彻底摧毁了左右边界的契约
    // （防范向中心收缩到最后一列时，发生逆向越界覆盖）
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = cur;
        cur++;
      }
      left++;
    }
  }

  return matrix;
}
