/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = -Infinity;

  accounts.forEach((account) => {
    let sum = 0;
    account.forEach((n) => (sum += n));
    max = Math.max(max, sum);
  });

  return max;
};
