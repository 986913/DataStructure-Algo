/*
  给一个正方形矩阵， 打印出它的两条对角线:
    example1: 
      [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ]
      输出结果为[ [1,5,9], [3,5,7] ]
    example2: 
      [
        [1,1,1,1],
        [1,1,1,1],
        [1,1,1,1],
        [1,1,1,1],
      ]
      输出结果为[ [1,1,1,1], [1,1,1,1] ]
 */

var getDiagonal = function (mat) {
  let diag1 = [];
  let diag2 = [];
  let len = mat.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      // 一条对角线
      if (i === j) diag1.push(mat[i][j]);
      // 另一个对角线
      if (i + j === len - 1) diag2.push(mat[i][j]);
    }
  }

  return [diag1, diag2];
};
