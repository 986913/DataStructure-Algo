/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

/* ----------------------------- 👍 用 Backtracking 模版 ------------------------------------------ */

var combinationSum2 = function (candidates, target) {
  const result = [];
  const path = [];
  candidates.sort((a, b) => a - b);
  const used = new Array(candidates.length).fill(false);

  const backtracking = (candidates, target, startIndex, sum, used) => {
    if (sum > target) return;
    if (sum == target) {
      result.push([...path]);
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      // used[i - 1] == true，说明同一树枝candidates[i - 1]使用过; used[i - 1] == false，说明同一树层candidates[i - 1]使用过
      // 要对同一树层使用过的元素进行跳过
      if (i > 0 && candidates[i] == candidates[i - 1] && used[i - 1] == false) {
        continue;
      }

      used[i] = true;
      sum += candidates[i];
      path.push(candidates[i]);

      backtracking(candidates, target, i + 1, sum, used); //关键点: i+1 表示可以不可以重复读取当前的数

      used[i] = false;
      sum -= candidates[i];
      path.pop();
    }
  };

  backtracking(candidates, target, 0, 0, used);
  return result;
};
