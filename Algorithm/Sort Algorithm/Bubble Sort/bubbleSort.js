/* 
  Bubble Sort: 数组中有n个数，从第一个数开始，逐个比较相邻的两数，如果前面的大于后面的，交换位置，将比较大的数往后排
*/

/* -----------------------------------bubble sort's dummy version:  ---------------------------------------- */
function sort(arr) {
  //外层-->遍历次数
  for (let i = 0; i < arr.length - 1; i++) {
    //内层-->比较次数
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]; // swap arr[j+1] and arr[j]
      }
    }
  }
  return arr;
}

/* ----- bubble sort's effient version: done对输入是那种差不多已经快排好序的 有大的性能提升 -----------------------------------
      形如[8,1,2,3,4,5,6,7]这种数组，只需比较一轮就已经排好了。
      所以我们加一个flag，每次外层循环开始前将标志位置为true，内层循环过程中，出现两数交换时，置为false。
      如果内层循环没有任何两数进行交换，标志位为true，表示排序完成。 这样我们就可以减少不必要的排序，提高性能
*/
function sort(arr) {
  let done;

  for (let i = 0; i < arr.length - 1; i++) {
    done = true;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]; // swap arr[j+1] and arr[j]
        done = false;
      }
    }
    if (done) break;
  }
  return arr;
}

sort([100, 23, 6, 0, 99, 45]); // [0,6,23,45,99, 100]
sort([8, 1, 2, 3, 4, 5, 6, 7]); // [1,2,3,4,5,6,7,8]
