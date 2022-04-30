/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/* 解释在： https://leetcode-cn.com/problems/backspace-string-compare/solution/shuang-zhi-zhen-bi-jiao-han-tui-ge-de-zi-8fn8/

思路解析：

准备两个指针 ii, jj 分别指向 S，T的末位字符，再准备两个变量 skipSskipS，skipTskipT 来分别存放 S，T 字符串中的 # 数量。
从后往前遍历 S，所遇情况有三，如下所示：
2.1 若当前字符是 #，则 skipSskipS 自增 11；
2.2 若当前字符不是 #，且 skipSskipS 不为 00，则 skipSskipS 自减 11；
2.3 若当前字符不是 #，且 skipSskipS 为 00，则代表当前字符不会被消除，我们可以用来和 TT 中的当前字符作比较。
若对比过程出现 S, T当前字符不匹配，则遍历结束，返回 false，若 S，T都遍历结束，且都能一一匹配，则返回 true

*/
var backspaceCompare = function (s, t) {
  let i = s.length - 1; // for s
  let j = t.length - 1; // for t

  let skipS = 0; //存放 S,T 字符串中的 # 数量。
  let skipT = 0; //存放 S,T 字符串中的 # 数量。

  while (i >= 0 || j >= 0) {
    //loop s
    while (i >= 0) {
      if (s[i] === '#') {
        skipS++;
        i--;
      } else {
        if (skipS > 0) {
          skipS--;
          i--;
        } else {
          break; //do nothing
        }
      }
    }

    //loop t
    while (j >= 0) {
      if (t[j] === '#') {
        skipT++;
        j--;
      } else {
        if (skipT > 0) {
          skipT--;
          j--;
        } else {
          break; //do nothing
        }
      }
    }

    if (s[i] !== t[j]) return false;
    i--;
    j--;
  }

  return true;
};
