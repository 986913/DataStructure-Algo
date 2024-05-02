/*
  use other way(pure recursion) to address this issue:   helperMethodRecursion.js

  pure recursion tips:
    1. For arrays, use method like slice, the spread operator, and concat that make copies of arrays so you don't mutate them
    2. For strings, as they are immutable, so you'll need to use methods like slice, substr, substring to make copies of strings
    3. For objects, use Object.assign, or te spread operator to make copies of objects
*/

const collectOddValues = (arr) => {
  let result = [];

  if (arr.length === 0) return result;

  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }
  result = result.concat(collectOddValues(arr.slice(1)));

  return result;
};

console.log(collectOddValues([1, 2, 3, 4, 5])); //[1,3,5]
