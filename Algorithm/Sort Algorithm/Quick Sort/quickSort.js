/* 
  quick sort思路: https://www.youtube.com/watch?v=5nXrEBhBFpU&ab_channel=%E6%84%9B%E8%93%81AiZhen
  quick sort视频： https://www.youtube.com/watch?v=-5F4RafHEvs&ab_channel=%E5%B0%9A%E7%A1%85%E8%B0%B7IT%E5%9F%B9%E8%AE%AD%E5%AD%A6%E6%A0%A1
*/



/* privot helper :

1. privor helper function responsible arranging elments in an anrry on either side of a privot
2. given an array, this helper function should designate an element as the privot
3. it should then rearrange elements in the array so that all values less than the privot are moved to the left of the pivot,
    and all values greater than the pivot are moved to the right of the pivot
4. the order of elements on either side of the pivot dosen't matter
5. the helper should do this in place, it should not create a new array
6. when complete, the helper should return the index of the pivot

  eg:   privot([5,2,1,8,4,7,6,3])    // 4
  解释:  把[5,2,1,8,4,7,6,3]第一个元素5当做privot, 下面这些组合都是可以的，共同点就是reArrange后的数组中，5都在index=4的位置上
        比如： [2，1，4，3，5，8，7，6]
              [1，4，3，2，5，7，6，8]
              [3，2，1，4，5，7，6，8]
              [4，1，3，2，5，6，8，7]
              等等...

  详见Udemy Colt数据结构算法视频
*/

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function privot(arr, start = 0, end = arr.length + 1) {
  let privot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < privot) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}
// console.log(privot([5,2,1,8,4,7,6,3]))  //4

function quickSort(arr, left = 0, right = arr.length -1){
  if(left < right){   // left==right is base case to stop recursion, so here condition is left<right
      let pivotIndex = pivot(arr, left, right) //3
      //left
      quickSort(arr,left,pivotIndex-1);
      //right
      quickSort(arr,pivotIndex+1,right);
    }
  return arr;  
} 
      
quickSort([100,-3,2,4,6,9,1,2,5,3,23])