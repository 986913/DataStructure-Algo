/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// solution1:  use js build in .sort function
var findKthLargest = function (nums, k) {
  let sorted = nums.sort((a, b) => a - b);
  return sorted[sorted.length - k];
};

/*
solution2: quick select:

  Quick Select 类似快排，选取pivot，把小于pivot的元素都移到pivot之前，这样pivot所在位置就是第pivot index 小的元素。 
  但是不需要完全给数组排序，只要找到当前pivot的位置是否是在第(n-k)小的位置，如果是，找到第k大的数直接返回。

  这个方法的理论依据是 partition 得到的点的下标就是最终排序之后的下标，根据这个下 标，我们可以判断第 K 大的数在哪里
 */
const findKthLargest = function (nums, k) {
  k = nums.length - k;
  return quickselect(0, nums.length - 1);

  function quickselect(left, right) {
    if (left === right) return nums[left];
    let randomIdx = left + Math.floor(Math.random() * (right - left));
    let pivotIdx = partition(left, right, randomIdx);
    if (k < pivotIdx) return quickselect(left, pivotIdx);
    else if (k > pivotIdx) return quickselect(pivotIdx + 1, right);
    return nums[k];
  }

  function partition(left, right, randomIdx) {
    const pivot = nums[randomIdx];
    swap(randomIdx, right);
    let pointer = left;
    for (let idx = left; idx <= right; idx++) {
      if (nums[idx] < pivot) {
        swap(pointer, idx);
        pointer++;
      }
    }
    swap(pointer, right);
    return pointer;
  }

  function swap(idx1, idx2) {
    let temp = nums[idx1];
    nums[idx1] = nums[idx2];
    nums[idx2] = temp;
  }
};
