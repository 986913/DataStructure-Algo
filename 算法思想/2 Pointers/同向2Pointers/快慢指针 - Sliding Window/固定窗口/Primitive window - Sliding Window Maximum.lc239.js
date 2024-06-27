/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/**************************** Solution1:  slding window 解法：O(n*k) *********************************************/
var maxSlidingWindow = function (nums, k) {
  let window = [];
  let result = [];

  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    window.push(nums[fast]);

    if (window.length >= k) {
      result.push(Math.max.apply(Math, window));

      window.shift();
      slow++;
    }
    fast++;
  }

  return result;
};

/*************************** Solution2: Mono quque单调队列 + Sliding window *******************************

  单调队列 - 是一个递增或递减的队列，可以用来维护窗口区间的最值，即RMQ问题
  https://www.bilibili.com/video/BV1XS4y1p7qj/?vd_source=8b5297d974f6a5e72c60ec8ea33f2ff6
*/
var maxSlidingWindow = function (nums, k) {
  let result = [];
  let window = new MonoQueue(); // <-- diff is here

  let slow = 0;
  let fast = 0;
  //移动fast到k, 入k个元素到window中
  while (fast < k) {
    window.enqueue(nums[fast]);
    fast++;
  }
  //初始result: result会添加一个最大值
  result.push(window.peek());

  //继续移动fast直到nums末端,去更改window
  while (fast < nums.length) {
    window.enqueue(nums[fast]); //window入新元素： nums[fast]
    window.dequeue(nums[slow]); //window出无用的元素：nums[slow]

    result.push(window.peek()); //维护result, result会添加一个最大值

    slow++;
    fast++;
  }

  return result;
};

/***********************  自定义单调递减的monoQueue ********************/
class MonoQueue {
  constructor() {
    this.monoQueue = [];
  }

  // 在队尾添加元素value
  enqueue(value) {
    let back = this.monoQueue[this.monoQueue.length - 1];

    //将小于value的元素全部弹出：
    while (this.monoQueue.length && back < value) {
      this.monoQueue.pop();
      back = this.monoQueue[this.monoQueue.length - 1]; // re-assign back
    }
    //添加value到队尾
    this.monoQueue.push(value);
  }

  //如果要pop的元素value是队头元素，那就要实际要删除队头元素
  dequeue(value) {
    //当要弹出的value和queue的出口处一样时,则要实际pop queue的出口元素了
    if (this.monoQueue[0] === value) {
      this.monoQueue.shift();
    }
  }

  //队头存的是最大值
  peek() {
    return this.monoQueue[0];
  }
}
