/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/**************************** Solution1:  slding window 解法： O(n x k) *********************************************/
var maxSlidingWindow = function (nums, k) {
  let window = [];

  let result = [];
  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    let moveIn = nums[fast];
    window.push(moveIn);
    fast++;

    if (window.length >= k) {
      result.push(Math.max.apply(Math, window));
      window.shift();
      slow++;
    }
  }

  return result;
};

/**************** Solution2: 单调队列:是一个递增或递减的队列，可以用来维护滑动窗口区间的最值，即RMQ问题 *********************************
  入队操作：队尾入队，会把前面破坏单调性的元素删除（维护单调性）
  出队操作：如果队首元素超出区间范围，就将队首元素出队
  元素性质：队首元素永远是当前区间的最值；元素入队的过程中该元素是当前队列的最值

  https://www.bilibili.com/video/BV1XS4y1p7qj/?vd_source=8b5297d974f6a5e72c60ec8ea33f2ff6
*/

//自定义单调队列：
class MonoQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    let back = this.queue[this.queue.length - 1];

    //模拟相继弹出的过程
    while (back !== undefined && back < value) {
      this.queue.pop();
      back = this.queue[this.queue.length - 1]; // re-assign back
    }

    this.queue.push(value);
  }

  dequeue(value) {
    let front = this.peek();
    //当要弹出p的value和queue的出口处一样时,则要实际pop queue的出口元素了
    if (front === value) {
      this.queue.shift();
    }
  }

  //出口处
  peek() {
    return this.queue[0];
  }
}

/********************* main function ***********************/
var maxSlidingWindow = function (nums, k) {
  let result = [];

  let customized_queue = new MonoQueue();
  let slow = 0; //滑动窗口start
  let fast = 0; //滑动窗口end

  //移动fast到k,入k个元素到queue中
  while (fast < k) {
    customized_queue.enqueue(nums[fast]);
    fast++;
  }

  //维护result, result会添加一个最大值
  result.push(customized_queue.peek());

  //继续移动fast直到nums末端
  while (fast < nums.length) {
    customized_queue.enqueue(nums[fast]); //queue入新元素： nums[fast]
    customized_queue.dequeue(nums[slow]); //queue出无用的元素： nums[slow]
    result.push(customized_queue.peek()); //维护result, result会添加一个最大值

    slow++;
    fast++;
  }

  return result;
};
