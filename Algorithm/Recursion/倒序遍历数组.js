/********************** Recursion  ***********************/
const printArray = (arr) => {
  print(arr, 0);
};
// helper function:
const print = (nums, i) => {
  if (i === nums.length) return;

  print(nums, i + 1);
  console.log(nums[i]); //<---- diff is here, move it down under print recursion func.
};
