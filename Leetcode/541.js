//这道题没有算法

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const len = s.length;
  let resArr = s.split('');

  for (let i = 0; i < len; i += 2 * k) {
    let left = i - 1;
    let right = i + k > len ? len : i + k;

    while (++left < --right) {
      [resArr[left], resArr[right]] = [resArr[right], resArr[left]];
    }
  }

  return resArr.join('');
};
