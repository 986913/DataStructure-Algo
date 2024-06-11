/**
  Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
  Implement the MinStack class:
    MinStack() initializes the stack object.
    void push(int val) pushes the element val onto the stack.
    void pop() removes the element on the top of the stack.
    int top() gets the top element of the stack.
    int getMin() retrieves the minimum element in the stack.
  You must implement a solution with O(1) time complexity for each function.
  
  注意：push新数据到stack中时候不牵扯排序的，别想着push后就排序....
 */

/******************************** Solution 1: Pairs Stack ******************************  
  时间O(1)  空间O(n)
  https://leetcode.com/problems/min-stack/editorial/#approach-1-stack-of-value-minimum-pairss
*/
var MinStack = function () {
  this.pairStack = []; // pairStack装的是[curVal, curMinVal] pairs
};
/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.pairStack.length === 0) {
    this.pairStack.push([val, val]);
  } else {
    let curMin = this.pairStack[this.pairStack.length - 1][1];
    this.pairStack.push([val, Math.min(val, curMin)]); // <-- key is here
  }
};
/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.pairStack.pop();
};
/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.pairStack[this.pairStack.length - 1][0];
};
/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.pairStack[this.pairStack.length - 1][1];
};

/******************************** Solution 2: Two Stacks ******************************  
  时间O(1)  空间O(n)
  https://leetcode.com/problems/min-stack/editorial/#approach-2-two-stacks
*/
var MinStack = function () {
  this.mainStack = []; // track of the order numbers arrived
  this.minStack = []; //  track of the current minimum: 来记录栈中每个元素入栈时的栈中的最小元素是多少
};
/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.mainStack.push(val);

  //key is here: 只有当val小于minStack的top元素，才能更新minStack. （因为minStack是维持curr min记录们）
  if (
    this.minStack.length == 0 ||
    val <= this.minStack[this.minStack.length - 1]
  ) {
    this.minStack.push(val);
  }
};
/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.mainStack[this.mainStack.length - 1];
};
/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};
/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  //key is here: 只有当mainStack的top元素===minStack的top元素时，才能更新minStack.
  if (
    this.mainStack[this.mainStack.length - 1] ===
    this.minStack[this.minStack.length - 1]
  ) {
    this.minStack.pop();
  }

  this.mainStack.pop();
};
