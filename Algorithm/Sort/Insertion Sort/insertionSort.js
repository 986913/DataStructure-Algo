/* 
  Insertion sort：
    把 n 个待排序的元素看成为一个有序表和一个无序表，
    开始时有序表中只包含一个元素，无序表中包含有n-1个元素
    排序过程中每次从无序表中取出第一个元素，把它的排序码依次与有序表元素的排序码进行比较
    将它插入到有序表中的适当位置， 使之成为新的有序表
*/

//https://www.youtube.com/watch?v=i-SKeOcBwko&ab_channel=mycodeschool

const insertionSort = (arr) => {
  /*外层for loop控制轮数，范围1到n */
  for (let i = 1; i < arr.length; i++) {
    let currValue = arr[i]; // save the value that need to be inserted to somewhere

    /* while控制shifting */
    while (arr[i - 1] > currValue) {
      arr[i] = arr[i - 1]; // use arr[i - 1] to fill up hole, when arr[i - 1] > currValue
      i--; // continue to move hole to the left
    }
    /* 每轮结束会insert value --> fill up hole with currentValue  */
    arr[i] = currValue;
  }

  return arr;
};

// insertionSort([-2, 100, 34, 1, 0, 4, 88, 67]);
