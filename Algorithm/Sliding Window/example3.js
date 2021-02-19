/* 
 write a function called findLongestSubstring
which accepts a string and return the length of the longest substring with all distinct characters


eg:
findLongestSubstring('')                   //0
findLongestSubstring('rtihmschool')        //7
findLongestSubstring('thisisawesome')      //6
findLongestSubstring('bbbbbb')             //1
findLongestSubstring('longestsubstring')   //8
findLongestSubstring('thisishowwedoit')    //6
*/

// brute force: 暴力解法
const hasDup = (str) => {
  const map = new Map();
  for (let char of str) {
    if (map.has(char)) return true;
    else map.set(char, 1);
  }
  return false;
};

const findLongestSubstring = (str) => {
  if (!str) return 0;

  // find all substring combo, save substring as key, and char amount as value
  const subStrCombo = {};
  for (let i = 0; i <= str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      subStrCombo[str.substring(i, j)] = j - i;
    }
  }
  // filter substring without dup
  for (let key in subStrCombo) {
    if (hasDup(key)) delete subStrCombo[key];
  }
  // return the longtest length
  let maxLen = -Infinity;
  for (let key in subStrCombo) {
    if (subStrCombo[key] > maxLen) maxLen = subStrCombo[key];
  }
  return maxLen;
};

console.log(findLongestSubstring("longestsubstring")); //0
