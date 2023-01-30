/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/* ----------------------------- 👍 用 Backtracking 模版, lc78-子集1 和 lc40-组合总和2  的🟡变形题----------------------------------- */

var subsetsWithDup = function (nums) {
  let result = [];
  let path = [];

  /* 不同点1: 要去重 */
  nums.sort((a, b) => a - b);
  const used = new Array(nums.length).fill(false);

  const backtracking = (nums, startIdx, used) => {
    result.push([...path]); //不同点2：每一层递归都要收集结果

    for (let i = startIdx; i < nums.length; i++) {
      //要去重
      if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) {
        continue;
      }

      path.push(nums[i]);
      used[i] = true;

      backtracking(nums, i + 1, used);

      used[i] = false;
      path.pop();
    }
  };

  backtracking(nums, 0, used);
  return result;
};
