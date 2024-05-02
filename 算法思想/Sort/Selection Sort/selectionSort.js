/* 
  Selection Sort 🙅‍♀️: 没有bubble sort和insertion sort好使

  Big O:
    best time complexity     O(n2) 🙅‍♀️ 
    average time complexity  O(n2)
    worst time complexity    O(n2)

    space complexity         O(1)

  选择排序是一种简单直观的排序算法，无论什么数据进去都是 O(n²) 的时间复杂度。
  所以用到它的时候，数据规模越小越好。唯一的好处可能就是不占用额外的内存空间了吧

  算法步骤
  1.首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
  2.再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
  3.重复第二步，直到所有元素均排序完毕。

  动画：https://sort.hust.cc/2.selectionsort
*/

function selectionSort(arr) {
  /* outer loop control how many round should have (arr.length), i is sorting index */
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // for tracking the min value's index
    // 内循环负责找出最小值的index (inner loop is for find/updating minumn values's index)
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }

    //每走完一轮,如果最小值的index和sorting index不一样 则进行swap.
    if (minIndex !== i) [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }

  return arr;
}

//selectionSort([19, 5, 25, 3, 10]); //[3,5,10,19,25]
