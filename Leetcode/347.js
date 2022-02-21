/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// solution 1: hash -table
var topKFrequent = function (nums, k) {
  let map = new Map();
  let result = [];

  nums.forEach((item) => {
    map.set(item, map.get(item) + 1 || 1);
  });

  let sortedMap = new Map([...map].sort((a, b) => b[1] - a[1]));

  let times = 0;

  sortedMap.forEach((value, key) => {
    if (times < k) {
      result.push(key);
    }
    times++;
  });
  return result;
};

//solution 2: Heap
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  /* hash map :  { 1 => 3, 2 => 2, 3 => 1 } */
  let map = new Map();
  nums.forEach((n) => map.set(n, map.get(n) + 1 || 1));

  let result = [];

  //build min-heap (k length)  [3] [2,3] [2,3]
  let heap = new MinHeap();
  map.forEach((value, key) => {
    heap.insert(value);
    if (heap.size() > k) {
      heap.pop();
    }
    // console.log(heap.all());
  });

  // update result
  let values = heap.all();
  map.forEach((value, key) => {
    values.forEach((val) => {
      if (val === value && result.indexOf(key) === -1) {
        result.push(key);
      }
    });
  });

  return result;
};

class MinHeap {
  constructor() {
    this.values = [];
  }
  all() {
    return this.values;
  }
  peek() {
    return this.values[0];
  }
  size() {
    return this.values.length;
  }
  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    let currIndex = this.values.length - 1;

    while (currIndex > 0) {
      let curr = this.values[currIndex];
      let parentIndex = Math.floor((currIndex - 1) / 2);
      let parent = this.values[parentIndex];

      if (curr < parent) {
        this.values[parentIndex] = curr;
        this.values[currIndex] = parent;
      }
      currIndex = parentIndex;
    }
  }
  pop() {
    let root = this.values[0];
    if (this.values.length > 0) {
      let last = this.values.pop();
      this.values[0] = last;
      this.bubbleDown();
    }
    return root;
  }
  bubbleDown() {
    let currIndex = 0;
    let aim = this.values[0];
    let len = this.values.length;

    while (true) {
      let swap = null; // for tracking swap index
      let leftChildIndex = currIndex * 2 + 1;
      let rightChildIndex = currIndex * 2 + 2;
      let leftChild = this.values[leftChildIndex];
      let rightChild = this.values[rightChildIndex];

      if (leftChildIndex < len) {
        if (aim > leftChild) swap = leftChildIndex;
      }

      if (rightChildIndex < len) {
        if (
          (aim > rightChild && swap === null) ||
          (rightChild < leftChild && swap !== null)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      this.values[currIndex] = this.values[swap];
      this.values[swap] = aim;

      currIndex = swap;
    }
  }
}
