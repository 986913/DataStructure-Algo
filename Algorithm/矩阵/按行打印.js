/*
  给一个矩阵， 按照行的顺序打印出来:
    example1: 
      [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ]
      输出结果为[ 1,2,3,4,5,6,7,8,9 ]
 */

const printByRow = (mx) => {
  const result = [];
  const len = mx.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      result.push(mx[i][j]);
    }
  }

  return result;
};
