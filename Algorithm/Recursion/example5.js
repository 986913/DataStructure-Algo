/*
write a function called productOfArray, will acceptes a array,
and return the products of them all


eg:  
    productOfArray([1,2,3])  // 6
    productOfArray([1,2,3,10])  // 60
*/

const productOfArray = (arr) => {
  if(arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1))
}

console.log(productOfArray([1,2,3,10]))  // 60