/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 1. slding window 解法：
var maxSlidingWindow = function (nums, k) {
  let result = [];

  let window = [];
  let windowStartIdx = 0;

  for (let windowEndIdx = 0; windowEndIdx < nums.length; windowEndIdx++) {
    window.push(nums[windowEndIdx]);

    if (window.length >= k) {
      maxNum = Math.max.apply(Math, window);
      result.push(maxNum);

      window.shift();
      windowStartIdx++;
    }
  }

  return result;
};

//2。 单调队列：Monotonic queue
/*
  单调队列是一个递增或递减的队列，可以用来维护滑动窗口区间的最值，即RMQ问题

  入队操作：队尾入队，会把前面破坏单调性的元素删除（维护单调性）
  出队操作：如果队首元素超出区间范围，就将队首元素出队
  元素性质：队首元素永远是当前区间的最值；元素入队的过程中该元素是当前队列的最值
*/
class MonoQueue {
  queue;
  constructor() {
    this.queue = [];
  }
  enqueue(value) {
    let back = this.queue[this.queue.length - 1];
    while (back !== undefined && back < value) {
      this.queue.pop();
      back = this.queue[this.queue.length - 1];
    }
    this.queue.push(value);
  }
  dequeue(value) {
    let front = this.front();
    if (front === value) {
      this.queue.shift();
    }
  }
  front() {
    return this.queue[0];
  }
}

// 队列没有必要维护窗口里的所有元素，只需要维护有可能成为窗口里最大值的元素就可以了，同时保证队列里的元素数值是由大到小的。
var maxSlidingWindow = function (nums, k) {
  let helperQueue = new MonoQueue();
  let i = 0,
    j = 0;
  let resArr = [];
  while (j < k) {
    helperQueue.enqueue(nums[j++]);
  }
  resArr.push(helperQueue.front());
  while (j < nums.length) {
    helperQueue.enqueue(nums[j]);
    helperQueue.dequeue(nums[i]);
    resArr.push(helperQueue.front());
    i++, j++;
  }
  return resArr;
};
