/**
  Design a Max stack data structure that supports the stack operations and supports finding the stack's maximum element.
  Implement the MaxStack class:
    MaxStack() Initializes the stack object.
    void push(int x) Pushes element x onto the stack.
    int pop() Removes the element on top of the stack and returns it.
    int top() Gets the element on the top of the stack without removing it.
    int peekMax() Retrieves the maximum element in the stack without removing it.
    int popMax() Retrieves the maximum element in the stack and removes it. If there is more than one maximum element, only remove the top-most one.
    You must come up with a solution that supports O(1) for each top call and O(logn) for each other call.

  注意：push新数据到stack中时候不牵扯排序的，别想着push后就排序....
 */

/******************************** Solution 1: Pairs Stack ******************************  

  时间：push、pop、top和peekMax的时间复杂度都是O(1)，而popMax的时间复杂度是O(n) 
  空间O(n)
*/

var MaxStack = function () {
  this.pairStack = []; // pairStack装的是[curVal, curMaxVal] pairs
};
/**
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function (x) {
  if (this.pairStack.length === 0) {
    this.pairStack.push([x, x]);
  } else {
    let curMax = this.pairStack[this.pairStack.length - 1][1];
    this.pairStack.push([x, Math.max(x, curMax)]);
  }
};
/**
 * @return {number}
 */
MaxStack.prototype.pop = function () {
  return this.pairStack.pop()[0];
};
/**
 * @return {number}
 */
MaxStack.prototype.top = function () {
  return this.pairStack[this.pairStack.length - 1][0];
};
/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function () {
  return this.pairStack[this.pairStack.length - 1][1];
};
/**
 * @return {number}
 * this is the key function:
 */
MaxStack.prototype.popMax = function () {
  const maxVal = this.peekMax();

  let buffer = [];
  // Pop elements until we find the max value
  while (this.pairStack[this.pairStack.length - 1][0] !== maxVal) {
    buffer.push(this.pairStack.pop());
  }
  // Remove the max value
  this.pairStack.pop();

  //移除了最大元素，记得要 Recalculate the max values and push the elements back
  while (buffer.length > 0) {
    let x = buffer.pop()[0];
    this.push(x);
  }

  return maxVal;
};
