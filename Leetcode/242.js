/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Solution1：  
var isAnagram = function(s, t) {
  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');
  return sortedS===sortedT
};
