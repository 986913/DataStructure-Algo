/******************************* Solution 1: DP / Two-pointer ****************************************/
/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (arr) {
  let result = 0;

  // 用于跟踪递增和递减序列的长度
  let up = 0;
  let down = 0;

  /* 从索引1开始遍历数组, pointer1是i-1，pointer2是i: */
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] === arr[i] || (down != 0 && arr[i - 1] < arr[i])) {
      //如果存在高原（相等的元素）OR 从递减变成递增，那就重新计数
      up = down = 0;
    }
    if (arr[i - 1] < arr[i]) up++; //递增数列
    if (arr[i - 1] > arr[i]) down++; //递减数列
    if (up > 0 && down > 0) result = Math.max(result, up + down + 1); //重点在这： 如果同时存在递增和递减序列，则更新结果
  }

  return result;
};
