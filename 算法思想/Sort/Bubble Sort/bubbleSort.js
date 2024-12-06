/* 
  Bubble Sort: 
  数组中有n个数，从第1个数开始，逐个比较相邻的两数，如果前面的大于后面的，交换位置，将比较大的数往后排
  然后再从第1个数开始重复此过程
  以此类推，直到整个数组有序。
  ----------------

  Bubble sorting 是稳定排序
  Bubble sorting 是原地排序
  Big O:
    best time complexity     O(n)
    average time complexity  O(n²)
    worst time complexity    O(n²)
    space complexity         O(1)
*/

/***************************** Bubble Sort 基础版 ******************************/
function bubbleSort(arr) {
  //外层-->遍历次数: outer loop control how many round(arr.length-1) should have
  for (let i = 0; i < arr.length - 1; i++) {
    //内循环负责将较大的数“冒泡”到未排序部分的末尾）
    //内层-->比较次数: inner loop control how may times should compare
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]; // swap arr[j+1] and arr[j]
      }
    }
  }
  return arr;
}

/************************** Bubble Sort 优化版 ***************************
  优化点：在数组已经有序时，算法能够提前结束，从而提高性能。

  具体思路：
  1. 增加一个 `done` 标志，用来判断当前这一轮内循环中是否发生了任何交换。
  2. 每次外循环开始前，将 `done` 设置为 `true`，假设数组已经是有序的。
  3. 如果内循环中有两数交换，说明数组尚未完全有序，将 `done` 置为 `false`。
  4. 内循环结束后，如果 `done` 仍然为 `true`，说明整个数组已经是有序的，直接退出外层循环，避免多余的比较。
  
  示例：
  对于数组 [8, 1, 2, 3, 4, 5, 6, 7]，只需一轮内循环就能将 8 移动到正确位置，
  并且剩下的部分已经有序，优化后的算法可以立即停止，而不是继续冗余的比较。
************************************************************************/

function bubbleSort(arr) {
  let done; //<-- diff is here，标记当前轮次是否发生过交换

  for (let i = 0; i < arr.length - 1; i++) {
    done = true; //<-- diff is here, 假设本轮排序时数组是有序的

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        done = false; //<-- diff is here, 说明整个数组还不是完全有序
      }
    }
    if (done) break; //<-- diff is here, 如果这一轮没有发生任何交换，数组已经有序，直接退出循环
  }
  return arr;
}
