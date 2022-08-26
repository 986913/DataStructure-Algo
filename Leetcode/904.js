/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function (tree) {
  let maxSize = -Infinity;
  let windowStartIdx = 0;
  let n = 0; //用于记录上次的windowEndIdx位置。
  let baskets = [tree[windowStartIdx]]; //就是window

  for (let windowEndIdx = 0; windowEndIdx < tree.length; windowEndIdx++) {
    if (!baskets.includes(tree[windowEndIdx])) {
      //如果window中不包括进窗口的水果
      if (baskets.length <= 1) {
        //如果window中只有1种水果,那就把进窗口的水果加进去
        baskets[1] = tree[windowEndIdx];
      } else {
        //如果window中有2种水果, 如果window中还不包括进窗口的水果。那就该shink window
        windowStartIdx = n; // update window start index
        baskets[0] = tree[windowEndIdx - 1]; // maintance window
        baskets[1] = tree[windowEndIdx]; // maintance window
      }
    }

    if (tree[windowEndIdx] !== tree[n]) {
      n = windowEndIdx; //更新上次windowEndIdx的位置
    }

    //update maxsize
    maxSize = Math.max(maxSize, windowEndIdx - windowStartIdx + 1);
  }

  return maxSize;
};
