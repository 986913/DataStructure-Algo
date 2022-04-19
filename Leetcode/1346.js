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


/**
 *  Binary search 方法
 */
 var checkIfExist = function(arr) {
  let left = 0;
  let right = arr.length-1;
  arr.sort((a,b)=>a-b)
    
 for(let i=0; i<arr.length; i++){
         let result = binarySearch(arr, arr[i]*2);
         if(result!=-1 && result != i) return true
 }
    
  return false;
};

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length -1;
    
    while(left<=right){
     let mid = Math.floor((left+right)/2);
          if(arr[mid]===target){
              return mid
          }else if(target<arr[mid]){
                right=mid-1
          }else{
                left=mid+1 
          }
   }
  return -1
}