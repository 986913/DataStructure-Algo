/**
 * @param {number} rowIndex
 * @return {number[]}
 */
/*************************** Solution 1: 迭代法 **************************************/
var getRow = function (rowIndex) {
  let allRows = [[1]];

  if (rowIndex === 0) return allRows;

  for (let i = 1; i <= rowIndex; i++) {
    let row = [];
    row.push(1);
    for (let j = 1; j < allRows[i - 1].length; j++) {
      row.push(allRows[i - 1][j] + allRows[i - 1][j - 1]);
    }
    row.push(1);
    allRows.push(row);
  }

  return allRows[rowIndex];
};

/*************************** Solution 2: Recursion 分解思想 **************************************/
var getRow = function (rowIndex) {
  let curRow = [1]; //每一行开头是1
  if (rowIndex === 0) return curRow; //base case

  let preRow = getRow(rowIndex - 1); //递归算出上一行
  for (let i = 1; i < preRow.length; i++) {
    curRow.push(preRow[i - 1] + preRow[i]); // 当前行每个元素 = 上一行的两个相邻元素之和
  }
  curRow.push(1); //每一行结尾是1
  return curRow;
};
