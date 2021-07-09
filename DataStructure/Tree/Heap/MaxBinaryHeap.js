class MaxBinaryHeap {
  constructor() {
    this.values = []; //注意是数组
  }
  insert(val) {
    // 1. add to the end of array
    this.values.push(val);
    // 2. compare the new added value with partent value, if(newvalue > parentvalue),then bubule the value up to the correct spot
    this.bubuleUp();
    // console.log(this.values);
  }

  bubuleUp() {
    let index = this.values.length - 1;
    let ele = this.values[index];
    // stop when index = 0
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentEle = this.values[parentIndex];
      if (ele > parentEle) {
        // swap parent and new value
        this.values[parentIndex] = ele;
        this.values[index] = parentEle;
      }

      index = parentIndex;
    }
  }

  removeMax() {
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
        if (leftChild > aim) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (rightChild > aim && swap === null) ||
          (rightChild > leftChild && swap !== null)
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

let mbh = new MaxBinaryHeap();
mbh.insert(41);
mbh.insert(39);
mbh.insert(33);
mbh.insert(18);
mbh.insert(27);
mbh.insert(12);
mbh.insert(55);

console.log(mbh.removeMax());
console.log(mbh);
