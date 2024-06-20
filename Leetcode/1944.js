/**
 * @param {number[]} heights
 * @return {number[]}
 */

/********************* Solution:  Monotonic stack - 单调栈_模版变形题 O(n)*******************

  只不过这道题不是问你下一个更大元素是多少，
  而是问你当前元素和下一个更大元素之间的元素个数
*/

var canSeePersonsCount = function (heights) {
  var res = new Array(heights.length);
  var monoStack = [];

  for (var i = heights.length - 1; i >= 0; i--) {
    let count = 0; // <-- diff is here

    while (monoStack.length && monoStack[monoStack.length - 1] <= heights[i]) {
      monoStack.pop();
      count++; // <-- diff is here
    }

    /*如果monoStack里还有元素, 说明当前高度右边至少还有一个比它高的人，因此在count的基础上再加1。
      如果 monoStack 为空，说明当前高度右边没有比它高的人，则count保持不变 */
    res[i] = monoStack.length ? count + 1 : count; // <-- diff is here
    monoStack.push(heights[i]);
  }

  return res;
};
