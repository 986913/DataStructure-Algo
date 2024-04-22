/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/****************************  Backtracking (ie:多叉树遍历框架) LC90, 40 变形题 ******************************
  输入: nums = [4,7,6,7]
  输出: [[4,7],[4,7,7],[4,6],[4,6,7],[7,7],[6,7]]  

  这个问题就是子集问题（LC90） 
  为了区分上面的两个7，第二个7用7'表示：
                                  nums [  4,  7,  6,  7'  ]
                                        /     |     |      \
                                      4       7     6       7'
                                [7,6,7']    [6,7'] [7']     []
                                / | \        /  \    |
                              7   6  7'     6    7'  7'
                          [6,7'] [7'][]   [7']  []
                          /   \   |         |
                        6      7' 7'        7'
                      [7']    []  []        []

  上述等于的所有子集subsets有:
    [[],[4],[7],[6],[7'],[4,7],[4,6],[4,7'],[7,6'],[7,7'],[6,7'],[4,7,6],[4,7,7'],[4,6,7'],[7,6,7']], 
  但是因为题目要求的结果:
    1.不能有重复
    2.每个子集长度>=2，
    3.每个子集都是升序
  所以最终结果是[[4,7],[4,7,7],[4,6],[4,6,7],[7,7],[6,7]]
****************************************************************************************************/

var findSubsequences = function (nums) {
  // diff is here.  不要sort nums
  let result = [];
  const traversal = (arr, curPath, startIdx) => {
    // 每个子集长度>=2
    if (curPath.length >= 2) {
      result.push([...curPath]); //<-- diff is here: no return here
    }

    let set = new Set(); // <-- diff is here
    for (let i = startIdx; i < arr.length; i++) {
      if (curPath && arr[i] < curPath[curPath.length - 1]) continue; // <-- diff is here,每个子集都是升序
      if (set.has(arr[i])) continue; // <-- diff is here,去重

      curPath.push(arr[i]);
      set.add(arr[i]); // <-- diff is here
      traversal(arr, curPath, i + 1);
      curPath.pop();
    }
  };

  traversal(nums, [], 0);
  return result;
};
