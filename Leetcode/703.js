/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.array = nums;
  this.k = k;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.array.push(val);

  //return kth max elemenet --> maintain a k size minHeap
  let minheap = new MinHeap();

  for (let i = 0; i < this.array.length; i++) {
    minheap.insert(this.array[i]);
    if (minheap.size() > this.k) {
      minheap.pop();
    }
  }

  return minheap.peek();
};

class MinHeap {
  constructor() {
    this.values = [];
  }
  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }
  peek() {
    return this.values[0];
  }
  size() {
    return this.values.length;
  }
  //remove min root
  pop() {
    //replace the min(root) with last item

    let root = this.values[0];
    let last = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = last;
      this.bubbleDown();
    }

    return root;
  }
  bubbleUp() {
    let index = this.values.length - 1;
    let parentVal;

    while (index > 0) {
      let currVal = this.values[index];
      let parentIndex = Math.floor((index - 1) / 2);
      let parentVal = this.values[parentIndex];

      if (currVal < parentVal) {
        //swap parent and current
        this.values[parentIndex] = currVal;
        this.values[index] = parentVal;
      }
      index = parentIndex;
    }
  }
  bubbleDown() {
    let index = 0;
    let curr = this.values[0];
    let length = this.values.length;

    while (true) {
      let leftchildIndex = index * 2 + 1;
      let rightChildIndex = index * 2 + 2;
      let leftChildValue, rightChildValue;

      let swap = null; // for tracking swap index

      if (leftchildIndex < length) {
        leftChildValue = this.values[leftchildIndex];

        if (curr > leftChildValue) {
          swap = leftchildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChildValue = this.values[rightChildIndex];

        if (
          (curr > rightChildValue && swap === null) ||
          (leftChildValue > rightChildValue && swap !== null)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      this.values[index] = this.values[swap];
      this.values[swap] = curr;

      index = swap;
    }
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
