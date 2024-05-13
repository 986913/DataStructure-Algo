/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/************************************* Solution 1: Hashtable *********************************************/
var groupAnagrams = function (strs) {
  // key是sorted letters,  value是其anagram的集合
  let map = new Map();

  for (let letter of strs) {
    const sortedLetter = letter.split('').sort().join('');

    if (!map.has(sortedLetter)) {
      map.set(sortedLetter, [letter]);
    } else {
      map.set(sortedLetter, [...map.get(sortedLetter), letter]);
    }
  }

  let res = [];
  map.forEach((val, key) => res.push(val));
  return res;
};
