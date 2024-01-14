/******************************参照LC   28题************************************* */
/******************************参照LC  239题************************************* */

const fixedSlidingWindow = (target, nums) => {
  let slow = 0;
  let fast = 0;

  while (fast < nums.length) {
    //增大窗口
    window.add(nums[fast]);
    fast++;

    if (something.length >= windowSize) {
      //缩小窗口
      window.remove(nums[slow]);
      slow++;
    }
  }
};
