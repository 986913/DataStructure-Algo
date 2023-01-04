/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

/* ------------------------------ 用 Backtracking 模版 ------------------------------------------ */
// 9是树的宽度， k控制树的深度
var combinationSum3 = function (k, n) {
  const result = [];
  const path = [];

  const backtracking = (n, k, sum, startIdx) => {
    if (path.length === k && sum === n) {
      result.push([...path]);
      return;
    }

    // 树的宽度
    for (let i = startIdx; i <= 9; i++) {
      sum += i;
      path.push(i);

      backtracking(n, k, sum, i + 1);

      sum -= i;
      path.pop();
    }
  };

  backtracking(n, k, 0, 1);
  return result;
};

// -------------剪枝后------------------------------------------------------------

var combinationSum3 = function (k, n) {
  const result = [];
  const path = [];

  const backtracking = (n, k, sum, startIdx) => {
    if (sum > n) return; //剪枝1

    if (path.length === k && sum === n) {
      result.push([...path]);
      return;
    }

    //剪枝2
    for (let i = startIdx; i <= 9 - (k - path.length) + 1; i++) {
      sum += i;
      path.push(i);

      backtracking(n, k, sum, i + 1);

      sum -= i;
      path.pop();
    }
  };

  backtracking(n, k, 0, 1);
  return result;
};

/* reference */
//https://www.bilibili.com/video/BV1wg411873x/?spm_id_from=333.788&vd_source=2efba544aa6c1bd084ec6ddd7a98c6b2
