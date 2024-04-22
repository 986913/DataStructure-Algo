/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

/****************************  Backtracking (ie:多叉树遍历框架) LC77变形题 *****************************/

// 9是树的宽度， k控制树的深度
var combinationSum3 = function (k, n) {
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = [];

  const traversal = (arr, curPath, curSum, startIdx) => {
    if (curSum > n) return; // 剪枝 (optional)

    // base case:
    if (curPath.length == k && curSum === n) {
      result.push([...curPath]);
    }

    /* 不同点：
      (排列permute)类问题i从0开始:                  --> i从   0    开始就是为了要result组合重复,因为order matters.      eg: ✅[1,2,3], ✅[3,2,1] etc
      (组合combine/子集类subsets)是从startidx开始！ --> i从startIdx开始就是为了防止result组合重复,因为order not matters. eg: ✅[1,2,3], ❌[3,2,1] etc . startIdx在这里充当了类似于used数组的角色， 使用startIdx都会跳过前面已经使用过的数字
    */
    for (let i = startIdx; i < arr.length; i++) {
      curPath.push(arr[i]);
      curSum += arr[i];
      traversal(arr, curPath, curSum, i + 1);
      curPath.pop();
      curSum -= arr[i];
    }
  };

  traversal(nums, [], 0, 0);
  return result;
};
