/**
  用例测试：
    replaceNumber("a1b2c3")  ---> "anumberbnumbercnumber";
    replaceNumber("a5b")     ---> "anumberb"
 */

const replaceNumber = (s) => {
  let arr = s.split('');

  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    if (!isNaN(Number(arr[left]))) arr[left] = 'number';
    if (!isNaN(Number(arr[right]))) arr[right] = 'number';

    left++;
    right--;
  }
  console.log(arr.join(''));
};
