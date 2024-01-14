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

/************************* Solution1: Hash table ******************************/
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

/************************* Solution2: Two pointers👍 while循环 (Same to LC26)******************************/
const countUniqueValuesV3 = (arr) => {
  if (arr.length === 0) return 0;

  let slow = 1;
  let fast = 1;

  while (fast < arr.length) {
    //只有当nums[fast]不等于nums[slow - 1]时候，才会swap和slow++
    if (arr[fast] !== arr[slow - 1]) {
      [arr[slow], arr[fast]] = [arr[fast], arr[slow]];
      slow++;
    }

    fast++; // fast是持续++的
  }

  return slow;
};

console.log(countUniqueValuesV3([1, 2, 3, 7, 7, 7, 12, 12, 13, 14, 15]));
