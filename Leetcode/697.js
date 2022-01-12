/**
 * @param {number[]} nums: [2,1,1,2,1,3,3,3,1,3,1,3,2]
 * @return {number}: 7
 */
var findShortestSubArray = function (nums) {
  let frequencyMap = new Map();
  let degree = 0;

  let firstShowMap = new Map();
  let minlen = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!firstShowMap.has(nums[i])) firstShowMap.set(nums[i], i);
    frequencyMap.set(nums[i], (frequencyMap.get(nums[i]) || 0) + 1);

    if (frequencyMap.get(nums[i]) > degree) {
      degree = frequencyMap.get(nums[i]);
      minlen = i - firstShowMap.get(nums[i]) + 1;
    } else if (frequencyMap.get(nums[i]) === degree) {
      minlen = Math.min(minlen, i - firstShowMap.get(nums[i]) + 1);
    }
  }
  return minlen;
};

var findShortestSubArray = function (nums) {
  const n = nums.length;
  const map = new Map();
  let degree = 1;

  // frequecy counter, key is each num, value is the times they appear
  for (const num of nums) {
    if (!map.has(num)) map.set(num, 0);
    map.set(num, map.get(num) + 1);
    //find them most big degree
    degree = Math.max(degree, map.get(num));
  }

  map.clear();

  let minLen = n; // minLen is return value, set inital value as input's length
  let j = 0;

  for (let i = 0; i < n; i++) {
    // [0,1,2,3,4,5]
    const num = nums[i];
    if (!map.has(num)) map.set(num, 0);
    map.set(num, map.get(num) + 1);
    // find map key value === degree
    while (j <= i && map.get(num) === degree) {
      minLen = Math.min(minLen, i - j + 1); //update minLen
      map.set(nums[j], map.get(nums[j]) - 1); // update map
      j++; //update j
    }
  }

  return minLen;
};
