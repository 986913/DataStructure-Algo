/**
  给一个数字N, 要构造出一个二维数组，且这个数组最外层为1，第二层为2，以此类推。

  example1: 
    输入: 3
    输出:
        [
          [1,1,1],
          [1,2,1],
          [1,1,1]
        ]
  example2: 
    输入: 4
    输出:
        [
          [1,1,1,1],
          [1,2,2,1],
          [1,2,2,1],
          [1,1,1,1],
        ]
  example3: 
    输入: 6
    输出:
        [
          [1,1,1,1,1,1],
          [1,2,2,2,2,1],
          [1,2,3,3,2,1],
          [1,2,3,3,2,1],
          [1,2,2,2,2,1],
          [1,1,1,1,1,1],
        ]
 */

/*-----------Solution: 类似于L54 螺旋数组 -------------------- */
const construct2Darray = (N) => {
  let mx = new Array(N).fill(0).map((n) => new Array(N).fill(0));

  let currentVal = 1; // different is here

  let topBorder = 0;
  let leftBorder = 0;
  let bottomBorder = N - 1;
  let rightBorder = N - 1;

  // while condition is different:
  while (currentVal <= N / 2) {
    // 从左到右
    if (leftBorder <= rightBorder) {
      for (let i = leftBorder; i <= rightBorder; i++) {
        mx[topBorder][i] = currentVal;
      }
      topBorder++;
    }
    // 从上到下
    if (topBorder <= bottomBorder) {
      for (let i = topBorder; i <= bottomBorder; i++) {
        mx[i][rightBorder] = currentVal;
      }
      rightBorder--;
    }
    // 从右到左
    if (leftBorder <= rightBorder) {
      for (let i = rightBorder; i >= leftBorder; i--) {
        mx[bottomBorder][i] = currentVal;
      }
      bottomBorder--;
    }
    // 从下到上
    if (topBorder <= bottomBorder) {
      for (let i = bottomBorder; i >= topBorder; i--) {
        mx[i][leftBorder] = currentVal;
      }
      leftBorder++;
    }

    currentVal += 1; // update assigned value
  }

  return mx;
};
