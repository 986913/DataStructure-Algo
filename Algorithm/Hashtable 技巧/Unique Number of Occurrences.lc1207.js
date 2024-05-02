/**
 * @param {number[]} arr
 * @return {boolean}
 */

/***************************Solution1: Hash Table ************************************/
var uniqueOccurrences = function (arr) {
  let map = new Map();
  arr.forEach((n) => map.set(n, map.get(n) + 1 || 1));

  let occurrences = [];
  for (let [key, val] of map) {
    if (occurrences.includes(val)) return false;
    occurrences.push(val);
  }
  return true;
};
