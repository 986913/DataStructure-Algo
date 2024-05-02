/**
 * @param {number[]} ages
 * @return {number}
 */

/************************* Solution 1: Brute Force - double forloop ******************************/
// helper function
const notFriend = (x, y) => y <= x * 0.5 + 7 || y > x || (y > 100 && x < 100);

var numFriendRequests = function (ages) {
  let totalRequest = 0;

  for (let i = 0; i < ages.length; i++) {
    let x = ages[i];
    for (let j = 0; j < ages.length; j++) {
      if (i !== j) {
        let y = ages[j];
        if (!notFriend(x, y)) continue;
        else totalRequest += 1;
      }
    }
  }

  return totalRequest;
};

/************************* Solution 2: Two Pointer - Binary Search ******************************/
// helper function
const notFriend = (x, y) => y <= x * 0.5 + 7 || y > x || (y > 100 && x < 100);

const numFriendRequests = (ages) => {
  ages.sort((a, b) => b - a); // 对年龄数组进行降序排序
  let totalRequest = 0;

  for (let i = 0; i < ages.length; ) {
    // 使用二分查找找到符合条件的年龄范围
    let left = i;
    let right = ages.length - 1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (notFriend(ages[i], ages[mid])) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    // 计算满足条件的年龄范围的长度
    const tp = right - i < 0 ? 0 : right - i;

    // 处理相同年龄的情况，因为根据题意，相同年龄的人也可以发送好友请求。
    while (i + 1 < ages.length && ages[i] === ages[i + 1]) {
      totalRequest += tp;
      i++;
    }

    // 累加满足条件的年龄范围的长度
    totalRequest += tp;
    i++;
  }

  return totalRequest;
};
