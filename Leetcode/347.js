/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/** ---------------------------------------- solution1 :  hashtbale + sort --------------------------------------------------- */
// nums: [1,1,1,2,2,3], k=2 as example:
var topKFrequent = function (nums, k) {
  let map = new Map();
  let result = [];

  /* 1. build hash map {key => frequency}:  { 1 => 3, 2 => 2, 3 => 1 } */
  for (let n of nums) {
    map.set(n, map.get(n) + 1 || 1);
  }

  /*2. convert map to arr, then sort by frequency from big to small: [ 1, 3 ], [ 2, 2 ], [ 3, 1 ] */
  const sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

  /*3. sinced sorted by frequency, then find top k elements */
  for (let i = 0; i < k; i++) {
    result.push(sorted[i][0]);
  }

  return result;
};

// top k issues: https://dev.to/986913/top-k-elements-js-13e0
/* ：-------------------------------------- solution1 : hashtbale + Min Heap：--------------------------------------------------------*/

// nums: [1,1,1,2,2,3], k=2 as example:
var topKFrequent = function (nums, k) {
  /* 1. build hash map {key => frequency}:  { 1 => 3, 2 => 2, 3 => 1 } */
  let map = new Map();
  nums.forEach((n) => map.set(n, map.get(n) + 1 || 1));

  /* 2. build minHeap (maintain k length) */
  let minheap = new MinHeap(k);
  let arr = [];
  map.forEach((value, key) => {
    arr.push({
      key: key,
      priority: value,
    });
  }); //[ {key: 1, priority:3}, {key: 2, priority:2}, {key: 3, priority:1}]
  minheap.build(arr);

  //3. klenght min-heap is ready, log result
  return minheap
    .get()
    .map((item) => item.key)
    .reverse();
};

class Heap {
  constructor(size, type) {
    this.data = new Array(size); // SC: O(k)
    this.type = type;
  }
  size() {
    return this.data.length;
  }
  build(arr) {
    // O(nlogk)
    let i = 0;
    for (i = 0; i < this.size(); ++i) {
      this.data[i] = arr[i]; // O(k)
    }
    for (let j = Math.floor((this.size() - 2) / 2); j >= 0; --j) {
      // O(klogk)
      this._heapify(j);
    }
    while (i < arr.length) {
      // O((n - k) * logk)
      // if heap top is less than next entry, replace the heap top
      if (this.compare(this.data[0], arr[i])) {
        this.data[0] = arr[i];
        this._heapify(0);
      }
      ++i;
    }
  }
  _heapify(idx) {
    // O(logk)
    const leftIndex = 2 * idx + 1;
    const rightIndex = 2 * idx + 2;
    let p = idx;

    if (
      leftIndex < this.size() &&
      this.compare(this.data[leftIndex], this.data[p])
    ) {
      p = leftIndex;
    }
    if (
      rightIndex < this.size() &&
      this.compare(this.data[rightIndex], this.data[p])
    ) {
      p = rightIndex;
    }
    if (p !== idx) {
      // swap
      [this.data[p], this.data[idx]] = [this.data[idx], this.data[p]];
      this._heapify(p);
    }
  }
  compare(a, b) {
    // O(1)
    switch (this.type) {
      case 'MIN': // MinHeap
        if (typeof a !== 'object' && typeof b !== 'object') {
          // a,b are number, string etc..
          return a < b;
        } else {
          // a and b structor is {key: '' , priority: 1}
          // if freq of a < freq of b OR if freq is same but a is lexicographically greater than b then a should be the parent node
          return (
            a.priority < b.priority ||
            (a.priority === b.priority && a.key > b.key)
          );
        }
      case 'MAX': //MaxHeap
        if (typeof a !== 'object' && typeof b !== 'object') {
          return a > b;
        } else {
          return (
            // if freq of a > freq of b OR if freq is same but a is lexicographically smaller than b then a should be the parent node
            a.priority > b.priority ||
            (a.priority === b.priority && a.key < b.key)
          );
        }
      default:
        return '';
    }
  }
  get() {
    // until the heap is empty, create the resultant array by removing elements from the top
    const result = [];
    while (this.size()) {
      const top = this.data[0];
      [this.data[0], this.data[this.size() - 1]] = [
        this.data[this.size() - 1],
        this.data[0],
      ];
      this.data.pop();
      this._heapify(0);
      result.push(top);
    }
    return result;
  }
  insert(item) {
    this.data.push(item);
    this.build(this.data);
  }
  removeRoot() {
    let root = this.data[0];
    let last = this.data.pop();

    if (this.data.length > 0) {
      this.data[0] = last;
      this.build(this.data);
    }
    return root;
  }
  peek() {
    return this.data[0];
  }
}

class MinHeap extends Heap {
  constructor(size) {
    super(size, 'MIN');
  }
}
class MaxHeap extends Heap {
  constructor(size) {
    super(size, 'MAX');
  }
}
