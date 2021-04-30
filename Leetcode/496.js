/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//solution1:  force brute
var nextGreaterElement = function (nums1, nums2) {
  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    let index = nums2.indexOf(nums1[i]);
    let max = nums1[i];

    while (index < nums2.length - 1) {
      if (nums2[index + 1] > max) {
        max = nums2[index + 1];
        break;
      }
      index++;
    }

    max = max === nums1[i] ? -1 : max;
    result.push(max);
  }

  return result;
};


// solution2: 
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// https://leetcode-cn.com/problems/next-greater-element-i/solution/dong-hua-yan-shi-dan-diao-zhan-496xia-yi-ql65/

var nextGreaterElement = function(nums1, nums2) {
  let lookup = {};
  let stack = [];
  let result = [];
  
  for(let i=0; i<nums2.length; i++){
    // while循环表示当前元素是栈中所有已存元素的下一个更大元素
    while(stack && nums2[i]> stack[stack.length-1]){
      const key = stack.pop();
      const value = nums2[i];   
      
      lookup[key]=value;
    }
  
    stack.push(nums2[i])  
  }
  // console.log(stack, lookup)
  // 栈中剩余的元素是没有下一个更大元素的元素
  while(stack.length>0){
    const key = stack.pop();
    lookup[key]=-1
  }
  // console.log(stack, lookup)
  
  for(let i=0; i<nums1.length; i++){
    result[i] = lookup[nums1[i]]
  }
  
  return result
};


