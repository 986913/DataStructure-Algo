/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

var combinationSum3 = function (k, n) {
  const result = [];
  const path = [];

  const backtracking = (n, k, sum, startIdx) => {
    if (path.length === k && sum === n) {
      result.push([...path]);
      return;
    }

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
