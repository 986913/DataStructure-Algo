/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

/* -------------------- Solution 1:  Loop (❓没懂) -------------------- */
function reverseBits(n) {
  let ans = 0;

  for (let i = 0; i < 32; i++) {
    ans = ans * 2 + (n % 2);
    n >>>= 1;
  }

  return ans;
}
