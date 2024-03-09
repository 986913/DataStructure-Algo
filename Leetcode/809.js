/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
/************************** 👍👍👍 2 Pointer: LC925 变形题 ************************************/
const expressiveWords = (S, words) => {
  let ans = 0;
  words.forEach((word) => {
    if (isStretchy(word, S)) ans++;
  });
  return ans;
};

// helper function1:
function isStretchy(word, S) {
  let i = 0; //i指针用来遍历word
  let j = 0; //j指针用来遍历S

  while (i < word.length && j < S.length) {
    // If characters at current positions are not equal, return false
    if (word[i] !== S[j]) return false;

    //使用count函数分别计算w和S中当前i和j位置的字符连续重复次数
    let countA = count(word, i);
    let countB = count(S, j);
    // Check conditions for stretchiness, based on counts and requirements
    if (countA > countB || (countA < countB && countB < 3)) return false;

    // Move the pointers ahead by the counts
    i += countA;
    j += countB;
  }

  // Return true if both pointers reach the end of their respective strings
  return i == word.length && j == S.length;
}

/* helper function2: 从第i个字符算起，分别计算str中的第i个字符出现的连续重复次数
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
