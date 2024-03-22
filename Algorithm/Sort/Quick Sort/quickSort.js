/*
  Quick sort:

  原理:
    若要对 arr[lo..hi] 进行排序，我们先找一个分界点 p，通过交换元素使得 arr[lo..p-1] 都小于等于 arr[p]，
    且 arr[p+1..hi] 都大于 arr[p]，然后递归地去 arr[lo..p-1] 和 arr[p+1..hi] 中寻找新的分界点，最后整个数组就被排序了。

    Quick sort is an efficient, in-place, recursive sorting algorithm that selects a "pivot" element and partitions all other elements into 2 subarrays:
      Elements that are smaller than the pivot are added in 1 subarray that is placed before the pivot.
      Elements that are larger than the pivot are added in 1 subarray that is placed after the pivot.
    The quick sort is then recursively applied to each subarray. and once the subarrays are sorted they are then merged back with the pivot element between them as per above.

    Big O：
      best time complexity     O(n log n)
      average time complexity  O(n log n)
      worst time complexity    O(n²)
      space complexity         O(log n)
 */

/************************************ Implemention  ********************************************/

// Main function:
const quickSort = (arr, low, high) => {
  if (low >= high) return; // end recursion

  // 通过交换元素构建分界点pi
  let pi = partition(arr, low, high);

  // 递归地去 arr[lo..p-1] 和 arr[p+1..hi] 中寻找新的分界点
  quickSort(arr, low, pi - 1);
  quickSort(arr, pi + 1, high);
};

// helper function : ----------------------------------
function partition(arr, low, high) {
  let pivot = arr[high]; // pivot用数组最后一个元素
  let i = low - 1; // 用来跟踪 < pivot的元素的位置

  for (let j = low; j <= high - 1; j++) {
    // If current element is smaller than the pivot
    if (arr[j] < pivot) {
      i++; // Increment index of smaller element
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements: 将当前元素arr[j]与第i个位置的元素进行交换，确保< pivot的元素都被移到数组的左边。
    }
  }

  // 在遍历完成后，i的位置就是pivot在排好序的数组中的位置, so need Swap pivot-->arr[high] to its correct position-->arr[i+1]
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return i + 1; // Return the partition index, 即pivot的新位置，这个位置也是分区的索引
}

/*
  const test = [100, -3, 2, 300, 4, 6, 9, 1, 2, 5, 3, 23, 200];
  quickSort(test, 0, test.length - 1);
  console.log(test); // [-3, 1, 2, 2, 3, 4, 5, 6, 9, 23, 100, 200, 300]
*/
