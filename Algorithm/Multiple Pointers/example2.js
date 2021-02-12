/*

implement a function called countUniqueValues,
which accepts a sorted array, and counts the unique values in the array.
there can be negative numbers in the array. but it will always be sorted


eg:
countUniqueValues([1,1,1,1,1,2])                    2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])       7
countUniqueValues([])                               0
countUniqueValues([-2,-1,-1,0,1])                   4
*/




/* frequency counter 解法： V1和V2 */
const countUniqueValuesV1 = (arr) => {
  let lookUp = {};
  for (let val of arr) {
    lookUp[val] = (lookUp[val] || 0) + 1;
  }
  return Object.keys(lookUp).length;
};
const countUniqueValuesV2 = (arr) => {
  let obj = new Map();
  for (let val of arr) {
    if (obj.has(val)) obj.set(val, obj.get(val) + 1);
    else obj.set(val, 1);
  }
  return obj.size;
};



/* multiple pointers解法： */
const countUniqueValuesV3 = (arr) => {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    // console.log(i, j);
  }
  return i + 1;
};

console.log(countUniqueValuesV3([1, 2, 3, 7, 7, 7, 12, 12, 13, 14, 15]));
