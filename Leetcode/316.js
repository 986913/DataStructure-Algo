/**
  Given a string, write a function to remove the duplicate characters to make sure that each character only occurs once.

  For example: 
    'xyzabcxyzabc'
  Each character appears twice, we could make it unique as follows:
    'xyzabc'
    'xyabcz'
    'xabcyz'
    'abcxyz'
    'abxyzc'
    .....

  Above all subsequences contains unique characters, but you need to return the smallest one in lexicographical order( 'a' -> 'z'), which is `'abcxyz'`.
  All input only contains valid lowercase alphabets only.
 */

/* -------------------用例测试--------------------- */
removeDuplicateLetters('a'); // "a"
removeDuplicateLetters('aba'); // "ab"
removeDuplicateLetters('bab'); // "ab"
removeDuplicateLetters('babac'); // "abc"
removeDuplicateLetters('xyzabcxyzabc'); // "abcxyz"
removeDuplicateLetters('xyzabc'); // "xyzabc"
removeDuplicateLetters('bac'); // "bac"
removeDuplicateLetters('baceaced'); // "baced"
removeDuplicateLetters('cbacba'); // "acb"
removeDuplicateLetters('xyzbab'); // "xyzab"

/* ------------------------------ Solution: Stack + greedy -------------------------------------- */
const removeDuplicateLetters = (s) => {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (stack.indexOf(char) > -1) continue;
    // 使用indexOf(xx, i)取代 lastIndexOf(xx)减少遍历次数会更快
    while (
      stack.length > 0 &&
      stack[stack.length - 1] > char &&
      s.indexOf(stack[stack.length - 1], i) > i
    ) {
      stack.pop();
    }
    stack.push(char);
  }

  return stack.join('');
};

/**
 * @think 利用栈和贪心算法的思想
 *        1. 维护一个栈stack，对字符串进行正序遍历
 *        2. 对每个字符char，首先判断stack中是否存在，
 *          2.1 若stack栈顶值比char大且后续还存在此值，则将栈顶弹出；
 *            2.1.1 使用indexOf(xx, i)取代 lastIndexOf(xx)减少遍历次数会更快
 *        3. 入栈每个char
 *        4. 打印栈底到栈顶即为结果

 * @time O(nlogn)
 * @space 0(1) 只需借用一个栈
 * @param {string} s
 * @return {string}
 */

//https://leetcode.cn/problems/remove-duplicate-letters/solution/qu-chu-zhong-fu-zi-mu-by-leetcode-soluti-vuso/
