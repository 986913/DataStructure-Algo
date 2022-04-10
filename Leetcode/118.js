/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
  let result = [];
  
  if(numRows.length===0) return result;
  
  result.push([1]); //initial the 1st row

  for(let i=1; i<numRows; i++){   // for loop to numRows, and maintain result.
    let row = [];

    row.push(1);     //手动加1                  
    for(let j=1; j<result[i-1].length; j++){ // for loop 上一行
      row.push(result[i-1][j]+result[i-1][j-1]) // 根据上一行和元素index 来计算本行的元素， then update 本行
    }
    row.push(1); //手动加1   

    result.push(row);          
  }
  
  return result;
};