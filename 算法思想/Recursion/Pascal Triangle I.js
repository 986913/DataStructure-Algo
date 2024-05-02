/**
 * @param {number} numRows
 * @return {number[][]}
 */

/*************************** Solution 1: 迭代法 **************************************/
var generate = function (numRows) {
  if (numRows === 0) return [];

  let result = [[1]]; //initial the 1st row

  for (let i = 1; i < numRows; i++) {
    // for loop to numRows, and maintain result.
    let row = [];

    row.push(1); //手动加1
    for (let j = 1; j < result[i - 1].length; j++) {
      // for loop 上一行
      row.push(result[i - 1][j] + result[i - 1][j - 1]); // 根据上一行和元素index 来计算本行的元素， then update 本行
    }
    row.push(1); //手动加1
    result.push(row);
  }

  return result;
};
/*************************** Solution 2: Recursion 分解思想 **************************************/
var generate = function (numRows) {
  let result = [];
  const helper = (rowIndex) => {
    let curRow = [1];
    if (rowIndex === 1) {
      result.push(curRow);
      return curRow;
    }

    let preRow = helper(rowIndex - 1);
    for (let i = 1; i < preRow.length; i++) {
      curRow.push(preRow[i - 1] + preRow[i]); // 当前行每个元素 = 上一行的两个相邻元素之和
    }
    curRow.push(1); //每一行结尾是1
    result.push(curRow);
    return curRow;
  };

  helper(numRows);
  return result;
};
