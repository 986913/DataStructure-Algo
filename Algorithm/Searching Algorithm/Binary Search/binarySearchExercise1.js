
/* Binary search only works on sorted arrays! */


function binarySearch(arr, value){
  
  let left = 0;
  let right = arr.length -1;
  
  while(left <= right){
    let middle= Math.ceil((left+right)/2);
    
      if(arr[middle] < value){
          left = middle +1
      }else if (arr[middle] > value){
          right = middle -1
          
      }else { //arr[middle] === value
          return middle;
      }
    
  }
  
  return -1;
}