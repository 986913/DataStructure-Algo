/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */

// leetcode link: https://leetcode.cn/problems/hanota-lcci/

var hanota = function (A, B, C) {
  const len = A.length;

  const helper = (len, A, B, C) => {
    // recursion end:
    if (len === 1) {
      C.push(A.pop());
      return;
    }

    // 将A中的n-1个移动到B
    helper(len - 1, A, C, B);
    // 将A剩余的一个移动到C
    C.push(A.pop());
    // 将B中的n-1个移动到C
    helper(len - 1, B, A, C);
  };

  helper(len, A, B, C);
};
