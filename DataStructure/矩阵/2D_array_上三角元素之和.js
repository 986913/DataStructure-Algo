/*
  给一个矩阵， 计算上三角元素之和:
  
  example1: 
      [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ]
      输出结果为22 = 1+2+3+4+5+7
  
  example2: 
      [
        [1,3,6],
        [4,5,5],
        [7,9,2]
      ]
      输出结果为26 = 1+3+6+4+5+7
 */

const calSum = (mx) => {
  let result = 0;
  let len = mx.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      /* 矩阵有两条对角线：
          1.  i===j
          2.  i+j===len-1
        这道题以i+j===len-1对角线为准 看上三角 
      */
      if (i + j <= len - 1) {
        result += mx[i][j];
      }
    }
  }

  return result;
};
