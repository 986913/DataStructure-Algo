/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const lookup = {};
  const results = [];

  for (let i = 0; i < nums.length; i++) {
    lookup[nums[i]] = lookup[nums[i]] + 1 || 1;
  }

  const sortedLookupArr = Object.entries(lookup).sort((a, b) => {
    if (a[1] == b[1]) return b[0] - a[0];
    else return a[1] - b[1];
  });

  for (let i = 0; i < sortedLookupArr.length; i++) {
    let value = sortedLookupArr[i][1];
    while (value > 0) {
      results.push(sortedLookupArr[i][0]);
      value--;
    }
  }

  return results;
};
