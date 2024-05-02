var diagonalSum = function (mat) {
  let sum = 0;
  let len = mat.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      // i===j 和 i+j===len-1 是对应的2条对角线：
      if (i === j || i + j === len - 1) sum += mat[i][j];
    }
  }
  return sum;
};
