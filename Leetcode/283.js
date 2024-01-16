/**
  Given an array of integers, move zeros to the end while keeping the order of the rest.
  You should make the in-place change. What is the time & space complexity of your approach?
  用例测试:
    moveZeros([1, 0, 0, 2, 3]); // [1,2,3,0,0]
    moveZeros([1, 2, 3, 0, 0, 0, 6]); // [1,2,3,6,0,0,0]
    moveZeros([0, 0, 0, 1, 0, 0, 2, 0, 0, 3, 0, 0, 0, 6, 0, 0]); // [1,2,3,6,0,0,0,0,0,0,0,0,0,0,0,]
 */

/************************ Solution1: force-brute：牵扯到数组里面 “循环”和“删除元素”时候， 最好倒着循环！！！*************/
var moveZeroes = function (nums) {
  for (let i = nums.length; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.push(0);
      nums.splice(i, 1);
    }
  }
};

/******************************** Solution2: 👍👍👍 Two pointers ********************************************/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeros(list) {
  let slow = 0;
  let fast = 0;

  while (fast < list.length) {
    //只有当list[fast]不等于0时候，才会swap和slow++
    if (list[fast] !== 0) {
      [list[fast], list[slow]] = [list[slow], list[fast]];
      slow++;
    }

    fast++; // fast是持续++的
  }
}
