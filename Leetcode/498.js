/**
 * @param {number[][]} mat
 * @return {number[]}
 */

/* 
  go top-right:  each item's row + column is even 偶数 -> pattern is: row-1, column+1
  go down-left:  each item's row + column is odd  奇数 -> pattern is: row+1, column-1
*/

var findDiagonalOrder = function(mat) {
  if(mat.length ===0 ) return [];
   
  const matricRow = mat.length;
  const matricColumn = mat[0].length;
  
  let row = 0, column = 0;
  let result =[];

  for(let i=0; i<matricRow*matricColumn; i++){
     result[i]=mat[row][column];
      
     if((row+column)%2===0){  // go top-right
       if(column === matricColumn-1 ) row++;  //处理越界
       else if(row === 0) column++;           //处理越界
       else {row--; column++;}
     }else{                  // go down-left
       if(row === matricRow-1 ) column++;     //处理越界
       else if (column === 0) row++;          //处理越界
       else {row++; column--;}
     }
      
  }
  
 return result    
};