/********************** 迭代 ***********************/
const printArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

/********************** Recursion 1 ***********************/
const printArray = (arr) => {
  if (arr.length === 0) return;

  console.log(arr[0]);
  printArray(arr.slice(1));
};

/********************** Recursion 2 ***********************/
const printArray = (arr) => {
  print(arr, 0);
};
// helper function:
const print = (nums, i) => {
  if (i === nums.length) return;

  console.log(nums[i]);
  print(nums, i + 1);
};
