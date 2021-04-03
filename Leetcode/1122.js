/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

//解法一： force brute...
var relativeSortArray = function (arr1, arr2) {
  let results = [];

  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        results.push(arr1[j]);
      }
    }
  }
  const difference = arr1.filter(item=>!results.includes(item)).sort((a,b)=>a-b);

  return results.concat(difference);
};
console.log(relativeSortArray([28,6,22,8,44,17],[22,28,8,6])) //[22,28,8,6,17,44]

/* 解法2： 桶排序*/
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
 var relativeSortArray = function(arr1, arr2) {
  let arr = new Int8Array(1001);
  let result = [];
  
  for(let i=0; i<arr1.length; i++){
    arr[arr1[i]]++
  }

  for(let num of arr2){
    while(arr[num]!==0){
      result.push(num);
      arr[num]--;
    }
  }

  for(let i=0; i<arr.length; i++){
    while(arr[i]!==0){
      result.push(i);
      arr[i]--
    }
  }
  
  return result
};
console.log(relativeSortArray([28,6,22,8,44,17],[22,28,8,6])) //[22,28,8,6,17,44]


