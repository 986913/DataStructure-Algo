/**
 * @param {number[]} arr
 * @return {number[]}
 */

 var replaceElements = function(arr) {
  if(arr.length===1) return [-1];
  
  for(let i=0; i<arr.length-1; i++){
      arr[i]=Math.max.apply(Math, arr.slice(i+1))
      if(i+1===arr.length-1) arr[i+1]=-1  
  }
  
  return arr
};