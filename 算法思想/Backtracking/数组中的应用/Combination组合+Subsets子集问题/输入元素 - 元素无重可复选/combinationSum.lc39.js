/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

/****************************  Backtracking (ie:多叉树遍历框架) LC 216变形题 *****************************
  输入: nums = [1, 2, 3], target=3
  输出: [[1,1,1], [1,2], [3]]

                                            [1,  2,  3]
                                        /       |       \      
                                      1         2        3  
                                    / | \      / \       |
                                  1   2   3   2   3      3
                                /｜\  /\   | 
                              1 2  3 2 3  3
***********************************************************************************************/

var combinationSum = function (nums, target) {
  let result = [];
  const traversal = (arr, curPath, curSum, startIdx) => {
    if (curSum > target) return;
    if (curSum === target) {
      result.push([...curPath]);
      return;
    }

    for (let i = startIdx; i < arr.length; i++) {
      curPath.push(arr[i]);
      curSum += arr[i];
      traversal(arr, curPath, curSum, i); //<--- diff is here. 关键点:这里用i, 不用i+1了! 表示可以重复读取当前的数
      curPath.pop();
      curSum -= arr[i];
    }
  };

  traversal(nums, [], 0, 0);
  return result;
};
