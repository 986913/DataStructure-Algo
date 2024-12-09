/* 
  Shell sort：
  shell sort是insertion sort的一种更高效的改进版本。但shell sort是非稳定排序算法
  shell sort是基于插入排序的以下两点性质而提出改进方法的：
    insertion sort在对几乎已经排好序的数据操作时，效率高，即可以达到O(n)的效率；
    但insertion sprt一般来说是低效的，因为插入排序每次只能将数据移动一位；

  Shell sort算法思想：
  先将整个待排序的数组分割成为若干子数组分别进行插入排序，待整个子数组中“基本有序”时，再对全体记录进行依次插入排序。
  (先把乱序数组变成一个16有序数组，然后再变成8有序数组，4有序数组，2有序数组，最后变成1有序数组，完成排序)

  ----------------
  算法步骤 in general:
    选择一个增量序列 t1，t2，……，tk，其中 ti > tj, tk = 1；（比如16，8，4，2，1）
    按增量序列个数k，对数组进行k趟排序；
    每趟排序，根据对应的增量ti，将待排序列分割成若干长度为 m 的子序列，分别对各子数组进行插入排序。
    仅增量因子为1时，整个数组作为一个表来处理，表长度即为整个数组的长度。

  ----------------
  Shell sorting不是稳定排序（当h>1时进行的排序操作，就可能打乱相同元素的相对位置了）
  Shell sorting  是原地排序
  Big O：
    best    time complexity     O(n²)
    average time complexity     O(n²)
    worst   time complexity     O(n²)
    space complexity            O(1)
*/

/***************************** 基础版 ******************************/
const shellSort = (nums) => {
  let n = nums.length;
  // 初始化gap，从大到小逐步缩小到1:
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // 这是重点 ---> 在当前gap下，使用插入排序对数组nums进行分组排序:
    for (let i = gap; i < n; i++) {
      let insertIdx = i; // 在哪儿插
      let currValue = nums[i]; // 插什么值
      // 类似插入排序，但按照gap间隔比较和移动
      while (nums[insertIdx - gap] > currValue && insertIdx >= gap) {
        nums[insertIdx] = nums[insertIdx - gap];
        insertIdx -= gap;
      }
      // found the insertIdx,然后插入
      nums[insertIdx] = currValue;
    }
  }
  return nums;
};
