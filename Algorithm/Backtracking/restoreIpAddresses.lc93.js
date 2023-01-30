/**
 * @param {string} s
 * @return {string[]}
 */

/* ----------------------------- 👍 用 Backtracking 模版 - lc131🟡变形题----------------------------------- */

var restoreIpAddresses = function (s) {
  const res = [];
  const path = [];

  const backtracking = (startIdx) => {
    if (path.length > 4) return;
    if (path.length === 4 && startIdx === s.length) {
      res.push(path.join('.'));
      return;
    }

    for (let i = startIdx; i < s.length; i++) {
      const str = s.slice(startIdx, i + 1);
      /* if invalid ip, then no need recursion */
      if (str.length > 3 || +str > 255) break;
      if (str.length > 1 && str[0] === '0') break;

      path.push(str);

      backtracking(i + 1);

      path.pop();
    }
  };

  backtracking(0, 0);
  return res;
};
