/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/************************************* Solution1: hashtbale + sort **************************************/
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

/************************************* Solution2 : hashtbale + Min Heap **************************************/
class Heap {
  constructor(compareFn) {
    this.compareFn = compareFn;
    this.queue = [];
  }

  // 添加
  push(item) {
    // 推入元素
    this.queue.push(item);

    // 上浮
    let index = this.size() - 1; // 记录推入元素下标
    let parent = Math.floor((index - 1) / 2); // 记录父节点下标

    while (parent >= 0 && this.compare(parent, index) > 0) {
      // 注意compare参数顺序
      [this.queue[index], this.queue[parent]] = [
        this.queue[parent],
        this.queue[index],
      ];

      // 更新下标
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  // 获取堆顶元素并移除
  pop() {
    // 堆顶元素
    const out = this.queue[0];

    // 移除堆顶元素 填入最后一个元素
    this.queue[0] = this.queue.pop();

    // 下沉
    let index = 0; // 记录下沉元素下标
    let left = 1; // left 是左子节点下标 left + 1 则是右子节点下标
    let searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;

    while (searchChild !== undefined && this.compare(index, searchChild) > 0) {
      // 注意compare参数顺序
      [this.queue[index], this.queue[searchChild]] = [
        this.queue[searchChild],
        this.queue[index],
      ];

      // 更新下标
      index = searchChild;
      left = 2 * index + 1;
      searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;
    }

    return out;
  }

  size() {
    return this.queue.length;
  }

  // 使用传入的 compareFn 比较两个位置的元素
  compare(index1, index2) {
    // 处理下标越界问题
    if (this.queue[index1] === undefined) return 1;
    if (this.queue[index2] === undefined) return -1;

    return this.compareFn(this.queue[index1], this.queue[index2]);
  }
}

// main function:
const topKFrequent = function (nums, k) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, map.get(num) + 1 || 1);
  }

  // 创建小顶堆
  const heap = new Heap((a, b) => a[1] - b[1]);

  // entry 是一个长度为2的数组，0位置存储key，1位置存储value
  for (const entry of map.entries()) {
    heap.push(entry);

    // 维持小顶堆size不超过K
    if (heap.size() > k) heap.pop();
  }

  //这时候小顶堆就包括了前K个高频元素，输出即可
  const res = [];
  for (let i = heap.size() - 1; i >= 0; i--) {
    res[i] = heap.pop()[0];
  }
  return res;
};

/************************************* Solution3 : hashtbale + Min Heap **************************************/
import { MinHeap } from '../DataStructure/Tree/Heap/Heap';

var topKFrequent = function (nums, k) {
  /* 1. build hash map {key => frequency}:  nums[1,1,1,2,2,3] k=2 as example -->   { 1 => 3, 2 => 2, 3 => 1 } */
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
