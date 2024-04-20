/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/****************************  Backtracking (ie:多叉树遍历框架) LC78变形题 ******************************/

var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b); //<--- diff is here: 先排序让相同的元素靠在一起，如果发现nums[i]==nums[i-1]则跳过
  let result = [];

  const traversal = (arr, curPath, startIdx) => {
    result.push([...curPath]);

    for (let i = startIdx; i < arr.length; i++) {
      // 剪枝： 值相同的相邻树枝，只遍历第一条
      if (i > startIdx && arr[i] === arr[i - 1]) continue; //<--- diff is here

      curPath.push(arr[i]);
      traversal(arr, curPath, i + 1); //<--- diff is here: 不传入startIdx+=1, 传入的是i+1, 表示不可以重复读取当前的数
      curPath.pop();
    }
  };

  traversal(nums, [], 0);
  return result;
};
