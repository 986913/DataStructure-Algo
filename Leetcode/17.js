/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function (digits) {
  if (!digits.length) return [];

  const map = [
    '',
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
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
