/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  // step 1: loop throug s, then call sum
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    sum += map[char];
  }

  // step2: minus the extact part:
  if (s.includes('IV') || s.includes('IX')) sum -= 2;
  if (s.includes('XL') || s.includes('XC')) sum -= 20;
  if (s.includes('CD') || s.includes('CM')) sum -= 200;

  return sum;
};
