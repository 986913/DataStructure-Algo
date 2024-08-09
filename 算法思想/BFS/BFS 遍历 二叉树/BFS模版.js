/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

/***************************** BFS - 结果是2维数组时 ******************************/
const levelOrder = (root) => {
  if (root === null) return [];

  // let depth=0; //optional: 记录tree总共有多少层。。
  let visited = [];
  let queue = [root];

  //每进一次while就是一层
  while (queue.length) {
    let len = queue.length; //记录当前层的节点数
    let curLevel = []; //curLevel用于存放每一层的节点
    // depth++  //optional: 每进一次while循环就是进入了新的一层。。

    /* 每进一次forloop就是遍历每一层的nodes, queue弹出(shift)len个, 并且开始加(push)下一层的节点 */
    for (let i = 0; i < len; i++) {
      let node = queue.shift(); //弹出当前层的节点
      curLevel.push(node.val); // 更新curLevel

      if (node.left) queue.push(node.left); // 存放当前层的下一层的节点到queue
      if (node.right) queue.push(node.right); // 存放当前层的下一层的节点到queue
    }

    visited.push(curLevel); //把每一层的结果放到结果数组
  }

  return visited;
};

/***************************** BFS - 结果是1维数组时 ******************************/
const levelOrder = (root) => {
  if (root === null) return [];

  let visited = [];
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();
    visited.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return visited;
};

/***************************** BFS 遍历 N-ary Tree ******************************/
var levelOrder = function (root) {
  if (!root) return [];

  let visited = [];
  let queue = [root];
  // let depth=0; //optional: 记录tree总共有多少层。。

  while (queue.length) {
    let len = queue.length;
    let currLevel = [];
    // depth++  //optional: 每进一次while循环就是进入了新的一层。。

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      currLevel.push(node.val);
      //不同点在这：这里不再是 ndoe.left node.right 而是用for-of循坏node.children
      for (let child of node.children) {
        if (child) queue.push(child);
      }
    }

    visited.push(currLevel);
  }

  return visited;
};
