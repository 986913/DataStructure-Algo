/*
  quick sort VS merge sort:
    - Quick sort的思路是，先把一个元素放到正确的位置（排好序），然后将这个元素左右两边剩下的元素利用递归分别排好序，最终整个数组就排好序了
    - merge sort的思路是，把数组切成两半，先把这两半子数组分别排好序，然后再合并这两个有序数组，整个数组就排好序了.
  
  ----------
  Merge Sort 是利用merge的思想实现的排序方法
  原理： 假设初始序列有n个记录，就可以看成是n个有序的子序列，每个子序列的长度为1，然后两两merge,
        得到n/2个长度为2或1的有序子序列，再两两merge, 如此重复， 直到得到一个长度为n的有序序列为止
        这种方法被称为 2路merge sort

  ----------
  Big O：
    best time complexity     O(n log n)  --- 其中n是每层的复杂度，log n是树的高度
    average time complexity  O(n log n)  --- 其中n是每层的复杂度，log n是树的高度
    worst time complexity    O(n log n)  --- 其中n是每层的复杂度，log n是树的高度
    space complexity         O(n)
*/

/************************************ Merge sort ********************************************/
// Main function:
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  //后序位置:
  let res = merge(left, right);
  arr.forEach((_, index) => (arr[index] = res[index]));
  return arr;
}

// helper function: merges two sorted arrays (use 2 pointer)
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

/*********************  变形题🟡 https://bigfrontend.dev/problem/merge-sorted-arrays ******************/
function merge2Arrays(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;

  let res = [];

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      res.push(arr1[p1]);
      p1++;
    } else {
      res.push(arr2[p2]);
      p2++;
    }
  }

  while (p1 < arr1.length) {
    res.push(arr1[p1]);
    p1++;
  }
  while (p2 < arr2.length) {
    res.push(arr2[p2]);
    p2++;
  }

  return res;
}
function merge(arrList) {
  if (arrList.length === 0) return [];
  if (arrList.length === 1) return arrList[0];
  if (arrList.length === 2) return merge2Arrays(arrList[0], arrList[1]);

  let mid = Math.floor(arrList.length / 2);
  let left = merge(arrList.slice(0, mid));
  let right = merge(arrList.slice(mid));

  return merge2Arrays(left, right);
}
