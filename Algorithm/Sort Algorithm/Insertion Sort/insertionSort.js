/* 
  Insertion sort：
    把 n 个待排序的元素看成为一个有序表和一个无序表，
    开始时有序表中只包含一个元素，无序表中包含有n-1个元素
    排序过程中每次从无序表中取出第一个元素，把它的排序码依次与有序表元素的排序码进行比较
    将它插入到有序表中的适当位置， 使之成为新的有序表
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([34, 1, 0, 4, 88, 67]);
