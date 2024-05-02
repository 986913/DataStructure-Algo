/*
  给一个矩阵， 计算外围元素之和:
  
  example1: 
      [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ]
      输出结果为40 = 1+2+3+6+9+8+7+4
  
  example2: 
      [
        [1,2,3,6],
        [4,5,6,5],
        [7,8,9,2]
      ]
      输出结果为47 = 1+2+3+6+5+2+9+8+7+4
 */
const calSum = (mx) => {
  let result = 0;
  let rows = mx.length;
  let cols = mx[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
        sum += mx[i][j];
      }
    }
  }

  return result;
};
