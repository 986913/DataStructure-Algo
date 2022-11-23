/* 
  Selection Sort: 没有bubble sort和insertion sort好使

  Big O:
    best time complexity     O(n2)
    average time complexity  O(n2)
    worst time complexity    O(n2)

    space complexity         O(1)
*/

function selectionSort(arr) {
  /* outer loop control how many round should have (arr.length), i is sorting index */
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    // 内循环负责找出最小值的index (inner loop is for find/updating minumn values's index)
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }

    //每走完一轮,如果最小值的index和sorting index不一样 则进行swap.
    if (minIndex !== i) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }

  return arr;
}

//selectionSort([19, 5, 25, 3, 10]); //[3,5,10,19,25]
