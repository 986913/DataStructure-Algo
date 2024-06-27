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
