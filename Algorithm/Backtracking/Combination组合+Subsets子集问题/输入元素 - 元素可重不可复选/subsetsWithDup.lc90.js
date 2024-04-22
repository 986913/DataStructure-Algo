/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/****************************  Backtracking (ie:多叉树遍历框架) LC78,40变形题 ******************************
  输入: nums = [1, 1, 2]
  输出: [[],[1],[1,1],[1,1,2],[1,2],[2]]    

  为了区分上面的两个1，第二个1用1'表示：
                                  nums[1, 1', 2]
                                      /   |    \
                                    1     1'     2
                                  / \     |
                                1'   2    2
                                |    
                                2    
  所有子集为：[[],[1],[1'],[2],[1,1'],[1,2],[1'2],[1,1',2]]
  但是符合题目要求不重复的为：[[],[1],[1,1],[1,1,2],[1,2],[2]]
****************************************************************************************************/

var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b); //<--- diff is here: 先排序让相同的元素靠在一起，如果发现nums[i]==nums[i-1]则跳过
  let result = [];

  const traversal = (arr, curPath, startIdx) => {
    result.push([...curPath]);

    for (let i = startIdx; i < arr.length; i++) {
      //! 注意：i > startIdx
      if (i > startIdx && arr[i] === arr[i - 1]) continue; //<--- diff is here: 值相同的相邻树枝,只遍历第一条

      curPath.push(arr[i]);
      traversal(arr, curPath, i + 1);
      curPath.pop();
    }
  };

  traversal(nums, [], 0);
  return result;
};
