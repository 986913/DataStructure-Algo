/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/************************************** Solution1 : Two Pointer ************************************** 
  解释在： https://leetcode-cn.com/problems/backspace-string-compare/solution/shuang-zhi-zhen-bi-jiao-han-tui-ge-de-zi-8fn8/
  思路解析：
    准备两个指针 i, j 分别指向 s，t的末位字符，再准备两个变量 skipS skipT 来分别存放 s，t 字符串中的 # 数量。
    从后往前遍历 S，所遇情况有三，如下所示：
    1 若当前字符是 #，  则 skipS 自增 1；
    2 若当前字符不是 #，且 skipS 不为0, 则代表当前字符会被消除 则 skipS 自减 1；
    3 若当前字符不是 #，且 skipS 为0，则代表当前字符不会被消除，我们可以用来和T中的当前字符作比较。
    若对比过程出现 S, T当前字符不匹配，则遍历结束，返回 false，若 S，T都遍历结束，且都能一一匹配，则返回 true
*/
var backspaceCompare = function (s, t) {
  let i = s.length - 1; // for s
  let j = t.length - 1; // for t

  let skipS = 0; //存放 S 字符串中的 # 数量。
  let skipT = 0; //存放 T 字符串中的 # 数量。

  while (i >= 0 || j >= 0) {
    //loop s
    while (i >= 0) {
      if (s[i] === '#') {
        skipS++;
        i--;
      } else {
        if (skipS > 0) {
          //代表当前字符会被消除 则 skipS 自减 1, i--
          skipS--;
          i--;
        } else {
          break; //代表当前字符不会被消除, do nothing
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
          //代表当前字符会被消除 则 skipT 自减 1, j--
          skipT--;
          j--;
        } else {
          break; //代表当前字符不会被消除, sdo nothing
        }
      }
    }

    if (s[i] !== t[j]) return false;
    i--;
    j--;
  }

  return true;
};

/************************************** Solution2 : Stack **************************************/
