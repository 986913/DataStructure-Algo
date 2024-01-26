/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
/************************** 👍👍👍 2 Pointer: LC809变形题 ************************************/
var isLongPressedName = function (name, typed) {
  let i = 0; //i指针用来遍历name
  let j = 0; //j指针用来遍历typed

  while (i < name.length && j < typed.length) {
    // If characters at current positions are not equal, return false
    if (name[i] !== typed[j]) return false;

    //使用count函数分别计算name和typed中当前i和j位置的字符连续重复次数。
    let countA = count(name, i);
    let countB = count(typed, j);
    // Check conditions for stretchiness, based on counts and requirements
    if (countA > countB) return false;

    // Move the pointers ahead by the counts
    i += countA;
    j += countB;
  }

  // Return true if both pointers reach the end of their respective strings
  return i == name.length && j == typed.length;
};

/* helper function: 从第i个字符算起，分别计算str中的第i个字符出现的连续重复次数
    比如: 
        count('heeellooo', 0) -->  1
        count('heeellooo', 1) -->  3
        count('heeellooo', 2) -->  2
        count('heeellooo', 3) -->  1
        count('heeellooo', 4) -->  2
        count('heeellooo', 5) -->  1
        count('heeellooo', 6) -->  3
 */
function count(str, i) {
  let start = i;

  while (i < str.length) {
    if (str[i] !== str[i + 1]) break; // Break when consecutive characters are not equal
    i++;
  }

  return i - start + 1; // 通过i-start+1算个数
}
