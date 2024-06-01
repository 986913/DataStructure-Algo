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
