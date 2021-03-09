
/* bubble sort's dummy version: */
/*
function sort(arr){
  for(let i=0; i<arr.length; i++){ 
    for(let j=0; j<arr.length; j++){
      if(arr[j] > arr[j+1]){ 
        // swap :
        let tmp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}
*/


/* bubble sort's effient version: 注意循环条件*/
function sort(arr){
  for(let i = arr.length; i > 0; i--){ 
    for(let j = 0; j < i-1; j++){
      if(arr[j] > arr[j+1]){ 
        // swap :
        let tmp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}



sort([100,23,6,0,99,45])  // [0,6,23,45,99, 100]
23 6 0 99 45 100
