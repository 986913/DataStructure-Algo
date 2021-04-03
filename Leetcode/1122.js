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
        arr1[j] = "str";
      }
    }
  }
  const dontAppear = arr1
    .filter((item) => typeof item === "number")
    .sort((a, b) => a - b);

  return results.concat(dontAppear);
};

console.log(relativeSortArray([28,6,22,8,44,17],[22,28,8,6])) //[22,28,8,6,17,44]



