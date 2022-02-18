class MinBinaryHeap {
  constructor() {
    this.values = []; //注意是数组
  }
  insert(val) {
    // 1. add to the end of array
    this.values.push(val);
    // 2. compare the new added value with partent value, if(newvalue < parentvalue),then bubule the value up to the correct spot(switch current with parent)
    this.bubleUp();
  }
  bubleUp() {
    let index = this.values.length - 1;
    let ele = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentEle = this.values[parentIndex];

      if (ele < parentEle) {
        //swap parent and new value
        this.values[parentIndex] = ele;
        this.values[index] = parentEle;
      }
      index = parentIndex;
    }
  }
  peek() {
    return this.values[0];
  }
  removeMin() {
    //1. get root(min) element  and last element, and replace root with last element
    const min = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end; //and replace root with last element
      // 2. bubleDown
      this.bubleDown();
    }
    return min;
  }

  bubleDown() {
    let index = 0;
    const length = this.values.length;
    const aim = this.values[0];

    while (true) {
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = index * 2 + 2;
      let leftChild, rightChild;

      let swap = null; // for tracking swap index

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (aim > leftChild) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (aim > rightChild && swap === null) ||
          (leftChild > rightChild && swap !== null)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break; // means there is no children smaller than aim element

      //swap the postion here
      this.values[index] = this.values[swap];
      this.values[swap] = aim;

      index = swap;
    }
  }
}

const mbh = new MinBinaryHeap();
mbh.insert(2);
mbh.insert(4);
mbh.insert(31);
mbh.insert(41);
mbh.insert(55);
mbh.insert(1);

mbh.removeMin();
console.log(mbh);
