/**
 * @param {number[]} arr
 * @return {boolean}
 */

// double for loop 迭代
 var checkIfExist = function(arr) {
  for(let i=0; i<arr.length; i++){   
      for(let j=i+1; j<arr.length; j++){
          if(arr[i]=== arr[j]*2 || 
             arr[i] === arr[j]/2) {
              return true
          }
      } 
  }
  return false;
};