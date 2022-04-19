/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
  let allRows = [[1]];
  
  if(rowIndex===0) return allRows;

  for(let i=1; i<=rowIndex; i++){
    let row = [];
    row.push(1);
    for(let j=1; j<allRows[i-1].length; j++){
        row.push(allRows[i-1][j]+allRows[i-1][j-1])
    }
    row.push(1);
    allRows.push(row);
  }
  
  return allRows[rowIndex];
  
};
