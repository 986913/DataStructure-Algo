/****************************** 相向 Two-Pointers ********************************/

const 相向2Pointers = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (条件A) left++;
    else if (条件B) right--;
  }

  return left; // or return boolean，按照题目来
};
