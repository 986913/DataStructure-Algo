/**
 * @param {number[]} arr
 * @return {boolean}
 */

/*
思路： 
  Consider that any valid arithmetic progression will be in sorted order.
  Sort the array, then check if the differences of all consecutive elements are equal.
 */

var canMakeArithmeticProgression = function (arr) {
  const sorted = arr.sort((a, b) => a - b);
  let diff = sorted[1] - sorted[0];

  for (let i = 0; i < sorted.length - 1; i++) {
    if (diff + sorted[i] != sorted[i + 1]) return false;
  }

  return true;
};

console.log(canMakeArithmeticProgression([3, 5, 1])); //true
