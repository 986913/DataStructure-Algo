/*
  merge Sort:

  merge Sort 是利用merge的思想实现的排序方法
  原理： 假设初始序列有n个记录，就可以看成是n个有序的子序列，每个子序列的长度为1，然后两两merge,
        得到n/2个长度为2或1的有序子序列，再两两merge, 如此重复， 直到得到一个长度为n的有序序列为止
        这种方法被称为 2路merge sort

  Time complexity:
        best:  O(n log n)
    average:   O(n log n)
      worst:   O(n log n)

  Space complexity:  O(n)
*/

// Merges two already sorted arrays
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


function mergeSort(arr){
  if(arr.length <= 1) return arr;
  
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right)  // helper function
}

console.log(mergeSort([8,3,99,12,1,100,74]))