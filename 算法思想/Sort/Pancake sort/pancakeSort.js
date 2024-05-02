/**
 * pancakeSort： 其基本思想是通过翻转操作来将最大的元素逐步移动到数组的末尾，从而实现排序。
    每次找出最大值，做两次翻转:
      第一次将它翻转到最上面
      第二次将它翻转到最下面
    这样每次轮都会把最大的放到最下面，重复递归，直到第一个。

    https://www.youtube.com/watch?v=NIKo_FxMtpE&ab_channel=%E4%B8%83%E4%BA%BA%E5%B0%8F%E7%BB%84Pleasewatchin2xSPEED
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
  const res = [];
  sort(arr, arr.length);
  return res;

  function sort(cakes, n) {
    if (n === 1) return;

    // 寻找最大烧饼索引
    let maxCake = 0;
    let maxCakeIndex = 0;
    for (let i = 0; i < n; i++) {
      if (cakes[i] > maxCake) {
        maxCake = cakes[i];
        maxCakeIndex = i;
      }
    }

    // 第一次反转，将最大烧饼翻到最上面
    reverse(cakes, 0, maxCakeIndex);
    // 记录反转
    res.push(maxCakeIndex + 1);

    // 第二次翻转，翻转到最下面
    reverse(cakes, 0, n - 1);
    res.push(n);

    // 递归
    sort(cakes, n - 1);
  }
};

// helper function:
const reverse = (arr, left, right) => {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
};
