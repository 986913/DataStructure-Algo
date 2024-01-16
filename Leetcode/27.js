/******* Solution 1:  Build-in splice Method:牵扯到数组里面 “循环”和“删除元素”时候， 最好倒着循环 *****/
var removeElement = function (nums, val) {
  for (let i = nums.length; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }
};

/****************Solution 2: 暴力两层for循环，一个for循环遍历数组元素 第二个for循环更新数组 ****************/
var removeElement = function (nums, val) {
  let len = nums.length;

  //一个for循环遍历数组元素
  for (let i = 0; i < len; i++) {
    // 发现需要移除的元素，就将数组集体向前移动一位
    if (nums[i] === val) {
      // 第二个for循环更新数组。
      for (let j = i + 1; j < len; j++) {
        nums[j - 1] = nums[j];
      }

      i--; // 因为下标i以后的数值都向前移动了一位，所以i也向前移动一位
      len--; // 此时数组的大小-1
    }
  }

  // console.log(nums);
  return len;
};

/************************* 👍👍👍 Solution3: Two Pointer ********************************/
/* 这题解法的核心就是遍历数据过程中遇到等于目标值就直接跳过，不等于目标值就赋值，这样就能过滤掉（也就是删除掉）目标值
    fast pointer is use for: loop throgh the whole array. 寻找新数组的元素,新数组就是不含有目标元素的数组
    slow pointer is use for: 记录更新所有不重复的, 指向更新 新数组下标的位置
*/
var removeElement = function (nums, val) {
  let slow = 0;
  let fast = 0;

  while (fast < nums.length) {
    //只有当nums[fast]不等于val时候，才会swap和slow++
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++; // fast是持续++的
  }

  return slow;
};
