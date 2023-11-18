/*
  给一个矩阵， 按照列的顺序打印出来:
    example1: 
      [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ]
      输出结果为[ 1,4,7,2,5,8,3,6,9 ]
 */

const printByCol = (mx) => {
  const result = [];
  const len = mx.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      result.push(mx[j][i]); // <----- 不同点在这
    }
  }

  return result;
};
