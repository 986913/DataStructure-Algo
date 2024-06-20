/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */

/**************************** Solution:  Monotonic stack - 单调栈_模版变形题 O(n) ***********************************/
var nextLargerNodes = function (head) {
  // step1: list convert to array
  let arr = [];
  let cur = head;
  while (cur) {
    arr.push(cur.val);
    cur = cur.next;
  }

  // step2: nextGreaterElement单调栈_模版
  return nextGreaterEle(arr);
};

// helper function:
const nextGreaterEle = (nums) => {
  let res = new Array(nums.length).fill(0);
  let monoStack = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    while (monoStack.length && monoStack[monoStack.length - 1] <= nums[i]) {
      monoStack.pop();
    }
    res[i] = monoStack.length ? monoStack[monoStack.length - 1] : 0;
    monoStack.push(nums[i]);
  }
  return res;
};
