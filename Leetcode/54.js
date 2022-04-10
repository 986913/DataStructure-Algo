/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];

  let matrixRow = matrix.length;   //3
  let matrixColumn = matrix[0].length;  //4

  if (matrixRow === 1 || matrixColumn === 1) return drawBorder(matrix)

  let result = [];
  while (result.length !== matrixRow * matrixColumn) {
    // draw border
    const borders = drawBorder(matrix);
    // update result;
    result = result.concat(borders);
    // then delete border -> create a new matrix
    matrix = removeNullInsideMatrix(matrix);
  }
  return result;
};

const removeNullInsideMatrix = (matrix) => {
  return matrix.filter((row) => {
    row.forEach((n, idx) => { if (!n) row.splice(idx, 1) });
    return row.some((column) => column)
  })
}

const drawBorder = matrix => {
  const borders = [];
  let row = 0, column = 0;
  let matrixRow = matrix.length;
  let matrixColumn = matrix[0].length;

  let indexRecord = [];

  for (let i = 0; i < matrixColumn * matrixRow; i++) {

    indexRecord.push(`${row}-${column}`);   // indexRecord is for memorize row and column history.
    if (borders.indexOf(`${row}-${column}`) !== -1) break;  //terminate 


    if (matrix[row][column] !== null) {
      borders.push(matrix[row][column]);
    }
    matrix[row][column] = null;

    if (row == 0) { // go right
      if (column === matrixColumn - 1) {   //处理越界
        row++;
      }
      else column++;
    } else if (column === matrixColumn - 1) {  // go down
      if (row === matrixRow - 1) {
        column--;
      }
      else row++;
    } else if (row === matrixRow - 1) {  // go left
      if (column === 0) {
        row--;
      }
      else column--;
    } else {                       // go up
      if (row === 0) {
        column++;
      }
      row--;
    }
  }
  return borders;
}