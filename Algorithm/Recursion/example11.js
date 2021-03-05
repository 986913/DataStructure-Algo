function flatten(arr){
  let result = [];
  
 for(let i=0; i<arr.length; i++){
  if(Array.isArray(arr[i])){
      result = result.concat(flatten(arr[i]))
  }else{
      result.push(arr[i])
  }
 }
 
  return result;
}


// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3