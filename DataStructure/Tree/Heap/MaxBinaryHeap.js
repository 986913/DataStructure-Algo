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
}

let mbh = new MaxBinaryHeap();
mbh.insert(41);
mbh.insert(39);
mbh.insert(33);
mbh.insert(18);
mbh.insert(27);
mbh.insert(12);
mbh.insert(55);

console.log(mbh.values); // [55 39 41 18 27 12 33]
