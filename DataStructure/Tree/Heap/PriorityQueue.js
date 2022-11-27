class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = []; //注意是数组
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    // 1. add to the end of array
    this.values.push(newNode);
    // 2. compare the new added value with partent value, if(newvalue > parentvalue),then bubule the value up to the correct spot
    this.bubuleUp();
    // console.log(this.values);
  }

  dequeue() {
    //1. get root(max) element  and last element, and replace max with last element
    let max = this.values[0];
    let end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      //2. sink/bubble down
      this.sinkDown();
    }

    //3. return removed element
    return max;
  }

  bubuleUp() {
    let index = this.values.length - 1;
    let ele = this.values[index];
    // stop when index = 0
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentEle = this.values[parentIndex];
      if (ele.priority <= parentEle.priority) {
        // swap parent and new value
        this.values[parentIndex] = ele;
        this.values[index] = parentEle;
      }

      index = parentIndex;
    }
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const aim = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;

      let swap = null; // for tracking swap index

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < aim.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (rightChild.priority < aim.priority && swap === null) ||
          (rightChild.priority < leftChild.priority && swap !== null)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break; // means there is no children greater than aim element

      this.values[idx] = this.values[swap];
      this.values[swap] = aim;

      idx = swap;
    }
  }
}

let ER = new PriorityQueue();

ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 3);

console.log(ER.dequeue()); // { priority: 1, val: "gunshot wound" }
console.log(ER.dequeue()); // { priority: 2, val: "broken arm" }
console.log(ER.dequeue()); // { priority: 3, val: "glass in foot" }
console.log(ER.dequeue()); // { priority: 4, val: "high fever" }
console.log(ER.dequeue()); // { priority: 5, val: "common cold" }
