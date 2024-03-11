/**
 * @param {number[]} fruits
 * @return {number}
 */
/* ----------------------------------  Solution1: Brute force ------------------------------------------- */
var totalFruit = function (fruits) {
  let maxPicked = 0; // Maximum number of fruits we can pick

  // Iterate over all subarrays (left, right)
  for (let left = 0; left < fruits.length; left++) {
    for (let right = 0; right < fruits.length; right++) {
      const basket = new Set(); // Use a set to count the type of fruits.

      // Iterate over the current subarray.
      for (let currentIndex = left; currentIndex <= right; currentIndex++) {
        basket.add(fruits[currentIndex]);
      }

      // If the number of types of fruits in this subarray (types of fruits) is no larger than 2, this is a valid subarray, update 'maxPicked'.
      if (basket.size <= 2) {
        maxPicked = Math.max(maxPicked, right - left + 1);
      }
    }
  }

  // Return 'maxPicked' as the maximum length (maximum number of fruits we can pick).
  return maxPicked;
};

/* ----------------------------------  Solution2:  👍 Fixed length Slding window   ------------------------------------------- */
/**
 * @param {number[]} fruits: 其中每一项代表种类 不是个数
 * @return {number}
 */
var totalFruit = function (fruits) {
  let basket = new Map(); // this is window
  let maxLen = -Infinity;

  let slow = 0;
  let fast = 0;
  while (fast < fruits.length) {
    let moveIn = fruits[fast];
    basket.set(moveIn, basket.get(moveIn) + 1 || 1);
    fast++;

    //shink window when there are at least 2 types of fruits
    if (basket.size > 2) {
      let moveOut = fruits[slow];

      basket.set(moveOut, basket.get(moveOut) - 1);
      if (basket.get(moveOut) === 0) basket.delete(moveOut);

      slow++;
    }

    maxLen = Math.max(maxLen, fast - slow); // update maxLen inside outer while loop
  }

  return maxLen;
};
