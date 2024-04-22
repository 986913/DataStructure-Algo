/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
/****************************  Backtracking (ie:多叉树遍历框架) LC90, 77变形题 ******************************
  输入: nums = [1, 1, 2], target=3
  输出: [[1,2]]     

  为了区分上面的两个1，第二个1用1'表示：
                                  nums[1, 1', 2]
                                      /   |    \
                                    1     1'     2
                                  / \     |
                                1'   2    2
                                |    
                                2    

  上述和等于3的所有组合有: [[1,2], [1',2]], 但是因为题目要求的结果不能有重复，所以结果是[[1,2]]
****************************************************************************************************/

var combinationSum2 = function (nums, target) {
  nums.sort((a, b) => a - b); //<--- diff is here
  let result = [];

  const traversal = (arr, curPath, curSum, startIdx) => {
    //超过目标和，直接结束
    if (curSum > target) return;
    //达到目标和，找到符合条件的组合
    if (curSum === target) {
      result.push([...curPath]);
      return;
    }

    for (let i = startIdx; i < arr.length; i++) {
      //! 注意：i > startIdx
      if (i > startIdx && arr[i] === arr[i - 1]) continue; //<--- diff is here: 值相同的相邻树枝,只遍历第一条

      curPath.push(arr[i]);
      curSum += arr[i];
      traversal(arr, curPath, curSum, i + 1);
      curPath.pop();
      curSum -= arr[i];
    }
  };

  traversal(nums, [], 0, 0); //<--- diff is here，多了一个curSum参数
  return result;
};
