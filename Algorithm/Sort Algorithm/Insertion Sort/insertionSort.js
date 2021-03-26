/* 
  Insertion sort：
    把 n 个待排序的元素看成为一个有序表和一个无序表，
    开始时有序表中只包含一个元素，无序表中包含有n-1个元素
    排序过程中每次从无序表中取出第一个元素，把它的排序码依次与有序表元素的排序码进行比较
    将它插入到有序表中的适当位置， 使之成为新的有序表
*/

//https://www.youtube.com/watch?v=i-SKeOcBwko&ab_channel=mycodeschool

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {

    let currentValue = arr[i];

    while (i > 0 && arr[i - 1] > currentValue) {
      arr[i] = arr[i - 1];
      i--;
    }
    arr[i] = currentValue;

  }

  return arr;
};

insertionSort([-2, 100, 34, 1, 0, 4, 88, 67]);
