/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let row = 0;
  let coinsTotal = n;

  while (coinsTotal > row) {
    row++;
    coinsTotal = coinsTotal - row;
  }

  return row;
};

// BINARY SEARCH:
var isPossible = function (n, rows) {
  let sum = Math.floor((rows * (rows + 1)) / 2);
  return n >= sum;
};

var arrangeCoins = function (n) {
  let left = 0;
  let right = n;

  let maxRows = 0;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (isPossible(n, mid)) {
      maxRows = Math.max(maxRows, mid);
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return maxRows;
};
