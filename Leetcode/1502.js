/**
 * @param {number[]} arr
 * @return {boolean}
 */

var canMakeArithmeticProgression = function (arr) {
  const sorted = arr.sort((a, b) => a - b);
  let diff = sorted[1] - sorted[0];

  for (let i = 0; i < sorted.length - 1; i++) {
    if (diff + sorted[i] != sorted[i + 1]) return false;
  }

  return true;
};


console.log(canMakeArithmeticProgression([3,5,1]))  //true