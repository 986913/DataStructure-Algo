/**
 * @param {number} n
 * @return {string[]}

  一个有效的括号序列是这样的：
    - 左括号和右括号的数量相等。
    - 从左到右遍历括号序列，任何时刻左括号的数量都多于右括号的数量。也就是说，在任何位置，右括号不能先于左括号出现。
                      （任何时刻剩余左括号的数量都小于生育右括号的数量。这样才能保证在后续添加右括号时不会出现不合法的序列）

  下面的BFS， DFS两个解法的时间复杂度都是 O(4^n * n)
                      生成所有序列的数量 4^n * 处理每个序列的时间n
 */

/**************************************** Solution1: BFS  *********************************************************/
var generateParenthesis = function (n) {
  let result = [];

  let queue = [];
  // 初始状态, 从一个空字符串开始，有n个左括号和n个右括号可以使用。
  queue.push({ str: '', leftCount: n, rightCount: n });

  while (queue.length) {
    let curr = queue.shift();
    const { str: curStr, leftCount: left, rightCount: right } = curr;

    // 如果左右括号都用完了，说明找到一个合法的组合
    if (left === 0 && right === 0) {
      result.push(curStr);
      continue;
    }

    // 如果剩余左括号数大于0，可以添加左括号
    if (left > 0) {
      queue.push({ str: curStr + '(', leftCount: left - 1, rightCount: right });
    }

    //(合法性检查) 如果剩余右括号数大于剩余左括号数，可以添加右括号
    if (right > left) {
      queue.push({ str: curStr + ')', leftCount: left, rightCount: right - 1 });
    }
  }

  return result;
};

/**************************** Solution2:  Backtracking (ie:多叉树遍历框架)  ******************************/
var generateParenthesis = function (n) {
  let result = [];

  // curStr---当前字符串, leftCount--左括号还剩几个,  rightCount--右括号还剩几个
  const traversal = (curStr, leftCount, rightCount) => {
    //base condition:
    if (leftCount < 0 || rightCount < 0) return;
    if (leftCount > rightCount) return; // <--- 若剩下的左括号多（即右括号多），说明不合法
    //剩下的左右括号都为0，说成匹配好了
    if (leftCount === 0 && rightCount === 0) {
      result.push(curStr);
      return;
    }

    //在每一步递归中，首先尝试添加左括号，进入递归。
    curStr += '(';
    traversal(curStr, leftCount - 1, rightCount);
    curStr = curStr.slice(0, -1); //回溯：将最后添加的括号移除

    //回溯后 再尝试添加右括号，进入递归。
    curStr += ')';
    traversal(curStr, leftCount, rightCount - 1);
    curStr = curStr.slice(0, -1); //回溯：将最后添加的括号移除
  };

  traversal('', n, n);
  return result;
};
