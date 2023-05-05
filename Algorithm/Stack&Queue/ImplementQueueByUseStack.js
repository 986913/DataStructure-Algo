/* you can use this Class which is bundled together with your code

class Stack {
  push(element) { // add element to stack }
  peek() { // get the top element }
  pop() { // remove the top element}
  size() { // count of element }
}
*/

/* Array is disabled in your code */

// you need to complete the following Queue Class ----------- Leetcode 232 🟡 原题--------------

class Queue {
  constructor() {
    this.stackIn = new Stack();
    this.stackOut = new Stack();
  }
  // add new element to the rare
  enqueue(element) {
    this.stackIn.push(element);
  }
  // return count of element
  size() {
    return this.stackIn.size() + this.stackOut.size();
  }
  // remove the head element
  dequeue() {
    if (this.stackOut.size()) {
      return this.stackOut.pop();
    }

    while (this.stackIn.size()) {
      this.stackOut.push(this.stackIn.pop());
    }
    return this.stackOut.pop();
  }
  // get the head element
  peek() {
    let ele = this.dequeue();
    this.stackOut.push(ele);
    return ele;
  }
}
