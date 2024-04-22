/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/* ----------------------------- 👍 用 Backtracking 模版, lc40, lc90的🟡变形题----------------------------------- */

var findSubsequences = function (nums) {
  const result = [];
  const path = [];

  const backtracking = (startIdx) => {
    if (path.length > 1) {
      result.push([...path]);
    }

    let set = new Set(); //记录当前树层中的节点

    for (let i = startIdx; i < nums.length; i++) {
      //  去重
      if (nums[i] < path[path.length - 1] || set.has(nums[i])) {
        continue;
      }

      path.push(nums[i]);
      set.add(nums[i]);

      backtracking(i + 1);

      path.pop();
    }
  };

  backtracking(0);
  return result;
};
