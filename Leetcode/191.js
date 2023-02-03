/**
 * @param {number} n - a positive integer
 * @return {number}
 */

/* -------------------- Solution 1:  Loop and Flip -------------------- */
const hammingWeight = (n) => {
  let count = 0;
  let mask = 1;
  for (let i = 0; i < 32; i++) {
    // & is bitwise AND
    if ((n & mask) !== 0) count++;
    // mask 左移1位 --> to check the next bit
    mask = mask << 1;
  }
  return count;
};

/* -------------------- 👍 Solution 2: Bit opearation -------------------- */
const hammingWeight = (n) => {
  let count = 0;
  while (n !== 0) {
    //最快消除末尾1的方法：n & (n-1);
    n = n & (n - 1);
    count++;
  }
  return count;
};
