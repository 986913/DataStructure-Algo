/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

function reverseStr(s, k) {
  const arr = s.split('');

  // 每计数至 2k 个字符 -> foreach use 2K as step
  for (let i = 0; i < arr.length; i += 2 * k) {
    let left = i;
    let right = i + k - 1; //就反转这 2k 个字符中的前 k 个字符 --> 就确定了right的开始位置(相对于left+k的位置)

    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join('');
}
