/* 
  博客： https://www.guru99.com/quicksort-in-javascript.html
  这个印度叔讲的好 https://www.youtube.com/watch?v=7h1s2SojIRw&ab_channel=AbdulBari


  quick sort思路: https://www.youtube.com/watch?v=5nXrEBhBFpU&ab_channel=%E6%84%9B%E8%93%81AiZhen
  quick sort视频： https://www.youtube.com/watch?v=-5F4RafHEvs&ab_channel=%E5%B0%9A%E7%A1%85%E8%B0%B7IT%E5%9F%B9%E8%AE%AD%E5%AD%A6%E6%A0%A1
*/



/* partition helper :

1. partition helper function responsible arranging elments in an anrry on either side of a privot
2. given an array, this helper function should designate an element as the privot
3. it should then rearrange elements in the array so that all values less than the privot are moved to the left of the pivot,
    and all values greater than the pivot are moved to the right of the pivot
4. the order of elements on either side of the pivot dosen't matter
5. the helper should do this in place, it should not create a new array
6. when complete, the helper should return the index of the pivot

  eg:   partition([5,2,1,8,4,7,6,3])    // 4
  解释:  把[5,2,1,8,4,7,6,3]第一个元素5当做privot, 下面这些组合都是可以的，共同点就是reArrange后的数组中，5都在index=4的位置上
        比如： [2，1，4，3，5，8，7，6]
              [1，4，3，2，5，7，6，8]
              [3，2，1，4，5，7，6，8]
              [4，1，3，2，5，6，8，7]
              等等...
*/

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
function partition(arr, left, right) {
  let pivot = arr[Math.floor((right + left) / 2)];  //middle element
  let i = left;    //left pointer
  let j = right;    //right pointer

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j); //sawpping two elements
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  var index;
  if (arr.length > 1) {
    index = partition(arr, left, right);  //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(arr, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(arr, index, right);
    }
  }
  return arr;
}


var sortedArray = quickSort([100, -3, 2, 300, 4, 6, 9, 1, 2, 5, 3, 23, 200]);
console.log(sortedArray);
