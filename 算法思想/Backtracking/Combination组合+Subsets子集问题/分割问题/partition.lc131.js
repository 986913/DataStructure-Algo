/**
 * @param {string} s
 * @return {string[][]}
 */

/**************************** Combination/Subset (输入元素无重不可复选) - backtracking  LC93变形题 ******************************
  输入: s = "aab"
  输出: [["a","a","b"],["aa","b"]]    

  为了区分上面的两个a，第二个a用a'表示：
                                s:         aa'b
                                      /       |    \
                                    a        a'     b
                                  a|a'b    aa'|b  aa'b|❌
                                  / \         |
                                a'   b        b
                          a|a'|b  a|a'b|❌  ✅aa'|b|
                                |    
                                b
                            ✅a|a'|b| 

  分割问题就是组合问题 上述所有叶子组合有: [ ❌["aab"], ✅["aa", "b"], ❌["a","ab"], ✅["a","a","b"] ]
  但是因为题目要求的结果都必须是回文子串，所以结果是[["a","a","b"],["aa","b"]]
******************************************************************************************************************************/

var partition = function (s) {
  const result = [];
  const traversal = (s, curPath, startIdx) => {
    // 如果起始位置已经大于s的大小，说明到了叶子层. 已经找到了一组分割方案了
    if (startIdx >= s.length) {
      result.push([...curPath]);
      return;
    }

    //组合combine/子集类subsets是从startidx开始:
    for (let i = startIdx; i < s.length; i++) {
      // 获取s中的子串[startIdx, i]. (substr的第二个参数表示子串的长度，而不是结束索引位置)
      const substring = s.substr(startIdx, i - startIdx + 1);

      // diff is here ---> 添加了s的区间[startIdx, i]是否为回文子串的逻辑：
      if (isPalindrome(substring)) {
        curPath.push(substring);
        traversal(s, curPath, i + 1); // 寻找i+1为起始位置的子串
        curPath.pop();
      }
    }
  };

  traversal(s, [], 0);
  return result;
};

// helper function:
const isPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
