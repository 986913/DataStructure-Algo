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

// https://www.bilibili.com/video/BV1GW4y127qo/?vd_source=2efba544aa6c1bd084ec6ddd7a98c6b2
/*---------------- 👍👍👍 2 pointer: 转换为2sum --------------------------------------- */
const threeSum = (nums) => {
  const result = [];

  nums.sort((a, b) => a - b); // 1. 将数组排序

  // 2.
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1,
      right = nums.length - 1,
      iNum = nums[i];

    if (iNum > 0) return result; // 数组排过序，如果第一个数大于0直接返回res

    // 去重iNum !!!!!!
    if (iNum == nums[i - 1]) continue;
    /* 错误去重a方法，将会漏掉-1,-1,2 这种情况: if (iNum == nums[i + 1]) continue;*/

    while (left < right) {
      let threeSum = iNum + nums[left] + nums[right];

      if (threeSum < 0) left++;
      else if (threeSum > 0) right--;
      else {
        result.push([iNum, nums[left], nums[right]]);
        // 去重逻辑应该放在找到一个三元组之后，对nums[left]和nums[right]去重
        while (left < right && nums[left] == nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] == nums[right - 1]) {
          right--;
        }

        // 找到答案时，双指针同时收缩
        left++;
        right--;
      }
    }
  }
  return result;
};
