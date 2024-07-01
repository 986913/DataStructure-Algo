/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/*************************** Solution: Mono quque单调队列 + Sliding window *******************************
  单调队列 - 是一个递增或递减的队列，可以用来维护窗口区间的最值，即RMQ问题
  https://www.bilibili.com/video/BV1XS4y1p7qj/?vd_source=8b5297d974f6a5e72c60ec8ea33f2ff6
*/
var longestSubarray = function (nums, limit) {
  let maxLen = 0;
  let maxQueue = new MaxMonoQueue(); // diff is here: 创建两个单调queue
  let minQueue = new MinMonoQueue(); // diff is here: 创建两个单调queue

  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    maxQueue.enqueue(nums[fast]);
    minQueue.enqueue(nums[fast]);

    while (maxQueue.max() - minQueue.min() > limit) {
      maxQueue.dequeue(nums[slow]);
      minQueue.dequeue(nums[slow]);
      slow++;
    }

    maxLen = Math.max(maxLen, fast - slow + 1);
    fast++;
  }

  return maxLen;
};

//单调递减
class MaxMonoQueue {
  constructor() {
    this.monoQueue = [];
  }
  enqueue(value) {
    let back = this.monoQueue[this.monoQueue.length - 1];
    //将所有小于value的元素全部弹出：
    while (this.monoQueue.length && back < value) {
      this.monoQueue.pop();
      back = this.monoQueue[this.monoQueue.length - 1];
    }
    this.monoQueue.push(value);
  }
  dequeue(value) {
    if (this.monoQueue[0] === value) {
      this.monoQueue.shift();
    }
  }
  //队头存的是最大值
  max() {
    return this.monoQueue[0];
  }
}
//单调递增
class MinMonoQueue {
  constructor() {
    this.monoQueue = [];
  }
  enqueue(value) {
    let back = this.monoQueue[this.monoQueue.length - 1];
    //将所以大于value的元素全部弹出：
    while (this.monoQueue.length && back > value) {
      this.monoQueue.pop();
      back = this.monoQueue[this.monoQueue.length - 1];
    }
    this.monoQueue.push(value);
  }
  dequeue(value) {
    if (this.monoQueue[0] === value) {
      this.monoQueue.shift();
    }
  }
  //队头存的是最小值
  min() {
    return this.monoQueue[0];
  }
}
