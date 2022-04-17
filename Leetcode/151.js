/**
 * @param {string} s
 * @return {string}
 */
//解法1: 直接使用array build in method
 var reverseWords = function(s) {
  s.trim();
  let arr = s.split(' ').filter(ele=>ele!=='');
  return arr.reverse().join(' ')
};


//解法2: 2 pointer
 var reverseWords = function(s) {
  const arr = s.trim().split(/ +/);  //以多个空格为split
// console.log(arr)
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[right], arr[left]] = [arr[left], arr[right]]
    left++;
    right--;
  }
  return arr.join(' ');
};


