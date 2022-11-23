//这道题没有算法

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

function reverseStr(s, k) {
  const arr = s.split('');

  for (let i = 0; i < arr.length; i += 2 * k) {
    let left = i;
    let right = i + k - 1;

    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join('');
}
