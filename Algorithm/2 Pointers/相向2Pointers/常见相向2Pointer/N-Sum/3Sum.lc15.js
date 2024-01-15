/* ------------ Solution 1 : 🚫暴力法 ------------------------ */
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

/*---------------- Solution 2 : 👍👍👍 2 pointer 转换为2sum --------------------------------------- */
const threeSum = (nums) => {
  const result = [];

  // Step1. 将数组排序
  nums.sort((a, b) => a - b);

  // Step2. 单层for循环套上2sum
  for (let i = 0; i < nums.length; i++) {
    let iNum = nums[i]; //forloop的当前指针，包围2sum的指针
    if (iNum === nums[i - 1]) continue; // 🟡去重iNum🟡

    // Step3. 套用2sum
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let threeSum = nums[left] + nums[right] + iNum;

      if (threeSum < 0) left++;
      else if (threeSum > 0) right--;
      else {
        result.push([nums[left], nums[right], iNum]); // 找到答案, 更新result

        // 去重逻辑应该放在找到一个三元组之后, for cases like: [0,-1,-1,-1,1,1,1] etc
        // 🟡去重num[left]🟡
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        // 🟡去重num[right]🟡
        while (left < right && nums[right] === nums[right - 1]) {
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

// https://www.bilibili.com/video/BV1GW4y127qo/?vd_source=2efba544aa6c1bd084ec6ddd7a98c6b2
