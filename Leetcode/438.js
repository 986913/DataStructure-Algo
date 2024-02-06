/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

/* ------------------------ Solution: 👍 Slding window - LC567, 76变形题 ------------------------*/
var findAnagrams = function (s, t) {
  const needs = new Map();
  for (let char of t) {
    needs.set(char, needs.get(char) + 1 || 1);
  }

  const window = new Map();
  let slow = 0;
  let fast = 0;
  let valid = 0;
  let result = []; // 不同点
  while (fast < s.length) {
    let moveIn = s[fast];
    fast++;
    if (needs.has(moveIn)) {
      window.set(moveIn, window.get(moveIn) + 1 || 1);
      if (window.get(moveIn) === needs.get(moveIn)) valid += 1;
    }

    //不同点：缩小窗口的时机是窗口>= t.length 时，因为排列嘛，显然长度应该是一样的。
    while (fast - slow >= t.length) {
      if (valid === needs.size) result.push(slow); //不同点with LC567 ： update result here

      let moveOut = s[slow];
      slow++;
      if (needs.has(moveOut)) {
        if (window.get(moveOut) === needs.get(moveOut)) valid -= 1;
        window.set(moveOut, window.get(moveOut) - 1);
      }
    }
  }

  return result;
};
