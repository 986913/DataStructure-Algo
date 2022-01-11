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
