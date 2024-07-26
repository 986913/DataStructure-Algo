/**
 * @param {string} digits
 * @return {string[]}
 */

/****************************  Backtracking (ie:多叉树遍历框架) LC77变形题 *****************************
  输入:  digits = "23"
  输出: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

  树的宽度由输入digits所对应的字母的长度来控制的 (eg: 输入“23”， 2对应“abc”, 那么abc的长度3就是树的宽度)
  树的深度是由输入digits的长度控制             (eg: 输入“23”， 那么“23”的长度2就是树的深度)


                                    [a,  b,  c]
                                    /    |     \  
                                  a      b      c         <-- curIndex=0时
                                / | \  / | \   / | \
                              d   e  fd  e  f  d e  f     <-- curIndex=1时 

  Difference with LC 77 is: 
    LC77是在一个集合里面 求组合，所以需要startIdx告诉我之前已经收获了哪些元素，避免得到重复的组合
    这题是在两个集合里面  求组合，所以不需要startIdx
******************************************************************************************/

var letterCombinations = function (digits) {
  if (!digits.length) return [];

  const map = [
    '', // 0
    '', // 1
    'abc', // 2
    'def', // 3
    'ghi', // 4
    'jkl', // 5
    'mno', // 6
    'pqrs', // 7
    'tuv', // 8
    'wxyz', // 9
  ];
  const result = [];

  const traversal = (str, curPath, curIndex) => {
    if (curPath.length === str.length) {
      result.push(curPath.join(''));
      return;
    }

    //前序位置
    let digit = +str[curIndex]; // eg: 2
    let letter = map[digit]; // eg: "abc"

    //i从0开始， 不需要startIdx (因为从两个集合里面取)
    for (let i = 0; i < letter.length; i++) {
      curPath.push(letter[i]);
      traversal(str, curPath, curIndex + 1); // 注意是index+1,不是i+1。 index表示当前处理digits的下标(看上图index)
      curPath.pop();
    }
    //后序位置
  };

  traversal(digits, [], 0);
  return result;
};
