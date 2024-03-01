/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

/*******************************  👍👍👍 2 pointer *************************************/
function reverseStr(s, k) {
  const arr = s.split('');

  //i 每次移动 2 * k
  for (let i = 0; i < arr.length; i += 2 * k) {
    let left = i;
    let right = i + k - 1; //就反转这2k个字符中的前k个字符 --> 就确定了right的开始位置(相对于left+k的位置)
    // 每隔2k个字符的前k个字符进行反转;
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join('');
}
