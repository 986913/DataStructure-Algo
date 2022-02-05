// 暴力法
const threeSum = function (nums) {
  let setResult = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const a = nums[i];
        const b = nums[j];
        const c = nums[k];
        const str = [nums[i], nums[j], nums[k]].sort((a, b) => a - b).join(' ');
        if (a + b + c === 0 && setResult.indexOf(str) === -1) {
          setResult.push(str);
        }
      }
    }
  }
  return setResult.map((item) => item.split(' '));
};

//转换为2sum
v;
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);

  if (nums.length < 3) return result;

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; //skip dupicated

    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) j++; //skip dupicated
        while (j < k && nums[k] === nums[k + 1]) k--; //skip dupicated
      } else if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
        while (j < k && nums[j] === nums[j - 1]) j++;
      } else {
        k--;
        while (j < k && nums[k] === nums[k + 1]) k--;
      }
    }
  }

  return result;
};
