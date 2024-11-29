/**
 * @param {number[][]} heights
 * @return {number}
 */

/*************************   Solution: dijkstra 算法 (会用到PriortyQueue class) ******************************/

/****************** Main function ******************/
var minimumEffortPath = function (heights) {
  let m = heights.length;
  let n = heights[0].length;

  let effortTo = dijkstra(heights); // dijkstra returns the 2D array effortTo
  return effortTo[m - 1][n - 1]; // Return the value at the bottom-right corner
};

/****************** Helper function ******************/
const dijkstra = (matrix) => {
  let m = matrix.length;
  let n = matrix[0].length;

  // let effortTo = Array.from({ length: m }, () => Array(n).fill(Infinity));
  let effortTo = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => Infinity)
  );
  effortTo[0][0] = 0;

  let pq = new MyPriorityQueue((a, b) => a.effortFromStart - b.effortFromStart);
  pq.enqueue(new State(0, 0, 0));

  while (!pq.isEmpty()) {
    let {
      x: curX,
      y: curY,
      effortFromStart: curEffortFromStart,
    } = pq.dequeue();

    // If the current node is the destination (bottom-right corner), return the effort
    if (curX === m - 1 && curY === n - 1) return effortTo; // Debugging: ensure the path is correct
    if (curEffortFromStart > effortTo[curX][curY]) continue;

    for (let [nextX, nextY] of adj(matrix, curX, curY)) {
      // Calculate the effort to move to the next node
      let effortToNextNode = Math.max(
        effortTo[curX][curY],
        Math.abs(matrix[curX][curY] - matrix[nextX][nextY])
      );

      if (effortToNextNode < effortTo[nextX][nextY]) {
        effortTo[nextX][nextY] = effortToNextNode;
        pq.enqueue(new State(nextX, nextY, effortToNextNode));
      }
    }
  }

  return effortTo; // Ensure the correct return value
};

const adj = (matrix, x, y) => {
  let m = matrix.length;
  let n = matrix[0].length;

  const directions = [
    [-1, 0], // Up
    [1, 0], // Down
    [0, -1], // Left
    [0, 1], // Right
  ];

  let neighbors = [];
  for (let [dx, dy] of directions) {
    let nx = x + dx;
    let ny = y + dy;
    if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
      neighbors.push([nx, ny]);
    }
  }
  return neighbors;
};

class MyPriorityQueue {
  constructor(compare) {
    if (typeof compare !== 'function') {
      throw new Error('compare function required!');
    }

    this.data = [];
    this.compare = compare;
  }

  //二分查找 寻找插入位置
  search(target) {
    let low = 0,
      high = this.data.length;
    while (low < high) {
      let mid = low + ((high - low) >> 1);
      if (this.compare(this.data[mid], target) > 0) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    return low;
  }

  //添加
  enqueue(elem) {
    let index = this.search(elem);
    this.data.splice(index, 0, elem);
    return this.data.length;
  }

  //取出最优元素
  dequeue() {
    return this.data.shift();
  }

  //查看最优元素
  peek() {
    return this.data[0];
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

class State {
  constructor(x, y, effortFromStart) {
    this.x = x;
    this.y = y;
    this.effortFromStart = effortFromStart;
  }
}
