/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/* 1. slding window 解法： O(n x k) ---------------------------------------------------------------------- */
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

/* 2。 单调队列:是一个递增或递减的队列，可以用来维护滑动窗口区间的最值，即RMQ问题---------------------------------------------

  入队操作：队尾入队，会把前面破坏单调性的元素删除（维护单调性）
  出队操作：如果队首元素超出区间范围，就将队首元素出队
  元素性质：队首元素永远是当前区间的最值；元素入队的过程中该元素是当前队列的最值
*/
class MonoQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    let back = this.queue[this.queue.length - 1];

    //模拟相继弹出的过程
    while (back && back < value) {
      this.queue.pop();
      back = this.queue[this.queue.length - 1]; // re-assign back
    }

    this.queue.push(value);
  }

  dequeue(value) {
    let front = this.peek();
    if (front === value) {
      this.queue.shift();
    }
  }

  //出口处
  peek() {
    return this.queue[0];
  }
}

// 队列没有必要维护窗口里的所有元素，只需要维护有可能成为窗口里最大值的元素就可以了，同时保证队列里的元素数值是由大到小的。
var maxSlidingWindow = function (nums, k) {
  let result = [];

  let queue = new MonoQueue(); // 这道题中相当于window, 这个队列呢，放进去窗口里的元素，然后随着窗口的移动，队列也一进一出，每次移动之后，队列告诉我们里面的最大值是什么。
  let windowStartIdx = 0; //滑动窗口start
  let windowEndIdx = 0; //滑动窗口end

  //移动windowEndIdx到k,入k个元素到queue中
  while (windowEndIdx < k) {
    queue.enqueue(nums[j]);
    j++;
  }
  //维护result, result会添加一个最大值
  result.push(queue.peek());

  //继续移动windowEndIdx直到nums末端
  while (windowEndIdx < nums.length) {
    queue.enqueue(nums[windowEndIdx]); //queue入新元素： nums[windowStartIdx]
    queue.dequeue(nums[windowStartIdx]); //queue出无用的元素： nums[windowStartIdx]

    result.push(queue.peek()); //维护result, result会添加一个最大值

    windowStartIdx++;
    windowEndIdx++;
  }
  return result;
};
