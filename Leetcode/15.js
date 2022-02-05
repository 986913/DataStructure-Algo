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

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; //skip dupcated

    let low = i + 1;
    let high = nums.length - 1;

    while (low < high) {
      if (nums[i] + nums[low] + nums[high] === 0) {
        result.push([nums[i], nums[low], nums[high]]);

        while (low < high && nums[low] === nums[low + 1]) low++; //remove aLL dupcated
        while (low < high && nums[high] === nums[high - 1]) high--; //remove aLL dupcated
        low++;
        high--;
      } else if (nums[i] + nums[low] + nums[high] < 0) {
        low++;
      } else {
        high--;
      }
    }
  }
  return result;
};
