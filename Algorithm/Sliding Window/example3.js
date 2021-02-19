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


// 优化后：

/* 解法一：维护数组
  解题思路： 使用一个数组来维护滑动窗口
  遍历字符串，判断字符是否在滑动窗口数组里  
    不在则 push 进数组
    在则删除滑动窗口数组里相同字符及相同字符前的字符，然后将当前字符 push 进数组
    然后将 max 更新为当前最长子串的长度
    遍历完，返回 max 即可 
*/
const findLongestSubstring = (str) => {
  let arr = [];
  let maxLen = 0;

  for (let char of str) {
    const index = arr.indexOf(char);
    if (index !== -1) {
      // 收缩窗口
      arr.splice(0, index + 1);
    }
    // 加大窗口
    arr.push(char);
    maxLen = Math.max(maxLen, arr.length);
  }
  return maxLen;
};

console.log(findLongestSubstring("longestsubstring")); //8