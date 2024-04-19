/**
 * @param {string} s
 * @return {string[][]}
 */

/* ----------------------------- 👍 用 Backtracking 模版 ------------------------------------------ */

const isPalindrome = (s, left, right) => {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

var partition = function (s) {
  const result = [];
  const path = [];

  const backtracking = (s, startIdx) => {
    // 如果起始位置已经大于s的大小，说明已经找到了一组分割方案了
    if (startIdx >= s.length) {
      result.push([...path]);
      return;
    }

    for (let i = startIdx; i < s.length; i++) {
      //是回文子串
      if (isPalindrome(s, startIdx, i)) {
        str = s.substr(startIdx, i - startIdx + 1); // 获取[startIndex,i]在s中的子串
        path.push(str);
      } else {
        continue; // 如果不是回文子串则直接跳过
      }

      backtracking(s, i + 1); // 寻找i+1为起始位置的子串

      path.pop(); // 回溯过程，弹出本次已经填在的子串
    }
  };

  backtracking(s, 0);
  return result;
};
