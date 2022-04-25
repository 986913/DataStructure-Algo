/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
  return nums.map(n=>Math.pow(n,2)).sort((a,b)=>a-b)
};


/* 2 pointers */
var sortedSquares = function(arr) {
  let len = arr.length;
 let squares = Array(len).fill(0);
 let highestSquareIdx = len-1;
 let left =0; let right = len-1;

 while(left<=right){
   let leftSquare = Math.pow(arr[left],2);
   let rightSquare = Math.pow(arr[right],2);

   if(leftSquare>rightSquare){
     squares[highestSquareIdx] = leftSquare;
     left++
   }else{
     squares[highestSquareIdx] = rightSquare;
     right--
   }

   highestSquareIdx--

 }