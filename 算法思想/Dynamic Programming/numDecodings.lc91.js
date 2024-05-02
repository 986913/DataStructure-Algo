/**
 * @param {string} s
 * @return {number}
 */

/* --------------------------- Dp --------------------------- */
var numDecodings = function (s) {
  const n = s.length;

  const dp = new Array(n + 1).fill(0);
  dp[n] = 1;

  for (let i = n - 1; i >= 0; i -= 1) {
    if (s[i] === '0') continue;
    if (i < n - 1) {
      const twoDigit = parseInt(`${s[i]}${s[i + 1]}`);
      if (twoDigit >= 1 && twoDigit <= 26) {
        dp[i] += dp[i + 2];
      }
    }

    dp[i] += dp[i + 1];
  }

  return dp[0];
};
