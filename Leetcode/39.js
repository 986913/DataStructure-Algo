/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

/* ----------------------------- 👍 用 Backtracking 模版 ------------------------------------------ */

var combinationSum = function (candidates, target) {
  const result = [];
  const path = [];

  const backtracking = (candidates, target, startIndex, sum) => {
    if (sum > target) return;
    if (sum == target) {
      result.push([...path]);
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      sum += candidates[i];
      path.push(candidates[i]);

      backtracking(candidates, target, i, sum); // 关键点:不用i+1了，表示可以重复读取当前的数

      sum -= candidates[i];
      path.pop();
    }
  };

  backtracking(candidates, target, 0, 0);
  return result;
};
