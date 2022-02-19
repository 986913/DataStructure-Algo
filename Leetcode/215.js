/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// solution1:  use js build in .sort function
var findKthLargest = function (nums, k) {
  let sorted = nums.sort((a, b) => a - b);
  return sorted[sorted.length - k];
};

//solution2：  MIN HEAP
/*** @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const findKthLargest = function (nums, k) {
  let minHeap = new MinBinaryHeap();
  for (let i = 0; i < nums.length; i++) {
    minHeap.insert(nums[i]);
    if (minHeap.size() > k) {
      minHeap.removeMin();
    }
  }

  return minHeap.peek();
};
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
  size() {
    return this.values.length;
  }
}

/*
solution3: quick select:

  Quick Select 类似快排，选取pivot，把小于pivot的元素都移到pivot之前，这样pivot所在位置就是第pivot index 小的元素。 
  但是不需要完全给数组排序，只要找到当前pivot的位置是否是在第(n-k)小的位置，如果是，找到第k大的数直接返回。

  这个方法的理论依据是 partition 得到的点的下标就是最终排序之后的下标，根据这个下 标，我们可以判断第 K 大的数在哪里
 */
const findKthLargest = function (nums, k) {
  k = nums.length - k;
  return quickselect(0, nums.length - 1);

  function quickselect(left, right) {
    if (left === right) return nums[left];
    let randomIdx = left + Math.floor(Math.random() * (right - left));
    let pivotIdx = partition(left, right, randomIdx);
    if (k < pivotIdx) return quickselect(left, pivotIdx);
    else if (k > pivotIdx) return quickselect(pivotIdx + 1, right);
    return nums[k];
  }

  function partition(left, right, randomIdx) {
    const pivot = nums[randomIdx];
    swap(randomIdx, right);
    let pointer = left;
    for (let idx = left; idx <= right; idx++) {
      if (nums[idx] < pivot) {
        swap(pointer, idx);
        pointer++;
      }
    }
    swap(pointer, right);
    return pointer;
  }

  function swap(idx1, idx2) {
    let temp = nums[idx1];
    nums[idx1] = nums[idx2];
    nums[idx2] = temp;
  }
};
