/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */

/******************************* Solution: LC15-3sum变形题 ****************************************/
var threeSumMulti = function (arr, target) {
  const module = Math.pow(10, 9) + 7;

  arr.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let iNum = arr[i];

    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const sum = iNum + arr[left] + arr[right];

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        //当 sum === target 时，代码处理数组中存在连续相等元素的情况，并相应地计算组合的数量。

        let leftCount = 1;
        let rightCount = 1;

        /* 如果 left 和 right 处的元素相等，意味着数组中存在连续的相等元素。
          在这种情况下，代码使用从n个元素中取出2的组合数的公式（n * (n + 1) / 2计算组合数，并将其添加到总计数中。
          然后，循环被中断，因为在这种情况下无需继续检查*/
        if (arr[left] === arr[right]) {
          // take pairs of 2 from n = (right-left+1)
          count += ((right - left) * (right - left + 1)) / 2; //从n个元素中取出2的组合数的公式 n*(n + 1)/2 计算组合数
          count %= module;
          break;
        }

        //增加 left 指针并计算左边的连续相等元素的数量
        left++;
        while (left <= right && arr[left] === arr[left - 1]) {
          leftCount += 1;
          left++;
        }
        //减小 right 指针并计算右边的连续相等元素的数量
        right--;
        while (right >= left && arr[right] === arr[right + 1]) {
          rightCount += 1;
          right--;
        }

        // count of current combinations is a product of left same numbers and rights
        count += rightCount * leftCount;
        count %= module;
      }
    }
  }

  return count;
};
