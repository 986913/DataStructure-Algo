/* ------------------------------ 👍 经典模板 ------------------------------  */
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1; // 定义target在左闭右闭的区间里，[left, right]

  while (left <= right) {
    // 当left==right，区间[left, right]依然有效，所以用 <=
    let middle = left + Math.floor((right - left) / 2); // 防止溢出 等同于(left + right)/2

    if (arr[middle] < target) {
      left = middle + 1; // target 在右区间，所以[middle + 1, right]
    } else if (arr[middle] > target) {
      right = middle - 1; // target 在左区间，所以[left, middle - 1]
    } else {
      // arr[middle] === target
      return middle; // 数组中找到目标值，直接返回下标
    }
  }

  return -1; // 未找到目标值
}

/* ------------------------------ 模板变形：🟡 求left bound （ 要求: arr中有重复的元素 ------------------------------  */
function left_bound(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);

    if (arr[middle] < target) {
      left = middle + 1;
    } else if (arr[middle] > target) {
      right = middle - 1;
    } else {
      right = middle - 1; //不同点：别返回，要收缩右边界
    }
  }

  /*
    arr中没找到target:
		case 1: left一直往右走，越界了
		case 2: left一直往左走，走到了arr的第一项且还不等于target
  */
  if (left >= arr.length || arr[left] !== target) {
    return -1;
  }

  return left; //不同点：找到要return left
}

/* ------------------------------ 模板变形：🟡 求right bound （ 要求: arr中有重复的元素）------------------------------  */
function right_bound(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);

    if (arr[middle] < target) {
      left = middle + 1;
    } else if (arr[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1; //不同点：别返回，要收缩左边界
    }
  }

  /*
    arr中没找到target:
		case 1: right一直往左走，越界了
		case 2: right一直往右走，走到了arr最后一项且还不等于target
  */
  if (right < 0 || arr[right] !== target) {
    return -1;
  }

  return right; //不同点：找到要return right
}
