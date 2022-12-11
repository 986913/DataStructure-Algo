/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

// https://programmercarl.com/0077.%E7%BB%84%E5%90%88.html#%E5%9B%9E%E6%BA%AF%E6%B3%95%E4%B8%89%E9%83%A8%E6%9B%B2

var combine = function (n, k) {
  const result = [];
  const path = [];

  const backtracking = (n, k, startIdx) => {
    if (path.length === k) {
      result.push([...path]);
      return;
    }

    for (let i = startIdx; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      backtracking(n, k, i + 1);
      path.pop();
    }
  };

  backtracking(n, k, 1);
  return result;
};
