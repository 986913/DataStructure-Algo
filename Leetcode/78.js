/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/* ----------------------------- 👍 用 Backtracking 模版 ----------------------------------- */
var subsets = function (nums) {
  let result = [];
  let path = [];

  const backtracking = (nums, startIdx) => {
    result.push([...path]); //不同点在这：每一层递归都要收集结果

    for (let i = startIdx; i < nums.length; i++) {
      path.push(nums[i]);
      backtracking(nums, i + 1);
      path.pop();
    }
  };

  backtracking(nums, 0);
  return result;
};
