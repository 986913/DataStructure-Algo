/**
 * @param {string} digits
 * @return {string[]}
 */

/* ------------------------------ 用 Backtracking 模版 ------------------------------------------ */
/* 
  树的宽度由输入number所对应的字母长度来控制的 (eg: 输入“23”， 2对应“abc”, 那么abc的长度3就是树的宽度)
  树的深度是由输入number的个数控制           (eg: 输入“23”， 那么“23”的长度2就是树的深度)
 */

var letterCombinations = function (digits) {
  if (!digits.length) return [];

  const map = [
    '', // 0
    '', // 1
    'abc', // 2
    'def', // 3
    'ghi', // 4
    'jkl', // 5
    'mno', // 6
    'pqrs', // 7
    'tuv', // 8
    'wxyz', // 9
  ];

  const result = [];
  const path = [];
  const backtracking = (digits, index) => {
    if (index === digits.length) {
      result.push(path.join(''));
      return;
    }

    let digit = digits[index] - '0';
    let letter = map[digit];

    for (const char of letter) {
      path.push(char);
      backtracking(digits, index + 1);
      path.pop();
    }
  };

  backtracking(digits, 0);
  return result;
};

// eg:  letterCombinations("23") --> ['ad','ae','af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
