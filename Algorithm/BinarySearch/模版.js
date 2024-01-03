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
const left_bound = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    // 不断收缩右边界:  >变成>=
    if (target <= nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  /*
    arr中没找到target:
		  case 1: left一直往右走，越界了: [1,3,3,5,5,6]中找10;
		  case 2: left一直往左走，走到了arr的第1项且还不等于target: [1,3,3,5,5,6]中找0;
   */
  if (left >= nums.length || nums[left] !== target) {
    return -1;
  }

  return left; //找到了target, 返回的是left index
};

/* ------------------------------ 模板变形：🟡 求right bound （ 要求: arr中有重复的元素）------------------------------  */
const right_bound = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    // 不断收缩左边界:  >变成>=
    if (target >= nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  /*
    arr中没找到target:
		  case 1: right一直往左走，越界了: [1,3,3,5,5,6]中找0;
		  case 2: right一直往右走，走到了arr最后一项且还不等于target: [1,3,3,5,5,6]中找10;
  */
  if (right < 0 || nums[right] !== target) {
    return -1;
  }

  return right; //找到了target, 返回的是right index
};
